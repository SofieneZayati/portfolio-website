import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { profile } from '../data/profile'

const socials = [
  { href: `mailto:${profile.email}`, icon: HiMail, label: 'Email' },
  { href: `tel:${profile.phone}`, icon: HiPhone, label: 'Phone' },
  { href: 'https://github.com/SofieneZayati', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sofiene-zayati', icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/Legacyyyyyyyy/', icon: FaFacebookF, label: 'Facebook' },
  { href: 'https://x.com/sofiene_zayati', icon: FaXTwitter, label: 'Twitter' },
  { href: 'https://www.instagram.com/sofiene_zayati/', icon: FaInstagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="font-display font-bold text-2xl text-gradient">SZ</span>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <HiMail size={14} />
              {profile.email}
            </span>
            <span className="flex items-center gap-1.5">
              <HiPhone size={14} />
              {profile.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <HiLocationMarker size={14} />
              {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={social.label}
              className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-white hover:bg-gradient-to-br hover:from-[#00f5ff] hover:to-[#8b5cf6] hover:border-transparent hover:-translate-y-1.5 hover:shadow-[0_12px_25px_rgba(0,245,255,0.15)] transition-all duration-300"
            >
              <social.icon size={16} />
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs text-white/25"
        >
          &copy; {new Date().getFullYear()} {profile.name}. Crafted with care.
        </motion.p>
      </div>
    </footer>
  )
}
