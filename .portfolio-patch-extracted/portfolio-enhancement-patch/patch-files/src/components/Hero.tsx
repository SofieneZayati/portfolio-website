import { useEffect, useState, useRef } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { HiArrowRight, HiChevronDown, HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/profile'

function GlitchText({ text, useGradient = false }: { text: string; useGradient?: boolean }) {
  const [glitching, setGlitching] = useState(false)
  const reduceMotion = useReducedMotion()

  const triggerGlitch = () => {
    if (reduceMotion) return
    setGlitching(true)
    window.setTimeout(() => setGlitching(false), 180)
  }

  const gradientStyle: CSSProperties = useGradient
    ? {
        background: 'linear-gradient(135deg, #fff 0%, #00f5ff 30%, #ff0080 70%, #8b5cf6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }
    : {}

  return (
    <span
      className={`relative inline-block transition-all duration-75 ${
        glitching ? 'opacity-90 blur-[1px] translate-x-[2px] skew-x-1' : ''
      }`}
      style={gradientStyle}
      onMouseEnter={triggerGlitch}
      onFocus={triggerGlitch}
    >
      {text}
    </span>
  )
}

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) {
      setDisplayed(text)
      setShowCursor(false)
      return
    }

    const timeout = window.setTimeout(() => {
      let i = 0
      const interval = window.setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) {
          window.clearInterval(interval)
          window.setTimeout(() => setShowCursor(false), 2000)
        }
      }, 60)
      return () => window.clearInterval(interval)
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [text, delay, reduceMotion])

  return (
    <span>
      {displayed}
      <span
        className="inline-block ml-1"
        style={{
          width: '2px',
          height: '1em',
          backgroundColor: '#00f5ff',
          verticalAlign: 'text-bottom',
          animation: showCursor ? 'blink 0.8s step-end infinite' : 'none',
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      />
    </span>
  )
}

function ProfilePhoto() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20
    containerRef.current.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg)`
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return
    containerRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)'
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto mt-12 lg:mt-0"
      style={{ transition: 'transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)', width: '400px', height: '400px', maxWidth: '100%' }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #00f5ff, #8b5cf6, #ff0080, #00f5ff)',
          animation: reduceMotion ? 'none' : 'spin-slow 6s linear infinite',
          padding: '3px',
        }}
      >
        <div className="w-full h-full rounded-full" style={{ backgroundColor: '#050505' }} />
      </div>

      <div
        className="absolute inset-0 rounded-full animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,255,0.15) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)',
          filter: 'blur(30px)',
          transform: 'scale(1.3)',
          animation: reduceMotion ? 'none' : undefined,
        }}
      />

      <div
        className="absolute rounded-full overflow-hidden"
        style={{
          inset: '6px',
          border: '2px solid rgba(255,255,255,0.1)',
        }}
      >
        <img
          src="/picture.png"
          alt="Sofiene Zayati"
          className="w-full h-full object-cover"
          style={{ filter: 'contrast(1.05) brightness(1.05)' }}
        />
      </div>

      <div
        className="absolute rounded-full"
        style={{
          width: '60px', height: '60px',
          top: '-8px', right: '-8px',
          background: 'rgba(0,245,255,0.15)',
          filter: 'blur(20px)',
          animation: reduceMotion ? 'none' : 'float 4s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '80px', height: '80px',
          bottom: '-12px', left: '-12px',
          background: 'rgba(139,92,246,0.12)',
          filter: 'blur(24px)',
          animation: reduceMotion ? 'none' : 'float 5s ease-in-out infinite reverse',
        }}
      />
    </div>
  )
}

export default function Hero() {
  const github = profile.socials.find((social) => social.label === 'GitHub')?.url
  const linkedIn = profile.socials.find((social) => social.label === 'LinkedIn')?.url

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 text-center lg:text-left pt-32 pb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-display text-base md:text-lg font-semibold tracking-[0.25em] uppercase text-white/30 mb-6 block">
                <TypewriterText text="Embedded & Web Engineer" delay={800} />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="heading-xl mb-8"
            >
              <span className="text-white">Hi, I'm </span>
              <br />
              <GlitchText text={profile.name} useGradient />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              style={{ lineHeight: '1.8', wordSpacing: 'normal' }}
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed lg:mx-0 mx-auto"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10"
            >
              <a
                href="#projects"
                className="hero-btn-primary group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white rounded-2xl"
              >
                <span>Explore My Work</span>
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="hero-btn-secondary group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white/80 rounded-2xl border border-white/10"
              >
                Let's Talk
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-5"
              aria-label="Professional links"
            >
              <a
                href="/cv.pdf"
                download="Sofiene_Zayati_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[#00f5ff] bg-[#00f5ff]/10 border border-[#00f5ff]/20 hover:bg-[#00f5ff]/20 transition-all duration-300"
              >
                <HiDownload />
                Download CV
              </a>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white/70 bg-white/[0.04] border border-white/[0.06] hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white/70 bg-white/[0.04] border border-white/[0.06] hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                >
                  <FaLinkedinIn />
                  LinkedIn
                </a>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="hidden lg:flex justify-center shrink-0"
          >
            <ProfilePhoto />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:hidden flex justify-center"
            style={{ order: -1 }}
          >
            <div style={{ transform: 'scale(0.75)' }}>
              <ProfilePhoto />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#00f5ff] transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-display font-semibold">
          Scroll
        </span>
        <HiChevronDown className="animate-bounce" size={18} />
      </motion.a>
    </section>
  )
}
