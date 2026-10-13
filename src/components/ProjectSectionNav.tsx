import { useEffect, useState } from 'react'

interface Props {
  sections: { id: string; label: string }[]
}
export default function ProjectSectionNav({ sections }: Props) {
  const [active, setActive] = useState('overview')
  const ids = sections.map((section) => section.id).join('|')
  useEffect(() => {
    let scheduled = false
    const update = () => {
      scheduled = false
      let current = ids.split('|')[0]
      for (const id of ids.split('|')) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= 210) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!scheduled) {
        scheduled = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return (
    <nav className="case-section-nav" aria-label="Project sections">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={active === section.id ? 'location' : undefined}
        >
          {section.label}
        </a>
      ))}
    </nav>
  )
}
