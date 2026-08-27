import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Toolkit from '../components/Toolkit'
import Certificates from '../components/Certificates'
import Contact from '../components/Contact'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Toolkit />
      <Certificates />
      <Contact />
    </>
  )
}
