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
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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
              aria-current={i === activeIndex ? 'true' : undefined}
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
      <div className="project-nav-mobile" role="tablist" aria-label="Project sections">
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={`project-nav-chip ${i === activeIndex ? 'active' : ''}`}
            role="tab"
            aria-selected={i === activeIndex}
          >
            {section.label}
          </button>
        ))}
      </div>
    </>
  )
}
