import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Particles from './components/Particles'
import ScrollProgress from './components/ScrollProgress'
import BlobBackground from './components/BlobBackground'
import QABackground from './components/QABackground'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Simulate loading with percentage
    const duration = 2000
    const steps = 100
    const stepDuration = duration / steps

    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 1
      setLoadingProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        // Direct to portfolio after 100%
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <div className="loader-container">
        <QABackground />
        <div className="loader-content">
          <div className="loader-percentage">
            <span className="percentage-number">{loadingProgress}</span>
            <span className="percentage-symbol">%</span>
          </div>
          <div className="loader-bar">
            <div
              className="loader-bar-fill"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <p className="loader-subtitle">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <ScrollProgress />
      {/* <BlobBackground /> */}
      {/* <Particles /> */}
      <QABackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Farel Baihaky. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
