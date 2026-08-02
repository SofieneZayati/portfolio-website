import { motion } from 'framer-motion'
import { useState, type FormEvent, type ComponentType } from 'react'
import { HiArrowRight, HiCheck, HiDownload, HiExclamation, HiMail, HiPaperAirplane } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { profile } from '../data/profile'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

type ContactItem = {
  icon: ComponentType<{ size?: number; className?: string }>
  label: string
  value: string
  href: string
}

const contactItems: ContactItem[] = [
  { icon: HiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: 'Let’s connect', href: 'https://www.linkedin.com/in/sofiene-zayati' },
  { icon: FaGithub, label: 'GitHub', value: 'Browse my code', href: 'https://github.com/SofieneZayati' },
]

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/manjkjgp', {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Message could not be delivered')
      setFormData({ name: '', email: '', message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const statusMessage = status === 'success'
    ? 'Thanks—your message has been sent. I’ll reply as soon as I can.'
    : status === 'error'
      ? `The form could not send your message. Please email me directly at ${profile.email}.`
      : ''

  return (
    <section id="contact" className="section-shell section-shell--contact" aria-labelledby="contact-heading">
      <div className="section-container section-container--narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="contact-shell"
        >
          <div className="contact-copy">
            <div className="availability-pill">
              <span className="availability-dot" aria-hidden="true" />
              Open to web, full-stack and embedded opportunities
            </div>
            <span className="section-label">Let’s build something useful</span>
            <h2 id="contact-heading">
              Have a role or product worth <span>building together?</span>
            </h2>
            <p>
              I’m interested in product-focused web, full-stack, AI automation, and connected-
              systems work in Tunisia or with international teams.
            </p>

            <div className="contact-links">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const external = href.startsWith('http')
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                  >
                    <span className="contact-link__icon" aria-hidden="true"><Icon size={18} /></span>
                    <span><small>{label}</small><strong>{value}</strong></span>
                    <HiArrowRight className="contact-link__arrow" aria-hidden="true" />
                  </a>
                )
              })}
            </div>

            <a href="/Sofiene_Zayati_CV.pdf" download="Sofiene_Zayati_CV.pdf" className="button-link contact-cv">
              <HiDownload aria-hidden="true" /> Download my CV
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === 'sending'}>
            <div className="contact-form__heading">
              <p>Send a message</p>
              <span>I usually reply within 1–2 days.</span>
            </div>

            <div className="contact-form__row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  required
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                required
                placeholder="Tell me about the opportunity, project, or idea..."
              />
            </div>

            <div className="contact-form__footer">
              <p
                className={`form-status ${status === 'error' ? 'is-error' : ''}`}
                role={status === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
                {statusMessage && (status === 'success' ? <HiCheck aria-hidden="true" /> : <HiExclamation aria-hidden="true" />)}
                {statusMessage}
              </p>
              <button type="submit" className="button button--primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
                <HiPaperAirplane className="-rotate-45" aria-hidden="true" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
