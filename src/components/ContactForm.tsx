import { motion } from 'framer-motion'
import { useState, type FormEvent, type ComponentType } from 'react'
import {
  HiPaperAirplane,
  HiCheck,
  HiExclamation,
  HiMail,
  HiDownload,
} from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import { profile } from '../data/profile'

type ContactItem = {
  icon: ComponentType<{ size?: number; className?: string }>
  title: string
  subtitle: string
  href: string
  external: boolean
}

const contactItems: ContactItem[] = [
  {
    icon: HiMail,
    title: 'Email',
    subtitle: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: FaLinkedinIn,
    title: 'LinkedIn',
    subtitle: 'linkedin.com/in/sofiene-zayati',
    href: 'https://www.linkedin.com/in/sofiene-zayati',
    external: true,
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    subtitle: 'github.com/SofieneZayati',
    href: 'https://github.com/SofieneZayati',
    external: true,
  },
  {
    icon: HiDownload,
    title: 'Download CV',
    subtitle: 'Sofiene_Zayati_CV.pdf',
    href: '/cv.pdf',
    external: false,
  },
]

function DirectContactCard({ icon: Icon, title, subtitle, href, external }: ContactItem) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      download={!external && href.endsWith('.pdf') ? 'Sofiene_Zayati_CV.pdf' : undefined}
      className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 hover:border-[#00f5ff]/25 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-[#00f5ff]/10 flex items-center justify-center text-[#00f5ff] shrink-0 group-hover:bg-[#00f5ff]/15 transition-colors">
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-white/40 truncate">{subtitle}</p>
      </div>
    </a>
  )
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/manjkjgp', {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement),
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Failed')
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Contact</span>
          <h2 className="heading-lg mt-3 mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-lg">
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Direct contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          {contactItems.map((item) => (
            <DirectContactCard key={item.title} {...item} />
          ))}
        </motion.div>

        {/* Availability strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-[#00f5ff]/15 bg-[#00f5ff]/[0.04] px-5 py-4 mb-12 flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#00f5ff] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00f5ff]" />
          </span>
          <p className="text-sm text-white/70">
            <span className="text-white font-semibold">Currently open to</span>{' '}
            Internships · Full-time opportunities · Freelance projects · AI / IoT
            collaborations
          </p>
        </motion.div>

        {/* Form card */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6 glass-card p-8 sm:p-10 rounded-3xl max-w-2xl mx-auto"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-white/70">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-5 py-3.5 text-base bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[#00f5ff]/50 focus:shadow-[0_0_30px_rgba(0,245,255,0.08)] focus:bg-white/[0.06]"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-white/70">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-5 py-3.5 text-base bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[#00f5ff]/50 focus:shadow-[0_0_30px_rgba(0,245,255,0.08)] focus:bg-white/[0.06]"
              placeholder="Your email address"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-white/70">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full px-5 py-3.5 text-base bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[#00f5ff]/50 focus:shadow-[0_0_30px_rgba(0,245,255,0.08)] focus:bg-white/[0.06] resize-none"
              placeholder="Tell me about your project, opportunity, or idea..."
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#00f5ff] to-[#ff0080] shadow-[0_10px_25px_rgba(0,245,255,0.25)] hover:shadow-[0_15px_30px_rgba(0,245,255,0.35)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <HiCheck size={16} />
                  Sent Successfully!
                </>
              ) : status === 'error' ? (
                <>
                  <HiExclamation size={16} />
                  Something went wrong
                </>
              ) : (
                <>
                  <HiPaperAirplane size={15} className="-rotate-45" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
