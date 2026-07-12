import { useState, useEffect, useCallback } from 'react'

interface NavSection {
  id: string
  label: string
}

interface Props {
  sections: NavSection[]
}

export default function ProjectSectionNav({ sections }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null
        for (const entry of entries) {
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.intersectionRatio)) {
            best = entry
          }
        }
        if (best) {
          const idx = sections.findIndex((s) => s.id === best!.target.id)
          if (idx !== -1) setActiveIndex(idx)
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-80px 0px -30% 0px' }
    )

    for (const section of sections) {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [sections])

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return false

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    el.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' })
    window.history.pushState(null, '', `#${encodeURIComponent(id)}`)
    return true
  }, [])

  if (sections.length < 2) return null

  return (
    <>
      {/* Desktop: right-side vertical navigation */}
      <nav className="project-nav-wrap" aria-label="Section navigation">
        {sections.map((section, i) => (
          <div key={section.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button
              onClick={() => scrollTo(section.id)}
              className={`project-nav-item ${i === activeIndex ? 'active' : ''}`}
              aria-label={`Scroll to ${section.label}`}
              aria-current={i === activeIndex ? 'location' : undefined}
            >
              <span className="project-nav-label">{section.label}</span>
              <span
                className={`project-nav-dot ${i <= activeIndex ? 'visited' : ''} ${i === activeIndex ? 'active' : ''}`}
              />
            </button>
            {i < sections.length - 1 && (
              <div className={`project-nav-line ${i < activeIndex ? 'filled' : ''}`} />
            )}
          </div>
        ))}
      </nav>

      {/* Mobile: horizontal scrollable bar */}
      <nav className="project-nav-mobile" aria-label="Project sections">
        {sections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
              if (scrollTo(section.id)) event.preventDefault()
            }}
            className={`project-nav-chip ${i === activeIndex ? 'active' : ''}`}
            aria-current={i === activeIndex ? 'location' : undefined}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </>
  )
}
