import { useMemo, useState } from 'react'
import { HiPhotograph } from 'react-icons/hi'
import type { Project } from '../data/projects'

interface Props {
  project: Project
  src?: string
  alt?: string
  eager?: boolean
  className?: string
}

function initials(title: string) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export default function ProjectArtwork({ project, src, alt = '', eager = false, className = '' }: Props) {
  const [failed, setFailed] = useState(false)
  const shortName = useMemo(() => initials(project.title), [project.title])

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <div className={`project-artwork project-artwork--${project.category} ${className}`} aria-label={`${project.title} visual placeholder`}>
      <div className="project-artwork__grid" aria-hidden="true" />
      <div className="project-artwork__orb" aria-hidden="true" />
      <div className="project-artwork__content">
        <div className="project-artwork__header">
          <span>{project.category === 'embedded' ? 'Hardware / Software' : project.tagline}</span>
          <HiPhotograph aria-hidden="true" />
        </div>
        <strong>{shortName}</strong>
        <div>
          <span>{project.title}</span>
          <small>Project visuals coming soon</small>
        </div>
      </div>
    </div>
  )
}
