import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiDownload, HiMenu, HiX } from 'react-icons/hi'

const links = [
  { href: '/#projects', label: 'Work', section: 'projects' },
  { href: '/#about', label: 'Profile', section: 'about' },
  { href: '/#experience', label: 'Experience', section: 'experience' },
  { href: '/#skills', label: 'Toolkit', section: 'skills' },
  { href: '/#contact', label: 'Contact', section: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
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
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return
      const links = Array.from(mobileMenuRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])
      if (links.length === 0) return
      const first = links[0]
      const last = links[links.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const focusFrame = window.requestAnimationFrame(() => {
      mobileMenuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    })
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      window.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = previousOverflow
    }
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
        <Link to="/" className="brand" aria-label="SZ, Sofiene Zayati — home" onClick={() => setMobileOpen(false)}>
          <span className="brand-mark" aria-hidden="true">SZ</span>
          <span className="brand-copy">
            <strong>Sofiene Zayati</strong>
            <small>Full-Stack · AI · IoT</small>
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
          <a href="/Sofiene_Zayati_CV.pdf" download="Sofiene_Zayati_CV.pdf" className="nav-cv">
            <HiDownload aria-hidden="true" /> CV
          </a>
        </div>

        <button
          ref={toggleRef}
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
              ref={mobileMenuRef}
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
              <a href="/Sofiene_Zayati_CV.pdf" download="Sofiene_Zayati_CV.pdf" className="mobile-nav__cv">
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
