import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'
import { preview } from 'vite'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const output = resolve(root, 'public', 'cv.pdf')
const namedOutput = resolve(root, 'public', 'Sofiene_Zayati_CV_Germany.pdf')
const host = '127.0.0.1'
const port = 4188

const edgeCandidates = [
  process.env['PROGRAMFILES(X86)'] && resolve(process.env['PROGRAMFILES(X86)'], 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  process.env.PROGRAMFILES && resolve(process.env.PROGRAMFILES, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  process.env.LOCALAPPDATA && resolve(process.env.LOCALAPPDATA, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
].filter(Boolean)

const executablePath = edgeCandidates.find((candidate) => existsSync(candidate))

if (!executablePath) {
  throw new Error('Microsoft Edge was not found. Install Edge or update the browser candidates in generate-germany-cv.mjs.')
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
  const response = await page.goto(`http://${host}:${port}/cv-germany.html`, { waitUntil: 'networkidle' })

  if (!response?.ok()) {
    throw new Error(`CV source returned HTTP ${response?.status() ?? 'unknown'}.`)
  }

  await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete && image.naturalWidth > 0))

  const pageCount = await page.locator('.page').count()
  if (pageCount !== 2) throw new Error(`Expected two CV pages in the source, found ${pageCount}.`)

  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  })

  copyFileSync(output, namedOutput)
  console.log(`Generated ${output} and ${namedOutput}.`)
} finally {
  if (browser) await browser.close()
  await server.close()
}
