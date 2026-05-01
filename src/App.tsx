import { useState, useEffect } from 'react'
import { config } from './config/config'
import { SideNav } from './components/SideNav'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { TechSection } from './components/TechSection'
import { Footer } from './components/Footer'

function useActiveSection() {
  const [active, setActive] = useState('hero')
  useEffect(() => {
    const handler = () => {
      const sections = config.NAV_LINKS.map((l) =>
        document.getElementById(l.id),
      )
      const scrollY = window.scrollY + 160
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollY) {
          setActive(config.NAV_LINKS[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return active
}

export default function Portfolio() {
  const active = useActiveSection()

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = 'https://fonts.googleapis.com'
    document.head.appendChild(link)

    const link2 = document.createElement('link')
    link2.rel = 'stylesheet'
    link2.href =
      'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap'
    document.head.appendChild(link2)

    return () => {
      document.head.removeChild(link)
      document.head.removeChild(link2)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SideNav active={active} />
      <HeroSection />
      <ProjectsSection />
      <TechSection />
      <Footer />
    </div>
  )
}
