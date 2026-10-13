import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { render, routes, metadata } from '../dist-ssr/entry-server.js'

const origin = 'https://sofienezayati.tn'
const template = await readFile(resolve('dist/index.html'), 'utf8')
const escape = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
const noScript = `<noscript><style>#main-content [style*="opacity"]{opacity:1!important}#main-content [style*="transform"]{transform:none!important}.nav-toggle{display:none}.noscript-nav{display:flex;flex-wrap:wrap;gap:1rem;padding:7rem 1.25rem 0;position:relative;z-index:1;color:#b79aff}</style><nav class="noscript-nav" aria-label="Portfolio navigation"><a href="/">Home</a><a href="/#projects">Projects</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav></noscript>`

await mkdir(resolve('dist/project'), { recursive: true })
for (const path of [...routes, '/404']) {
  const meta = metadata(path)
  const url = origin + meta.path
  const image = origin + meta.image
  let markup = await render(path)
  const preloads = [...markup.matchAll(/<link[^>]+rel="preload"[^>]*\/>/g)]
    .map((match) => match[0])
    .join('')
  markup = markup.replace(/<link[^>]+rel="preload"[^>]*\/>/g, '')
  let html = template.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escape(meta.title)}</title>`,
  )
  const values = {
    description: meta.description,
    robots: meta.noindex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large',
    googlebot: meta.noindex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large',
    'og:title': meta.title,
    'og:description': meta.description,
    'og:type': meta.type,
    'og:url': url,
    'og:image': image,
    'og:image:alt': meta.imageAlt,
    'twitter:title': meta.title,
    'twitter:description': meta.description,
    'twitter:image': image,
    'twitter:image:alt': meta.imageAlt,
  }
  for (const [key, value] of Object.entries(values))
    html = html.replace(
      new RegExp(`(<meta (?:name|property)="${key}" content=")[^"]*("[^>]*>)`),
      `$1${escape(value).replaceAll('$', '$$$$')}$2`,
    )
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
  )
  if (meta.type === 'article') {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      '@id': url + '#project',
      name: meta.title.split(' | ')[0],
      description: meta.description,
      url,
      image,
      author: { '@type': 'Person', name: 'Sofiene Zayati', url: origin },
    }
    html = html.replace(
      '</head>',
      `<script id="project-structured-data" type="application/ld+json">${JSON.stringify(data).replaceAll('<', '\\u003c')}</script></head>`,
    )
  }
  html = html.replace('</head>', `${preloads}</head>`)
  html = html.replace(
    '<div id="root"></div>',
    `${noScript}<div id="root" data-prerendered="true">${markup}</div>`,
  )
  const filename =
    path === '/'
      ? 'index.html'
      : path === '/404'
        ? '404.html'
        : `${path.slice(1)}.html`
  await writeFile(resolve('dist', filename), html)
}
console.log(
  `Pre-rendered ${routes.length} portfolio routes and a not-found page.`,
)
