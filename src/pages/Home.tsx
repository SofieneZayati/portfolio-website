import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import ContactForm from '../components/ContactForm'
import { experiences } from '../data/experience'

const education = experiences.filter((e) => e.type === 'education')
const work = experiences.filter((e) => e.type === 'work')

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Timeline education={education} experience={work} />
      <Skills />
      <ContactForm />
    </>
  )
}
