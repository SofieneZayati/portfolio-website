export interface Experience {
  period: string
  title: string
  organization: string
  description: string
  type: 'education' | 'work'
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
    organization: "Higher Institute of Technological Studies of Rades — Radis, Tunisia",
    description:
      'Focused on microcontroller programming, IoT architectures, mobile development, and hardware-software integration.',
    type: 'education',
  },
  {
    period: 'Sep 2017 — Jun 2021',
    title: 'Baccalaureate in Technical Sciences',
    organization: 'Lycée Technique Farhat Hached Rades — Radis, Tunisia',
    description:
      'Foundation in technical sciences, mathematics, and introductory engineering concepts.',
    type: 'education',
  },
  {
    period: 'Jul 2025 — Aug 2025',
    title: 'AI Automation & Full Stack Developer',
    organization: 'Inspark Connect — Tunis, Tunisia',
    description:
      'Development of AI-powered workflows and intelligent assistants for the Prigado e-commerce platform using n8n, Laravel, Vue.js, MySQL, and Gemini.',
    type: 'work',
  },
  {
    period: 'Feb 2024 — May 2024',
    title: 'Internship — Embedded Systems & Software Developer',
    organization: 'Scheidt & Bachmann — Megrine, Tunisia',
    description:
      'Created MacroPark: a smart parking system using License Plate Recognition (LPR) and mobile app access with BLE fallback, MQTT communication, and ESP32-controlled barriers.',
    type: 'work',
  },
  {
    period: 'Jan 2023 — Feb 2023',
    title: 'Internship — Hardware & Software Project Manager',
    organization: 'Scheidt & Bachmann — Megrine, Tunisia',
    description:
      'Created Smart Unlock: a secure keyless door access system using BLE mobile authentication, MQTT communication, and ESP32 hardware control.',
    type: 'work',
  },
  {
    period: 'Jan 2022 — Feb 2022',
    title: 'Internship — Web Development',
    organization: 'Sotunol — Megrine, Tunisia',
    description:
      'Developed and improved the company\'s web platform, enhancing frontend interfaces and optimizing backend performance.',
    type: 'work',
  },
]
