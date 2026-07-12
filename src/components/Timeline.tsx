import { motion } from 'framer-motion'
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi'
import type { Experience } from '../data/experience'

interface Props {
  education: Experience[]
  experience: Experience[]
}

function TimelineCard({ item, index }: { item: Experience; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.18) }}
      className="timeline-item"
    >
      <span className="timeline-item__dot" aria-hidden="true" />
      <p className="timeline-item__period">{item.period}</p>
      <h4>{item.title}</h4>
      <p className="timeline-item__organization">{item.organization}</p>
      <p className="timeline-item__description">{item.description}</p>
    </motion.article>
  )
}

function TimelineColumn({
  title,
  items,
  type,
}: {
  title: string
  items: Experience[]
  type: 'work' | 'education'
}) {
  const Icon = type === 'work' ? HiBriefcase : HiAcademicCap

  return (
    <div className={`timeline-column timeline-column--${type}`}>
      <div className="timeline-column__heading">
        <span aria-hidden="true"><Icon /></span>
        <div>
          <p>{type === 'work' ? 'Professional' : 'Academic'}</p>
          <h3>{title}</h3>
        </div>
      </div>
      <div className="timeline-list">
        {items.map((item, index) => (
          <TimelineCard key={`${item.period}-${item.title}`} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

export default function Timeline({ education, experience }: Props) {
  return (
    <section id="experience" className="section-shell section-shell--tinted" aria-labelledby="experience-heading">
      <div className="section-container section-container--narrow">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="section-intro"
        >
          <div>
            <span className="section-label">Experience</span>
            <h2 id="experience-heading" className="section-heading">
              Learning by building, <span>then building better.</span>
            </h2>
          </div>
          <p>
            A path through embedded engineering, web technologies, and hands-on product work
            across internships and multidisciplinary projects.
          </p>
        </motion.header>

        <div className="timeline-grid">
          <TimelineColumn title="Work experience" items={experience} type="work" />
          <TimelineColumn title="Education" items={education} type="education" />
        </div>
      </div>
    </section>
  )
}
