import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import ContactForm from '../components/ContactForm'
import { experiences } from '../data/experience'
import SEO from '../components/SEO'

const education = experiences.filter((e) => e.type === 'education')
const work = experiences.filter((e) => e.type === 'work')

export default function Home() {
  return (
    <>
      <SEO
        title="Sofiene Zayati | Embedded & Web Engineer"
        description="Official portfolio of Sofiene Zayati, an embedded systems and web engineer in Tunisia building AI, IoT, full-stack, and intelligent hardware-software projects."
        path="/"
        type="profile"
      />
      <Hero />
      <Projects />
      <Timeline education={education} experience={work} />
      <Skills />
      <ContactForm />
    </>
  )
}
