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
  title: 'Embedded Systems Graduate & Web Engineering Student',
  tagline:
    'Embedded systems graduate and web engineering student turning real-world problems into connected products across firmware, AI services, and modern web platforms.',
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
