import { motion } from 'framer-motion'
import { HiChip, HiCode, HiLightningBolt, HiServer } from 'react-icons/hi'

const focusAreas = [
  {
    icon: HiCode,
    title: 'Web products',
    label: 'Primary focus',
    description:
      'Responsive interfaces, role-based SaaS products, and maintainable full-stack applications built around real workflows.',
    tools: ['React & Next.js', 'TypeScript', 'NestJS & FastAPI'],
  },
  {
    icon: HiChip,
    title: 'Connected systems',
    label: 'Engineering foundation',
    description:
      'Firmware, sensors, and reliable device communication shaped by an embedded-systems background and hands-on IoT work.',
    tools: ['Embedded C/C++', 'ESP32 & WT32', 'MQTT & BLE'],
  },
  {
    icon: HiLightningBolt,
    title: 'Applied intelligence',
    label: 'Core capability',
    description:
      'AI-assisted decisions, document intelligence, and automation designed around explainability, resilience, and human control.',
    tools: ['n8n & Gemini', 'OCR & document AI', 'Groq & fallback logic'],
  },
]

const systemLayers = [
  { label: 'Device', value: 'C++ · ESP32', icon: HiChip },
  { label: 'Connect', value: 'MQTT · BLE', icon: HiLightningBolt },
  { label: 'Services', value: 'APIs · Cloud', icon: HiServer },
  { label: 'Experience', value: 'React · Next', icon: HiCode },
]

export default function EngineeringProfile() {
  return (
    <section id="about" className="section-shell section-shell--profile" aria-labelledby="profile-heading">
      <div className="section-container">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="profile-intro"
        >
          <div>
            <span className="section-label">Engineering profile</span>
            <h2 id="profile-heading" className="section-heading">
              Product-focused by default. <span>Systems-minded by training.</span>
            </h2>
          </div>
          <div className="profile-intro__copy">
            <p>
              I combine full-stack product engineering with applied AI and an embedded-systems
              foundation. That range helps me own the complete workflow: the data and decision
              logic, the services that move it, and the interface people finally use.
            </p>
            <p className="profile-principle">
              My strongest work lives where reliable engineering and useful product design meet.
            </p>
          </div>
        </motion.header>

        <div className="focus-grid">
          {focusAreas.map(({ icon: Icon, title, label, description, tools }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="focus-card"
            >
              <div className="focus-card__topline">
                <span className="focus-card__icon" aria-hidden="true"><Icon /></span>
                <span>{label}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul aria-label={`${title} technologies`}>
                {tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="system-flow"
          aria-label="End-to-end engineering workflow"
        >
          <div className="system-flow__intro">
            <span>One connected product</span>
            <strong>From physical input to a useful interface</strong>
          </div>
          <ol>
            {systemLayers.map(({ label, value, icon: Icon }, index) => (
              <li key={label}>
                <span className="system-flow__number">{String(index + 1).padStart(2, '0')}</span>
                <Icon aria-hidden="true" />
                <span><small>{label}</small><strong>{value}</strong></span>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
