import { prerenderToNodeStream } from 'react-dom/static'
import type { Readable } from 'node:stream'
import App from './App'
import { projects } from './data/projects'

export const routes = [
  '/',
  ...projects.map((project) => `/project/${project.id}`),
]

export async function render(url: string) {
  const { prelude } = await prerenderToNodeStream(<App url={url} />, {
    onError(error) {
      throw error
    },
  })
  let html = ''
  for await (const chunk of prelude as unknown as Readable) html += chunk
  return html
}

export function metadata(url: string) {
  const project = projects.find((project) => url === `/project/${project.id}`)
  if (project)
    return {
      title: `${project.title} | Sofiene Zayati`,
      description: project.description,
      path: url,
      type: 'article',
      image: project.cardPreview ?? project.screenshots[0] ?? '/og.png',
      imageAlt: `${project.title} project by Sofiene Zayati`,
      noindex: false,
    }
  if (url === '/')
    return {
      title: 'Sofiene Zayati | Full-Stack & AI Engineer',
      description:
        'Sofiene Zayati designs and engineers full-stack products, applied AI workflows, and connected systems with React, NestJS, FastAPI, OCR, n8n, ESP32, and MQTT.',
      path: '/',
      type: 'profile',
      image: '/og.png',
      imageAlt: 'Sofiene Zayati — Full-Stack and AI Engineer portfolio',
      noindex: false,
    }
  return {
    title: 'Page not found | Sofiene Zayati',
    description:
      'This page could not be found. Explore Sofiene Zayati’s engineering portfolio.',
    path: url,
    type: 'website',
    image: '/og.png',
    imageAlt: 'Sofiene Zayati portfolio',
    noindex: true,
  }
}
