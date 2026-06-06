import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import type { Project } from '../data/projects'

interface Props {
  project: Project
  index: number
}

const categoryAccents: Record<string, { from: string; to: string; border: string; shadow: string }> = {
  web: { from: '#00f5ff', to: '#8b5cf6', border: 'rgba(0,245,255,0.2)', shadow: 'rgba(0,245,255,0.12)' },
  embedded: { from: '#8b5cf6', to: '#ff0080', border: 'rgba(139,92,246,0.2)', shadow: 'rgba(139,92,246,0.12)' },
  mobile: { from: '#ff0080', to: '#00f5ff', border: 'rgba(255,0,128,0.2)', shadow: 'rgba(255,0,128,0.12)' },
  ai: { from: '#8b5cf6', to: '#00f5ff', border: 'rgba(139,92,246,0.2)', shadow: 'rgba(139,92,246,0.12)' },
}

export default function ProjectCard({ project, index }: Props) {
  const accent = categoryAccents[project.category] || categoryAccents.web
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12
    cardRef.current.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-8px)`

    // Move the glow effect to follow cursor
    const glowEl = cardRef.current.querySelector('.card-glow') as HTMLElement
    if (glowEl) {
      const px = ((e.clientX - rect.left) / rect.width) * 100
      const py = ((e.clientY - rect.top) / rect.height) * 100
      glowEl.style.background = `radial-gradient(circle at ${px}% ${py}%, ${accent.from}25, transparent 60%)`
      glowEl.style.opacity = '1'
    }
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateY(0)'
    const glowEl = cardRef.current.querySelector('.card-glow') as HTMLElement
    if (glowEl) glowEl.style.opacity = '0'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)' }}
      >
        <Link
          to={`/project/${project.id}`}
          className="block relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500"
          style={{
            boxShadow: `0 20px 60px rgba(0,0,0,0.3)`,
          }}
        >
          {/* Cursor-following glow overlay */}
          <div
            className="card-glow absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
            style={{ zIndex: 1 }}
          />

          {/* Top accent bar */}
          <div
            className="h-1.5 w-full transition-all duration-500 group-hover:h-2"
            style={{
              background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
            }}
          />

          <div className="p-6 sm:p-8" style={{ position: 'relative', zIndex: 2 }}>
            {/* Logo + Category */}
            <div className="flex items-start justify-between mb-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${accent.from}30, ${accent.to}20)`,
                  border: `1px solid ${accent.border}`,
                }}
              >
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-10 h-10 object-contain drop-shadow-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                ) : (
                  <span className="text-xs font-bold text-white/70">
                    {project.title.slice(0, 3).toUpperCase()}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-end gap-1.5">
                <span
                  className="text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full"
                  style={{
                    color: accent.from,
                    background: `${accent.from}15`,
                    border: `1px solid ${accent.border}`,
                  }}
                >
                  {project.category}
                </span>
                {project.tags?.map((tag) => {
                  const tagAccent = categoryAccents[tag] || categoryAccents.web
                  return (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full"
                      style={{
                        color: tagAccent.from,
                        background: `${tagAccent.from}15`,
                        border: `1px solid ${tagAccent.border}`,
                      }}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Title + Description */}
            <h3 className="text-2xl font-bold text-white mb-2 font-display">{project.title}</h3>
            <p className="text-base text-[#00f5ff] font-medium mb-4">{project.tagline}</p>
            <p className="text-base text-white/70 leading-relaxed mb-6 line-clamp-3">
              {project.description}
            </p>

            {/* Screenshot Preview */}
            {project.screenshots.length > 0 && (
              <div className="relative mb-5 rounded-2xl overflow-hidden border border-white/[0.04]">
                <img
                  src={project.screenshots[0]}
                  alt={`${project.title} preview`}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top, rgba(5,5,5,0.8), transparent)`,
                  }}
                />
              </div>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2.5 py-1 text-xs font-medium text-white/30">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <div
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 group/link"
                style={{ color: accent.from }}
              >
                <span>View Project</span>
                <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" size={14} />
              </div>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/40 hover:text-white/70 transition-colors duration-300"
                >
                  ▶ Demo
                </a>
              )}
            </div>
          </div>

          {/* Hover glow */}
          <div
            className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-2xl"
            style={{
              background: `radial-gradient(ellipse at center, ${accent.from}20, transparent 70%)`,
            }}
          />
        </Link>
      </div>
    </motion.div>
  )
}
