import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const assetDirectory = process.argv.includes('--built') ? 'dist' : 'public'
const projectsSource = readFileSync(resolve(root, 'src/data/projects.ts'), 'utf8')
const contentSource = readFileSync(resolve(root, 'src/data/projectContent.ts'), 'utf8')
const sitemapSource = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8')
const experienceSource = readFileSync(resolve(root, 'src/data/experience.ts'), 'utf8')
const narrativesSource = readFileSync(resolve(root, 'src/data/projectNarratives.ts'), 'utf8')
const narrativeIds = [...narrativesSource.matchAll(/^\s{2}([a-z0-9]+): \{/gm)].map(match => match[1])

const projectIds = [...projectsSource.matchAll(/^\s{4}id: '([^']+)'/gm)].map((match) => match[1])
const contentBody = contentSource.slice(contentSource.indexOf('const content:'))
const contentIds = [...contentBody.matchAll(/^\s{2}([a-z0-9]+): \{$/gm)].map((match) => match[1])
const referencedAssets = [
  ...new Set(
    [...`${projectsSource}\n${contentSource}`.replaceAll('${base}', '/images/projects').matchAll(/['"`](\/images\/projects\/[^'"`]+)['"`]/g)].map(
      (match) => match[1],
    ),
  ),
]

const duplicateIds = projectIds.filter((id, index) => projectIds.indexOf(id) !== index)
const missingContent = projectIds.filter((id) => !contentIds.includes(id))
const orphanedContent = contentIds.filter((id) => !projectIds.includes(id))
const missingRoutes = projectIds.filter(
  (id) => !sitemapSource.includes(`<loc>https://sofienezayati.tn/project/${id}</loc>`),
)
const missingAssets = referencedAssets.filter((asset) => !existsSync(resolve(root, assetDirectory, decodeURIComponent(asset.slice(1)))))
const experienceProjects = [...experienceSource.matchAll(/projectId: '([^']+)'/g)].map((match) => match[1])
const missingExperienceProjects = experienceProjects.filter((id) => !projectIds.includes(id))
const featuredIdsSource = projectsSource.match(/export const featuredProjectIds = \[([\s\S]*?)\] as const/)?.[1] ?? ''
const featuredIds = [...featuredIdsSource.matchAll(/'([^']+)'/g)].map((match) => match[1])
const missingFeaturedProjects = featuredIds.filter((id) => !projectIds.includes(id))

const errors = [
  projectIds.some(id => !narrativeIds.includes(id)) && 'Every project must have an editorial brief.',
  duplicateIds.length > 0 && `Duplicate project IDs: ${duplicateIds.join(', ')}`,
  missingContent.length > 0 && `Projects without case-study content: ${missingContent.join(', ')}`,
  orphanedContent.length > 0 && `Case-study content without a project: ${orphanedContent.join(', ')}`,
  missingRoutes.length > 0 && `Projects missing from sitemap.xml: ${missingRoutes.join(', ')}`,
  missingAssets.length > 0 && `Missing project assets: ${missingAssets.join(', ')}`,
  missingExperienceProjects.length > 0 && `Experience links to unknown projects: ${missingExperienceProjects.join(', ')}`,
  missingFeaturedProjects.length > 0 && `Unknown featured projects: ${missingFeaturedProjects.join(', ')}`,
].filter(Boolean)

if (assetDirectory === 'dist') {
  for (const id of projectIds) {
    const path = resolve(root, 'dist/project', `${id}.html`)
    if (!existsSync(path)) { errors.push(`Missing prerendered project: ${id}`); continue }
    const html = readFileSync(path, 'utf8')
    if (!html.includes('data-prerendered="true"') || !/<h1[^>]*>[^<]+<\/h1>/.test(html) || !html.includes('Why it exists')) errors.push(`Incomplete prerendered content: ${id}`)
    if (!html.includes(`href="https://sofienezayati.tn/project/${id}"`) || !html.includes('project-structured-data')) errors.push(`Missing initial project metadata: ${id}`)
  }
  const homepage = readFileSync(resolve(root, 'dist/index.html'), 'utf8')
  if (!homepage.includes('data-prerendered="true"') || !homepage.includes('Engineering') || !homepage.includes('Sobly.tn')) errors.push('Missing prerendered homepage content.')
  const missingPage = readFileSync(resolve(root, 'dist/404.html'), 'utf8')
  if (!missingPage.includes('noindex, follow')) errors.push('The not-found page must not be indexed.')
  const deployment = JSON.parse(readFileSync(resolve(root, 'vercel.json'), 'utf8'))
  const projectRoute = new RegExp(deployment.routes[0].src)
  if (projectIds.some(id => !projectRoute.test(`/project/${id}`))) errors.push('Vercel routes must cover every project.')
}

if (errors.length > 0) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`Validated ${projectIds.length} projects, case studies, sitemap routes, and ${referencedAssets.length} assets.`)
