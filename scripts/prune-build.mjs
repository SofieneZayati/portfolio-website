import { existsSync, rmSync, statSync } from 'node:fs'
import { resolve, sep } from 'node:path'

const distRoot = resolve('dist')
const replacedAssets = [
  'picture-restored.png',
  'images/projects/benmahmoudstock/automotive-operations-editorial.png',
  'images/projects/machetamache/recipe-library.png',
  'images/projects/smartproperty/propertysearch.png',
  'images/projects/smartproperty/homepage.png',
  'images/projects/smartproperty/clientpropertydetails.png',
  'images/projects/smartproperty/clientpropertyadd.png',
  'images/projects/smartproperty/realestatepropertydetails.png',
  'images/projects/smartproperty/aifeedrecommendation.png',
  'images/projects/aurelle/home-desktop.png',
  'images/projects/pitchly/player-dashboard.png',
  'images/projects/prigado/architecture-globale.png',
  'images/projects/prigado/usecase-general.png',
  'images/projects/prigado/flowchart-multi-path.png',
  'images/projects/greencoffee/dashboard.png',
  'images/projects/greencoffee/customer-menu.png',
  'images/projects/zenithhouse/connected-home-concept.png',
  'images/projects/sps/android-parking-concept.png',
  'images/projects/smartagri/system-cover.png',
]
const unusedAssets = [
  'images/projects/macropark/MacroPark Presentation final.pptx',
]

let removedBytes = 0
for (const relativePath of [...replacedAssets, ...unusedAssets]) {
  const target = resolve(distRoot, relativePath)
  if (!target.startsWith(`${distRoot}${sep}`)) {
    throw new Error(`Refusing to prune outside dist: ${relativePath}`)
  }
  if (!existsSync(target)) continue
  const { size } = statSync(target)
  rmSync(target)
  removedBytes += size
}

console.log(`Pruned ${(removedBytes / 1024 / 1024).toFixed(1)} MB of replaced or unused build assets.`)
