import { HiArrowRight, HiDownload, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/profile'
import { featuredProjectIds } from '../data/projects'
import { experiences } from '../data/experience'

const proofPoints = [
  { value: String(featuredProjectIds.length).padStart(2, '0'), label: 'Selected case studies' },
  {
    value: String(experiences.filter((experience) => experience.type === 'work').length).padStart(2, '0'),
    label: 'Professional placements',
  },
  { value: '03', label: 'Engineering domains' },
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
            Open to full-stack, AI &amp; product engineering roles
          </div>

          <p className="hero-eyebrow">Full-stack &amp; AI engineer · Embedded systems background</p>
          <h1 id="hero-heading" className="hero-title">
            I build intelligent products
            <span>end to end.</span>
          </h1>
          <p className="hero-summary">{profile.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="button button--primary group">
              Explore selected work
              <HiArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="/Sofiene_Zayati_CV.pdf" download="Sofiene_Zayati_CV.pdf" className="button button--secondary">
              <HiDownload aria-hidden="true" />
              Download CV
            </a>
            <a href="#contact" className="button-link hero-contact-link">
              Contact me
              <HiArrowRight aria-hidden="true" />
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
            <span>Full-stack systems</span>
            <span aria-hidden="true">/</span>
            <span>Applied AI</span>
          </div>
          <div className="portrait-stage">
            <div className="portrait-halo" aria-hidden="true" />
            <img
              src="/picture-restored.png"
              alt="Sofiene Zayati"
              width={1556}
              height={1556}
              decoding="async"
              fetchPriority="high"
            />
            <span className="portrait-code portrait-code--one" aria-hidden="true">Web Development</span>
            <span className="portrait-code portrait-code--two" aria-hidden="true">Embedded Systems · IoT</span>
            <span className="portrait-code portrait-code--three" aria-hidden="true">AI · Machine Learning</span>
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
