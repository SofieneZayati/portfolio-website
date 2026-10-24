import { Link } from 'react-router-dom'
import { HiArrowRight, HiChip, HiCode, HiLightningBolt } from 'react-icons/hi'

const focusAreas = [
  {
    icon: HiCode,
    title: 'Full-stack products',
    description:
      'Interfaces that make complex work feel simple, backed by typed services, reliable data, and practical deployment.',
    tools: ['React & Next.js', 'TypeScript', 'NestJS & FastAPI'],
    project: 'sobly',
    evidence: 'See Sobly’s storefront & admin',
  },
  {
    icon: HiLightningBolt,
    title: 'AI with a purpose',
    description:
      'Document intelligence, conversational assistants, and automation integrated into the workflow people already use.',
    tools: ['n8n & Gemini', 'OCR & document AI', 'LLM integration'],
    project: 'prigado',
    evidence: 'Explore Prigado’s AI workflows',
  },
  {
    icon: HiChip,
    title: 'Software meets hardware',
    description:
      'An embedded-systems foundation that connects sensors, firmware, device communication, and the user-facing product.',
    tools: ['Embedded C/C++', 'ESP32 & WT32', 'MQTT & BLE'],
    project: 'macropark',
    evidence: 'Inside the MacroPark system',
  },
]
const process = [
  { title: 'Understand', description: 'Start with the people, the workflow, and the constraints.' },
  { title: 'Design', description: 'Shape a clear experience and a system that supports it.' },
  { title: 'Engineer', description: 'Connect interface, services, data, and integrations.' },
  { title: 'Deliver', description: 'Validate the critical paths and prepare a usable handoff.' },
]

export default function EngineeringProfile() {
  return (
    <section
      id="about"
      className="section-shell section-shell--profile"
      aria-labelledby="profile-heading"
    >
      <div className="section-container">
        <header className="profile-intro">
          <div>
            <span className="section-label">
              <span>02 /</span> A little about me
            </span>
            <h2 id="profile-heading" className="section-heading">
              I care about the details.
              <br />
              <span>And the whole system.</span>
            </h2>
          </div>
          <div className="profile-intro__copy">
            <p>
              I’m Sofiene, a developer based in Tunisia, studying Web and Internet Technologies
              at ESPRIT after a bachelor’s degree in Embedded and Mobile Systems at ISET Radès.
            </p>
            <p>
              I’ve built for shop owners, HR teams, and connected-parking projects. That range
              has taught me to work with the constraints that matter: offline access, permissions,
              reliable data, and a handoff someone else can use.
            </p>
            <p className="profile-principle">
              Good engineering should make someone’s day a little easier.
            </p>
          </div>
        </header>
        <div className="focus-grid">
          {focusAreas.map(({ icon: Icon, title, description, tools, project, evidence }, index) => (
            <article key={title} className="focus-card">
              <div className="focus-card__topline">
                <Icon aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul aria-label={`${title} technologies`}>
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <Link to={`/project/${project}`} className="evidence-link">
                {evidence}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <div className="process-panel">
          <div className="process-heading">
            <span className="section-label">The way I work</span>
            <h3>From the brief to the build.</h3>
          </div>
          <ol>
            {process.map((step, index) => (
              <li key={step.title}>
                <span className="process-number">0{index + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
