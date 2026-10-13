import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { skillCategories } from '../data/skills'
import { profile } from '../data/profile'

const categoryNotes: Record<string, string> = {
  'Frontend & Product': 'Responsive, accessible interfaces shaped around real user workflows.',
  'Backend & APIs':
    'Typed services, authentication, integrations, and real-time application logic.',
  'Embedded & IoT': 'Firmware, connectivity, and sensor-driven systems.',
  'AI & Automation': 'Applied models and AI services integrated into usable products.',
  'Data & Delivery': 'Reliable persistence and repeatable delivery from repository to production.',
  'Engineering Tools': 'The practical environment behind maintainable, collaborative delivery.',
}

const evidence: Record<string, { id: string; label: string }> = {
  'Frontend & Product': { id: 'sobly', label: 'Sobly storefront' },
  'Backend & APIs': { id: 'geniuspmo', label: 'LeadX workforce platform' },
  'Embedded & IoT': { id: 'macropark', label: 'MacroPark parking system' },
  'AI & Automation': { id: 'smartproperty', label: 'SmartProperty AI services' },
  'Data & Delivery': { id: 'sobly', label: 'Sobly VPS deployment' },
  'Engineering Tools': { id: 'geniuspmo', label: 'LeadX delivery & recovery' },
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-heading">
      <div className="section-container">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="section-intro"
        >
          <div>
            <span className="section-label">
              <span>04 /</span> The toolkit
            </span>
            <h2 id="skills-heading" className="section-heading">
              Different tools.
              <br />
              <span>One connected product.</span>
            </h2>
          </div>
          <p>
            My toolkit spans product interfaces, backend services, applied AI, and connected
            devices—with the strongest emphasis on shipping coherent web products.
          </p>
        </motion.header>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.055, 0.2) }}
              className="skill-card"
            >
              <div className="skill-card__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3>{category.category}</h3>
              <p>{categoryNotes[category.category]}</p>
              <ul aria-label={`${category.category} skills`}>
                {category.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <Link className="evidence-link" to={`/project/${evidence[category.category].id}`}>
                <span>In practice: {evidence[category.category].label}</span>
                <HiArrowRight aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="language-panel"
        >
          <div>
            <span className="section-label">Languages</span>
            <p>Comfortable collaborating across local and international teams.</p>
          </div>
          <ul>
            {profile.languages.map((language) => (
              <li key={language.name}>
                <strong>{language.name}</strong>
                <span>{language.level}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
