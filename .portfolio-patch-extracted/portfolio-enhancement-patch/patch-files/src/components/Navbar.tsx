import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiDownload, HiMenu, HiX } from 'react-icons/hi'

const links = [
  { href: '/', label: 'Home', section: 'home' },
  { href: '/#projects', label: 'Projects', section: 'projects' },
  { href: '/#experience', label: 'Journey', section: 'experience' },
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
      setScrolled(window.scrollY > 50)

      const docEl = document.documentElement
      const scrollPct = (window.scrollY / (docEl.scrollHeight - window.innerHeight)) * 100
      setScrollProgress(Math.min(scrollPct, 100))

      const sections = links.map((l) => l.section).filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 300) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.slice(2)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else if (pathname !== '/') {
        window.location.href = href
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`mx-auto mt-5 w-[92%] max-w-5xl px-6 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0f]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,245,255,0.06)]'
            : 'bg-white/[0.04] backdrop-blur-lg border border-white/[0.06]'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <img
              src="/favicon.png"
              alt="Sofiene Zayati"
              style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'contain' }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 relative ${
                  activeSection === link.section && pathname === '/'
                    ? 'text-[#00f5ff] bg-[#00f5ff]/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              download="Sofiene_Zayati_CV.pdf"
              className="ml-3 flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#00f5ff] bg-[#00f5ff]/10 border border-[#00f5ff]/20 rounded-xl hover:bg-[#00f5ff]/20 transition-all duration-300"
            >
              <HiDownload className="text-base" />
              CV
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              id="mobile-navigation"
              className="md:hidden overflow-hidden mt-4 pt-4 border-t border-white/10"
            >
              <div className="flex flex-col gap-2 pb-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                      activeSection === link.section
                        ? 'text-[#00f5ff] bg-[#00f5ff]/10'
                        : 'text-white/70 hover:text-[#00f5ff] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/cv.pdf"
                  download="Sofiene_Zayati_CV.pdf"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#00f5ff] bg-[#00f5ff]/10 border border-[#00f5ff]/20 rounded-xl hover:bg-[#00f5ff]/20 transition-all mt-1"
                >
                  <HiDownload className="text-base" />
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.04]">
        <div
          className="h-full bg-gradient-to-r from-[#00f5ff] to-[#8b5cf6] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </motion.nav>
  )
}
