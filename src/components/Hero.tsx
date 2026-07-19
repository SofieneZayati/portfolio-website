import { Link } from 'react-router-dom'
import { HiArrowRight, HiDocumentText, HiDownload, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { experiences } from '../data/experience'

const proofPoints = [
  { value: String(projects.length).padStart(2, '0'), label: 'Engineering projects' },
  {
    value: String(experiences.filter((experience) => experience.type === 'work').length).padStart(2, '0'),
    label: 'Professional placements',
  },
  {
    value: String(projects.reduce((total, project) => total + project.screenshots.length, 0)).padStart(2, '0'),
    label: 'Project screens',
  },
]

export default function Hero() {
  const github = profile.socials.find((social) => social.label === 'GitHub')?.url
  const linkedIn = profile.socials.find((social) => social.label === 'LinkedIn')?.url

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-shell">
        <div className="hero-copy">
          <div className="availability-pill">
            <span className="availability-dot" aria-hidden="true" />
            Open to web, full-stack &amp; embedded opportunities
          </div>

          <p className="hero-eyebrow">Full-stack web engineer · Embedded systems graduate</p>
          <h1 id="hero-heading" className="hero-title">
            I engineer digital products
            <span>from device to dashboard.</span>
          </h1>
          <p className="hero-summary">{profile.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="button button--primary group">
              Explore selected work
              <HiArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#contact" className="button button--secondary">
              Start a conversation
            </a>
            <a href="/cv.pdf" download="Sofiene_Zayati_CV.pdf" className="button-link">
              <HiDownload aria-hidden="true" />
              Download CV
            </a>
            <Link to="/project-dossier" className="button-link">
              <HiDocumentText aria-hidden="true" />
              Project dossier
            </Link>
          </div>

          <dl className="hero-proof" aria-label="Portfolio highlights">
            {proofPoints.map((item) => (
              <div key={item.label}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="portrait-card" aria-label="About Sofiene">
          <div className="portrait-card__topline">
            <span>Web engineering</span>
            <span aria-hidden="true">/</span>
            <span>Embedded foundation</span>
          </div>
          <div className="portrait-stage">
            <div className="portrait-halo" aria-hidden="true" />
            <img src="/picture.png" alt="Sofiene Zayati" />
            <span className="portrait-code portrait-code--one" aria-hidden="true">ESP32 / MQTT</span>
            <span className="portrait-code portrait-code--two" aria-hidden="true">React / Next</span>
            <span className="portrait-code portrait-code--three" aria-hidden="true">AI / n8n</span>
          </div>
          <div className="portrait-card__footer">
            <span className="inline-flex items-center gap-2">
              <HiLocationMarker aria-hidden="true" /> {profile.location}
            </span>
            <div className="portrait-socials" aria-label="Professional profiles">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <FaGithub aria-hidden="true" />
                </a>
              )}
              {linkedIn && (
                <a href={linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                  <FaLinkedinIn aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
