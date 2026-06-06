import { motion } from 'framer-motion'
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi'
import type { Experience } from '../data/experience'

interface Props {
  education: Experience[]
  experience: Experience[]
}

function TimelineDot({ color }: { color: string }) {
  return (
    <div className="relative z-10 flex items-center justify-center">
      <div
        className="w-5 h-5 rounded-full border-2"
        style={{ borderColor: color, backgroundColor: '#050505' }}
      />
      <div
        className="absolute w-10 h-10 rounded-full opacity-20 animate-glow-pulse"
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

function TimelineCard({ exp, index, side }: { exp: Experience; index: number; side: 'left' | 'right' }) {
  const color = exp.type === 'education' ? '#00f5ff' : '#8b5cf6'

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      <div
        className="absolute left-[7px] top-4 bottom-0 w-px"
        style={{
          background: `linear-gradient(to bottom, ${color}40, transparent)`,
        }}
      />

      <div className="absolute left-0 top-2">
        <TimelineDot color={color} />
      </div>

      <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>
          {exp.period}
        </span>
        <h3 className="text-xl font-bold text-white mt-3 leading-snug">{exp.title}</h3>
        <p className="text-sm text-white/50 font-semibold mt-1">{exp.organization}</p>
        <p className="text-base text-white/70 mt-4 leading-relaxed">{exp.description}</p>
      </div>
    </motion.div>
  )
}

export default function Timeline({ education, experience }: Props) {
  return (
    <section id="experience" className="relative py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label">Journey</span>
          <h2 className="heading-lg mt-3 mb-4">
            <span className="text-gradient">Education & Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00f5ff]/10 border border-[#00f5ff]/20 flex items-center justify-center">
                <HiAcademicCap className="text-[#00f5ff]" size={18} />
              </div>
              <span className="font-display font-semibold text-white text-lg">Education</span>
            </motion.div>

            {education.map((exp, i) => (
              <TimelineCard key={i} exp={exp} index={i} side="left" />
            ))}
          </div>

          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center">
                <HiBriefcase className="text-[#8b5cf6]" size={18} />
              </div>
              <span className="font-display font-semibold text-white text-lg">Experience</span>
            </motion.div>

            {experience.map((exp, i) => (
              <TimelineCard key={i} exp={exp} index={i} side="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
