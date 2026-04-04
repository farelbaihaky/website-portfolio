import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const duration = 1500
    const steps = 100
    const stepDuration = duration / steps
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 1
      setLoadingProgress(currentProgress)
      if (currentProgress >= 100) {
        clearInterval(interval)
        setTimeout(() => setIsLoading(false), 400)
      }
    }, stepDuration)
    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader-content">
          <div className="loader-initials">FB</div>
          <div className="loader-bar">
            <div className="loader-bar-fill" style={{ width: `${loadingProgress}%` }} />
          </div>
          <p className="loader-subtitle">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Farel Baihaky — IT Quality Assurance Engineer</p>
          <p className="footer-sub">Built with React + Vite</p>
        </div>
      </footer>
    </div>
  )
}

export default App
