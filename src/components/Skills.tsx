import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'
import { profile } from '../data/profile'

const skillIcons: Record<string, string> = {
  'ESP32': '🎛️', 'WT32': '🎚️', 'Arduino': '🔌', 'MQTT': '📡',
  'BLE': '📶', 'IoT Systems': '🌐', 'Embedded C/C++': '⚙️',
  'C/C++': '⚡', 'Python': '🐍', 'TypeScript': 'TS', 'Java': '☕',
  'PyTorch': '🔥', 'XGBoost': '📈', 'Computer Vision': '👁️', 'OCR': '📄',
  'LLM Integration': '🧠',
  'React': '⚛️', 'Angular': '🅰️', 'NestJS': 'NE', 'FastAPI': 'FA', 'Symfony': 'SF',
  'Docker': '🐳', 'Kubernetes': '☸️', 'Jenkins': '🔧', 'CI/CD': '🔄',
  'Vercel': '▲', 'Cloudflare': '☁️',
  'MongoDB': '🍃', 'MySQL': '🗄️', 'Firebase': '🔥', 'REST APIs': '⇌',
}

const accentByIndex = ['#00f5ff', '#8b5cf6', '#ff0080', '#00f5ff', '#8b5cf6', '#ff0080']

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label">Skills & Expertise</span>
          <h2 className="heading-lg mt-3 mb-4">
            <span className="text-gradient">What I Work With</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-lg text-center">
            Full-stack development, embedded systems, AI/ML, and cloud-native deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="w-full glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col items-start text-left">
                <div
                  className="w-12 h-1 rounded-full mb-6 transition-all duration-300"
                  style={{ backgroundColor: accentByIndex[i] }}
                />
                <h3 className="font-display font-bold text-white text-2xl mb-6">
                  {cat.category}
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.items.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 transition-all shadow-sm"
                    >
                      <span className="text-base w-5 text-center drop-shadow-md">
                        {skillIcons[skill] || '?'}
                      </span>
                      <span className="text-white/80 text-sm font-semibold tracking-wide">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="section-label block text-center mb-8">Languages</span>
          <div className="glass-card rounded-3xl p-10">
            <div className="space-y-6">
              {profile.languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-base font-bold text-white tracking-wide">{lang.name}</span>
                    <span className="text-sm text-white/50 font-semibold">{lang.level}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#00f5ff] to-[#8b5cf6] shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
