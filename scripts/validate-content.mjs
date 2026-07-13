import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const projectsSource = readFileSync(resolve(root, 'src/data/projects.ts'), 'utf8')
const contentSource = readFileSync(resolve(root, 'src/data/projectContent.ts'), 'utf8')
const sitemapSource = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8')

const projectIds = [...projectsSource.matchAll(/^\s{4}id: '([^']+)'/gm)].map((match) => match[1])
const contentBody = contentSource.slice(contentSource.indexOf('const content:'))
const contentIds = [...contentBody.matchAll(/^\s{2}([a-z0-9]+): \{$/gm)].map((match) => match[1])
const referencedAssets = [...projectsSource.matchAll(/['"](\/images\/projects\/[^'"]+)['"]/g)].map(
  (match) => match[1],
)

const duplicateIds = projectIds.filter((id, index) => projectIds.indexOf(id) !== index)
const missingContent = projectIds.filter((id) => !contentIds.includes(id))
const orphanedContent = contentIds.filter((id) => !projectIds.includes(id))
const missingRoutes = projectIds.filter(
  (id) => !sitemapSource.includes(`<loc>https://sofienezayati.tn/project/${id}</loc>`),
)
const missingAssets = referencedAssets.filter((asset) => !existsSync(resolve(root, 'public', asset.slice(1))))

const errors = [
  duplicateIds.length > 0 && `Duplicate project IDs: ${duplicateIds.join(', ')}`,
  missingContent.length > 0 && `Projects without case-study content: ${missingContent.join(', ')}`,
  orphanedContent.length > 0 && `Case-study content without a project: ${orphanedContent.join(', ')}`,
  missingRoutes.length > 0 && `Projects missing from sitemap.xml: ${missingRoutes.join(', ')}`,
  missingAssets.length > 0 && `Missing project assets: ${missingAssets.join(', ')}`,
].filter(Boolean)

if (errors.length > 0) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`Validated ${projectIds.length} projects, case studies, sitemap routes, and ${referencedAssets.length} assets.`)
