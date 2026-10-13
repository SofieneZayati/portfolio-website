export interface Experience {
  period: string
  title: string
  organization: string
  description: string
  type: 'education' | 'work'
  technologies?: string[]
  projectId?: string
}

export const experiences: Experience[] = [
  {
    period: 'Sep 2024 — Present',
    title: 'Engineering Degree in Web and Internet Technologies (TWIN)',
    organization: 'ESPRIT — Ariana Governorate, Tunisia',
    description:
      'Specializing in modern web architectures, distributed systems, cloud-native development, and advanced software engineering practices.',
    type: 'education',
  },
  {
    period: 'Sep 2021 — Jun 2024',
    title: "Bachelor's Degree in Embedded and Mobile Systems",
    organization: "Higher Institute of Technological Studies of Radès — Radès, Tunisia",
    description:
      'Focused on microcontroller programming, IoT architectures, mobile development, and hardware-software integration.',
    type: 'education',
  },
  {
    period: 'Sep 2017 — Jun 2021',
    title: 'Baccalaureate in Technical Sciences',
    organization: 'Lycée Technique Farhat Hached Radès — Radès, Tunisia',
    description:
      'Foundation in technical sciences, mathematics, and introductory engineering concepts.',
    type: 'education',
  },
  {
    period: '2026',
    title: 'LeadX HRMS — Full-Stack & Mobile Project',
    organization: 'Genius PMO',
    description:
      'Designed and engineered LeadX HRMS: a role-aware workforce platform and Android attendance companion, with a shared API, automated checks, recovery tooling, and a deployment-ready company handoff.',
    type: 'work',
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'React Native', 'Docker'],
    projectId: 'geniuspmo',
  },
  {
    period: 'Jul 2025 — Aug 2025',
    title: 'AI Automation & Full-Stack Developer',
    organization: 'Inspark Connect — Tunis, Tunisia',
    description:
      'Development of AI-powered workflows and intelligent assistants for the Prigado e-commerce platform using n8n, Laravel, Vue.js, MySQL, and Gemini.',
    type: 'work',
    technologies: ['n8n', 'Laravel', 'Vue.js', 'MySQL', 'Gemini'],
    projectId: 'prigado',
  },
  {
    period: 'Feb 2024 — May 2024',
    title: 'MacroPark — Embedded & Software Project',
    organization: 'Scheidt & Bachmann — Megrine, Tunisia',
    description:
      'Created MacroPark: a smart parking system using License Plate Recognition (LPR) and mobile app access with BLE fallback, MQTT communication, and ESP32-controlled barriers.',
    type: 'work',
    technologies: ['C++', 'FastAPI', 'MQTT', 'BLE', 'Flutter'],
    projectId: 'macropark',
  },
  {
    period: 'Jan 2023 — Feb 2023',
    title: 'Smart Unlock — Hardware & Software Project',
    organization: 'Scheidt & Bachmann — Megrine, Tunisia',
    description:
      'Built the Smart Unlock prototype with ESP32 scanning, Eddystone BLE identifier matching, an indicator/relay proof, and MQTT status messaging.',
    type: 'work',
    technologies: ['ESP32', 'C++', 'BLE', 'MQTT'],
    projectId: 'smartunlock',
  },
  {
    period: 'Jan 2022 — Feb 2022',
    title: 'Web Development Project',
    organization: 'Sotunol — Megrine, Tunisia',
    description:
      'Developed and improved the company\'s web platform, enhancing frontend interfaces and optimizing backend performance.',
    type: 'work',
  },
]
