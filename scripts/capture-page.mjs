import { mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { chromium } from 'playwright-core'

const [url, outputPath, widthArg = '1440', heightArg = '960'] = process.argv.slice(2)

if (!url || !outputPath) {
  console.error('Usage: node scripts/capture-page.mjs <url> <output> [width] [height]')
  process.exit(1)
}

const width = Number.parseInt(widthArg, 10)
const height = Number.parseInt(heightArg, 10)
const output = resolve(outputPath)

if (!Number.isFinite(width) || !Number.isFinite(height)) {
  console.error('Viewport width and height must be numbers.')
  process.exit(1)
}

await mkdir(dirname(output), { recursive: true })

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: true,
})

try {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  })
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.screenshot({ path: output, fullPage: false })
  console.log(`Captured ${url} at ${width}x${height} -> ${output}`)
} finally {
  await browser.close()
}
