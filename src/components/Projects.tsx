import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const categories = [
  { value: 'all', label: 'All work' },
  { value: 'web', label: 'Web & SaaS' },
  { value: 'embedded', label: 'Embedded & IoT' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'ai', label: 'AI & automation' },
] as const

type Category = (typeof categories)[number]['value']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [showAll, setShowAll] = useState(false)

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(
        (project) => project.category === activeCategory || project.tags?.includes(activeCategory),
      )
  const visibleProjects = activeCategory === 'all' && !showAll
    ? projects.filter((project) => project.featured)
    : filtered

  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-heading">
      <div className="section-container">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="section-intro"
        >
          <div>
            <span className="section-label">Selected work</span>
            <h2 id="projects-heading" className="section-heading">
              Systems built to solve <span>real problems.</span>
            </h2>
          </div>
          <p>
            A focused selection of professional, academic, and personal work. Each case study
            states the context, my contribution, and the project&apos;s current scope.
          </p>
        </motion.header>

        <div className="project-toolbar">
          <div className="project-filters" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => {
                  setActiveCategory(category.value)
                  if (category.value !== 'all') setShowAll(false)
                }}
                aria-pressed={activeCategory === category.value}
                className={activeCategory === category.value ? 'is-active' : ''}
              >
                {category.label}
              </button>
            ))}
          </div>
          <p className="project-count" aria-live="polite">
            <strong>{visibleProjects.length}</strong>{activeCategory === 'all' && !showAll ? ' selected' : ''}{' '}
            {visibleProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => {
              const featured = activeCategory === 'all' && index === 0
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.32, delay: Math.min(index * 0.035, 0.14) }}
                  className={featured ? 'project-grid__featured' : ''}
                >
                  <ProjectCard project={project} featured={featured} />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {activeCategory === 'all' && (
          <div className="projects-more">
            <button type="button" onClick={() => setShowAll((expanded) => !expanded)} aria-expanded={showAll}>
              {showAll ? 'Show selected projects' : `View all ${projects.length} projects`}
              {showAll ? <HiChevronUp aria-hidden="true" /> : <HiChevronDown aria-hidden="true" />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
