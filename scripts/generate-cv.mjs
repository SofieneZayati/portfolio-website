import { existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'
import { preview } from 'vite'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const output = resolve(root, 'public', 'Sofiene_Zayati_CV.pdf')
const host = '127.0.0.1'
const port = 4188

const edgeCandidates = [
  process.env['PROGRAMFILES(X86)'] && resolve(process.env['PROGRAMFILES(X86)'], 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  process.env.PROGRAMFILES && resolve(process.env.PROGRAMFILES, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  process.env.LOCALAPPDATA && resolve(process.env.LOCALAPPDATA, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
].filter(Boolean)

const executablePath = edgeCandidates.find((candidate) => existsSync(candidate))

if (!executablePath) {
  throw new Error('Microsoft Edge was not found. Install Edge or update the browser candidates in generate-cv.mjs.')
}

const server = await preview({
  root,
  preview: { host, port, strictPort: true },
})

let browser

try {
  browser = await chromium.launch({
    executablePath,
    headless: true,
    args: ['--disable-gpu'],
  })

  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
  const response = await page.goto(`http://${host}:${port}/cv.html`, { waitUntil: 'networkidle' })

  if (!response?.ok()) {
    throw new Error(`CV source returned HTTP ${response?.status() ?? 'unknown'}.`)
  }

  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      Array.from(document.images).map((image) =>
        image.complete && image.naturalWidth > 0
          ? Promise.resolve()
          : new Promise((resolveImage, rejectImage) => {
              image.addEventListener('load', resolveImage, { once: true })
              image.addEventListener('error', rejectImage, { once: true })
            }),
      ),
    )
  })

  const pageCount = await page.locator('.page').count()
  if (pageCount !== 2) throw new Error(`Expected two CV pages in the source, found ${pageCount}.`)

  const pageDiagnostics = await page.locator('.page').evaluateAll((pages) =>
    pages.map((cvPage, index) => {
      const footer = cvPage.querySelector('.footer')
      const footerBox = footer?.getBoundingClientRect()
      const pageBox = cvPage.getBoundingClientRect()
      return {
        page: index + 1,
        overflowY: cvPage.scrollHeight - cvPage.clientHeight,
        footerInsidePage: Boolean(footerBox && footerBox.bottom <= pageBox.bottom + 0.5),
      }
    }),
  )

  const invalidPage = pageDiagnostics.find(({ overflowY, footerInsidePage }) => overflowY > 1 || !footerInsidePage)
  if (invalidPage) throw new Error(`CV page preflight failed: ${JSON.stringify(pageDiagnostics)}`)

  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  })

  if (!existsSync(output) || statSync(output).size < 50000) {
    throw new Error('Generated CV PDF is missing or unexpectedly small.')
  }

  console.log(`Generated ${output}.`)
} finally {
  if (browser) await browser.close()
  await server.close()
}
