export interface SkillCategory {
  category: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Embedded & IoT',
    items: ['ESP32', 'WT32', 'Arduino', 'MQTT', 'BLE', 'IoT Systems', 'Embedded C/C++'],
  },
  {
    category: 'Programming Languages',
    items: ['C/C++', 'Python', 'TypeScript', 'Java'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['PyTorch', 'XGBoost', 'Computer Vision', 'OCR', 'LLM Integration'],
  },
  {
    category: 'Frameworks & Full-Stack',
    items: ['React', 'Angular', 'NestJS', 'FastAPI', 'Symfony'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Vercel', 'Cloudflare'],
  },
  {
    category: 'Databases & APIs',
    items: ['MongoDB', 'MySQL', 'Firebase', 'REST APIs'],
  },
]
