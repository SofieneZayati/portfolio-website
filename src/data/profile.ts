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
  name: 'Sofiene ZAYATI',
  title: 'Embedded Systems Graduate & Web Technologies Engineering Student',
  tagline:
    'Engineering student passionate about fusing hardware and software into intelligent systems. Grounded in embedded programming with strong full-stack skills, I build end-to-end solutions applying AI/ML to smarter IoT devices and data-driven web platforms.',
  email: 'sofiene.zayati@gmail.com',
  phone: '+216 55 321 315',
  location: 'Tunisia',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sofiene-zayati', icon: 'FaLinkedinIn' },
    { label: 'GitHub', url: 'https://github.com/SofieneZayati', icon: 'FaGithub' },
    { label: 'Facebook', url: 'https://www.facebook.com/Legacyyyyyyyy/', icon: 'FaFacebookF' },
    { label: 'X', url: 'https://x.com/sofiene_zayati', icon: 'FaXTwitter' },
    { label: 'Instagram', url: 'https://www.instagram.com/sofiene_zayati/', icon: 'FaInstagram' },
  ],
  languages: [
    { name: 'Arabic', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Fluent', proficiency: 90 },
    { name: 'French', level: 'Fluent', proficiency: 90 },
    { name: 'German', level: 'Goethe-Zertifikat A2', proficiency: 35 },
  ],
}
