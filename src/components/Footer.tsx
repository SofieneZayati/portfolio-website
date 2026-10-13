import { Link, useLocation } from 'react-router-dom'
import { HiArrowUp, HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { profile } from '../data/profile'

const professionalLinks = [
  { href: `mailto:${profile.email}`, icon: HiMail, label: 'Email' },
  { href: 'https://github.com/SofieneZayati', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sofiene-zayati', icon: FaLinkedinIn, label: 'LinkedIn' },
]

export default function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <Link to="/" className="brand" aria-label="SZ, Sofiene Zayati — home">
            <span className="brand-mark" aria-hidden="true">SZ</span>
            <span className="brand-copy">
              <strong>{profile.name}</strong>
              <small>Full-Stack &amp; AI Engineer</small>
            </span>
          </Link>
          <p>Thoughtful products. From the first idea to the final build.</p>
        </div>

        <div className="footer-links" aria-label="Professional links">
          {professionalLinks.map(({ href, icon: Icon, label }) => {
            const external = href.startsWith('http')
            return (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                <Icon aria-hidden="true" /> {label}
              </a>
            )
          })}
        </div>

        <a href={pathname === '/' ? '#home' : '#main-content'} className="back-to-top">
          Back to top <HiArrowUp aria-hidden="true" />
        </a>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location} · Designed &amp; built with care</span>
      </div>
    </footer>
  )
}
