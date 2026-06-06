import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const categories = ['all', 'web', 'embedded', 'mobile', 'ai'] as const
type Category = (typeof categories)[number]

const categoryAccents: Record<string, string> = {
  all: '#00f5ff',
  web: '#00f5ff',
  embedded: '#8b5cf6',
  mobile: '#ff0080',
  ai: '#8b5cf6',
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(
        (p) => p.category === activeCategory || (p.tags?.includes(activeCategory) ?? false)
      )

  return (
    <section id="projects" className="relative py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="heading-lg mt-3 mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg pt-2">
            Each project reflects a commitment to building systems that matter
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300"
              style={{
                color: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.4)',
                background: activeCategory === cat ? `${categoryAccents[cat]}20` : 'rgba(255,255,255,0.03)',
                borderColor: activeCategory === cat ? categoryAccents[cat] : 'rgba(255,255,255,0.08)',
                borderWidth: 1,
              }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{
                    background: `${categoryAccents[cat]}15`,
                    borderColor: categoryAccents[cat],
                    borderWidth: 1,
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
