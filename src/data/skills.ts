export interface SkillCategory {
  category: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend & Product',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend & APIs',
    items: ['NestJS', 'FastAPI', 'Spring Boot', 'Laravel', 'Node.js', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Embedded & IoT',
    items: ['Embedded C/C++', 'ESP32', 'WT32', 'Arduino', 'MQTT', 'BLE', 'IoT Sensors'],
  },
  {
    category: 'AI & Automation',
    items: ['n8n', 'Gemini', 'Groq', 'LLM Integration', 'OCR', 'Document Intelligence', 'Explainable Scoring'],
  },
  {
    category: 'Data & Delivery',
    items: ['MongoDB', 'MySQL', 'Firebase', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD'],
  },
  {
    category: 'Engineering Tools',
    items: ['Git', 'GitHub', 'Linux', 'Vercel', 'Cloudflare', 'SonarQube'],
  },
]
