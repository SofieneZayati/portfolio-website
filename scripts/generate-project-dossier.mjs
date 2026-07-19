import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'
import { preview } from 'vite'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const output = resolve(root, 'public', 'Sofiene_Zayati_Project_Dossier.pdf')
const host = '127.0.0.1'
const port = 4187

const edgeCandidates = [
  process.env['PROGRAMFILES(X86)'] && resolve(process.env['PROGRAMFILES(X86)'], 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  process.env.PROGRAMFILES && resolve(process.env.PROGRAMFILES, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  process.env.LOCALAPPDATA && resolve(process.env.LOCALAPPDATA, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
].filter(Boolean)

const executablePath = edgeCandidates.find((candidate) => existsSync(candidate))

if (!executablePath) {
  throw new Error('Microsoft Edge was not found. Install Edge or update the browser candidates in generate-project-dossier.mjs.')
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
  await page.goto(`http://${host}:${port}/project-dossier`, { waitUntil: 'networkidle' })
  await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete))

  const projectCount = await page.locator('.dossier-project').count()
  if (projectCount === 0) throw new Error('No project records were rendered in the dossier.')

  const pdf = await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  })

  console.log(`Generated ${output} (${projectCount} projects, ${Math.round(pdf.length / 1024)} KB).`)
} finally {
  await browser?.close()
  await server.close()
}
