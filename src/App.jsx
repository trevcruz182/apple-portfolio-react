import React from 'react'
import Hero from './components/Hero'
import Spotlight from './components/Spotlight'
import ProjectShowcase from './components/ProjectShowcase'
import ProjectsGrid from './components/ProjectsGrid'
import TechShowcase from './components/TechShowcase'
import About from './components/About'
import Footer from './components/Footer'
import projects from './data/projects'
import Header from './components/Header'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <main className="space-y-32">
        <Spotlight />
        {projects.map((p, i) => (
          <>
            <ProjectShowcase key={p.id} project={p} reversed={i % 2 === 1} />
            <hr style={{color: 'rgba(52, 50, 49, 0.1)', width: '85%', marginLeft: '9%', display: 'flex', alignItems: 'center'}} />
          </>
        ))}
        <ProjectsGrid projects={projects} />
        <TechShowcase />
        <About />
      </main>
      <Footer />
    </div>
  )
}
