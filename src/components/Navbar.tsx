import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiDownload, HiMenu, HiX } from 'react-icons/hi'

const links = [
  { href: '/', label: 'Home', section: 'home' },
  { href: '/#projects', label: 'Work', section: 'projects' },
  { href: '/#experience', label: 'Experience', section: 'experience' },
  { href: '/#skills', label: 'Skills', section: 'skills' },
  { href: '/#contact', label: 'Contact', section: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)

      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0)

      if (pathname !== '/') return
      for (let index = links.length - 1; index >= 0; index -= 1) {
        const element = document.getElementById(links[index].section)
        if (element && element.getBoundingClientRect().top <= 240) {
          setActiveSection(links[index].section)
          break
        }
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [mobileOpen])

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false)
    if (!href.startsWith('/#') || pathname !== '/') return

    const target = document.getElementById(href.slice(2))
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
        <Link to="/" className="brand" aria-label="Sofiene Zayati, home" onClick={() => setMobileOpen(false)}>
          <span className="brand-mark" aria-hidden="true">SZ</span>
          <span className="brand-copy">
            <strong>Sofiene Zayati</strong>
            <small>Device to dashboard</small>
          </span>
        </Link>

        <div className="nav-links">
          {links.map((link) => {
            const active = pathname === '/' && activeSection === link.section
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={active ? 'is-active' : ''}
                aria-current={active ? 'location' : undefined}
              >
                {link.label}
              </a>
            )
          })}
          <a href="/cv.pdf" download="Sofiene_Zayati_CV.pdf" className="nav-cv">
            <HiDownload aria-hidden="true" /> CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="nav-toggle"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <HiX aria-hidden="true" /> : <HiMenu aria-hidden="true" />}
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              id="mobile-navigation"
              className="mobile-nav"
            >
              {links.map((link) => {
                const active = pathname === '/' && activeSection === link.section
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={active ? 'is-active' : ''}
                    aria-current={active ? 'location' : undefined}
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                )
              })}
              <a href="/cv.pdf" download="Sofiene_Zayati_CV.pdf" className="mobile-nav__cv">
                <HiDownload aria-hidden="true" /> Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="nav-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>
    </nav>
  )
}
