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
  title: 'Full-Stack Web Engineer & Embedded Systems Graduate',
  tagline:
    'I build full-stack platforms, AI-powered workflows, and connected products—combining modern web engineering with a practical embedded-systems foundation.',
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
