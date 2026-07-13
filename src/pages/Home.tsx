import Hero from '../components/Hero'
import EngineeringProfile from '../components/EngineeringProfile'
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
        title="Sofiene Zayati | Full-Stack Developer & Embedded Systems Graduate"
        description="Sofiene Zayati builds full-stack web products, AI workflows, and connected systems with React, FastAPI, Spring Boot, ESP32, MQTT, and BLE."
        path="/"
        type="profile"
      />
      <Hero />
      <Projects />
      <EngineeringProfile />
      <Timeline education={education} experience={work} />
      <Skills />
      <ContactForm />
    </>
  )
}
