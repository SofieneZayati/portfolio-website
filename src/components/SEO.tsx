import { useEffect } from 'react'

type SEOProps = {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'profile' | 'article'
  noindex?: boolean
}

const SITE_URL = 'https://sofienezayati.tn'

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value))
}

export default function SEO({
  title,
  description,
  path = '/',
  image = '/images/og-image.png',
  type = 'website',
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`
    const canonicalUrl = `${SITE_URL}${normalizedPath}`
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

    document.title = title
    setMeta('meta[name="description"]', { name: 'description', content: description })
    setMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }, [title, description, path, image, type, noindex])

  return null
}
