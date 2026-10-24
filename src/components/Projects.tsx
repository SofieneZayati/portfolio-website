import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowDown, HiArrowUp, HiSearch, HiX } from 'react-icons/hi'
import ProjectCard from './ProjectCard'
import { featuredProjectIds, projects } from '../data/projects'

const categories = [
  { value: 'all', label: 'All work' },
  { value: 'web', label: 'Web & products' },
  { value: 'ai', label: 'AI & automation' },
  { value: 'embedded', label: 'Embedded & IoT' },
  { value: 'mobile', label: 'Mobile' },
] as const
type Category = (typeof categories)[number]['value']
const featuredProjects = featuredProjectIds.flatMap((id) =>
  projects.filter((project) => project.id === id),
)

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [showAll, setShowAll] = useState(false)
  const [query, setQuery] = useState('')
  const headingRef = useRef<HTMLHeadingElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const search = query.trim().toLowerCase()
  const browsingArchive = showAll || activeCategory !== 'all' || Boolean(search)
  const filtered = projects.filter((project) => {
    const matchesCategory =
      activeCategory === 'all' ||
      project.category === activeCategory ||
      project.tags?.includes(activeCategory)
    const searchable = [
      project.title,
      project.description,
      project.role,
      project.context,
      project.scope ?? '',
      ...project.techStack,
    ]
      .join(' ')
      .toLowerCase()
    return matchesCategory && (!search || searchable.includes(search))
  })
  const visibleProjects = browsingArchive ? filtered : featuredProjects

  return (
    <section
      id="projects"
      className="section-shell projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="section-container">
        <header className="section-intro">
          <div>
            <span className="section-label">
              <span>01 /</span> Selected work
            </span>
            <h2
              ref={headingRef}
              tabIndex={-1}
              id="projects-heading"
              className="section-heading"
            >
              Ideas are a start.
              <br />
              <span>Here’s the working software.</span>
            </h2>
          </div>
          <p>
            Explore the interfaces, architecture, and engineering decisions
            behind client products, team projects, and prototypes. Each case
            study explains my contribution and the current delivery scope.
          </p>
        </header>
        <Link to="/project/olivetrace" className="project-update">
          <span className="project-update__label">New case study</span>
          <span><strong>OliveTrace</strong> <span>Farm operations, reviewed AI advice, and a clearly defined team contribution.</span></span>
          <span aria-hidden="true">↗</span>
        </Link>
        <div className="project-toolbar">
          <div className="project-filters" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                aria-pressed={activeCategory === category.value}
                className={activeCategory === category.value ? 'is-active' : ''}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="project-search">
            <HiSearch aria-hidden="true" />
            <input
              ref={searchRef}
              type="search"
              aria-label="Search projects by name or technology"
              placeholder="Search work or tech…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button
                type="button"
                aria-label="Clear project search"
                onClick={() => {
                  setQuery('')
                  searchRef.current?.focus()
                }}
              >
                <HiX aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
        <p className="project-count" role="status">
          {browsingArchive
            ? `${visibleProjects.length} ${visibleProjects.length === 1 ? 'project' : 'projects'} found`
            : `${visibleProjects.length} selected projects`}
          <span>
            {browsingArchive
              ? ' / project archive'
              : ` / ${projects.length} in the archive`}
          </span>
        </p>
        <div
          className={`project-grid ${browsingArchive ? '' : 'project-grid--selected'}`}
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '60px' }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard
                project={project}
                index={index}
                featured={!browsingArchive && index === 0}
              />
            </motion.div>
          ))}
        </div>
        {visibleProjects.length === 0 && (
          <div className="projects-empty">
            <HiSearch aria-hidden="true" />
            <h3>No matching projects</h3>
            <p>Try a different name, technology, or category.</p>
            <button
              className="button button--secondary"
              type="button"
              onClick={() => {
                setQuery('')
                setActiveCategory('all')
                searchRef.current?.focus()
              }}
            >
              Reset filters
            </button>
          </div>
        )}
        {activeCategory === 'all' && !search && (
          <div className="projects-more">
            <span>
              {showAll
                ? 'The full collection. From first experiments to client delivery.'
                : 'More client work, team projects, and early experiments.'}
            </span>
            <button
              type="button"
              aria-expanded={showAll}
              onClick={() => {
                setShowAll(!showAll)
                if (showAll) {
                  headingRef.current?.scrollIntoView({ block: 'start' })
                  headingRef.current?.focus({ preventScroll: true })
                }
              }}
            >
              {showAll
                ? 'Back to selected work'
                : `Explore all ${projects.length} projects`}
              {showAll ? (
                <HiArrowUp aria-hidden="true" />
              ) : (
                <HiArrowDown aria-hidden="true" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
