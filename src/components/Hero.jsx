import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    const phrases = [
        'Quality Assurance Engineer',
        'Automation Testing Specialist'
    ]

    useEffect(() => {
        let timer
        const handleType = () => {
            const i = loopNum % phrases.length
            const fullText = phrases[i]

            if (!isDeleting && text === fullText) {
                timer = setTimeout(() => setIsDeleting(true), 2000)
                return () => clearTimeout(timer)
            }

            if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                timer = setTimeout(handleType, 500)
                return () => clearTimeout(timer)
            }

            setText(current =>
                isDeleting
                    ? fullText.substring(0, current.length - 1)
                    : fullText.substring(0, current.length + 1)
            )

            const speed = isDeleting ? 50 : 100
            timer = setTimeout(handleType, speed)
        }

        timer = setTimeout(handleType, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum])


    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="hero section">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge fade-in-up">
                        <span className="badge">
                            <span className="status-dot"></span>
                            Available for Opportunities
                        </span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Farel Baihaky</span>
                    </h1>

                    <div className="hero-subtitle">
                        <span className="typing-text">{text}</span>
                        <span className="cursor">|</span>
                    </div>

                    <p className="hero-description">
                        Fresh graduate from Telkom University with a strong passion for software quality.
                        Experienced in manual testing, automation Cypress, API testing, and documentation.
                        Detail-oriented and eager to deliver high-quality, reliable software products.
                    </p>

                    <div className="hero-buttons">
                        <button onClick={scrollToContact} className="btn btn-primary">
                            <span>Get In Touch</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number gradient-text">1+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text">3.75</div>
                            <div className="stat-label">GPA (Cumlaude)</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number gradient-text">30+</div>
                            <div className="stat-label">Projects Done</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="floating-card card-1 glass-card">
                        <div className="card-icon">✓</div>
                        <div className="card-text">Test Passed</div>
                    </div>
                    <div className="floating-card card-2 glass-card">
                        <div className="card-icon">⚡</div>
                        <div className="card-text">Fast Testing</div>
                    </div>
                    <div className="floating-card card-3 glass-card">
                        <div className="card-icon">🎯</div>
                        <div className="card-text">100% Coverage</div>
                    </div>
                    <div className="hero-circle circle-1"></div>
                    <div className="hero-circle circle-2"></div>
                    <div className="hero-circle circle-3"></div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll Down</p>
            </div>
        </section>
    )
}

export default Hero
