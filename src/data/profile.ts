export interface Language {
  name: string
  level: string
  proficiency: number
}

export interface Profile {
  name: string
  title: string
  tagline: string
  email: string
  phone: string
  location: string
  socials: { label: string; url: string; icon: string }[]
  languages: Language[]
}

export const profile: Profile = {
  name: 'Sofiene Zayati',
  title: 'Full-Stack & AI Engineer',
  tagline:
    'I design and engineer full-stack products, applied AI workflows, and connected systems—turning complex requirements into clear, usable software.',
  email: 'sofiene.zayati@gmail.com',
  phone: '+216 55 321 315',
  location: 'Tunisia',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sofiene-zayati', icon: 'FaLinkedinIn' },
    { label: 'GitHub', url: 'https://github.com/SofieneZayati', icon: 'FaGithub' },
  ],
  languages: [
    { name: 'Arabic', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Fluent', proficiency: 90 },
    { name: 'French', level: 'Fluent', proficiency: 90 },
    { name: 'German', level: 'Goethe-Zertifikat A2', proficiency: 35 },
  ],
}
