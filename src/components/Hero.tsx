import { HiArrowRight, HiDownload, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

const proofPoints = [
  { value: String(projects.length).padStart(2, '0'), label: 'Project case studies' },
  { value: 'Device → cloud', label: 'End-to-end thinking' },
  { value: 'Tunisia · Remote', label: 'Open to opportunities' },
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
            Available for engineering opportunities
          </div>

          <p className="hero-eyebrow">Sofiene Zayati · Embedded &amp; full-stack engineer</p>
          <h1 id="hero-heading" className="hero-title">
            I build intelligent products
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
            <span>Embedded systems</span>
            <span aria-hidden="true">/</span>
            <span>Web engineering</span>
          </div>
          <div className="portrait-stage">
            <div className="portrait-halo" aria-hidden="true" />
            <img src="/picture.png" alt="Sofiene Zayati" />
            <span className="portrait-code portrait-code--one" aria-hidden="true">ESP32</span>
            <span className="portrait-code portrait-code--two" aria-hidden="true">React</span>
            <span className="portrait-code portrait-code--three" aria-hidden="true">AI / ML</span>
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
