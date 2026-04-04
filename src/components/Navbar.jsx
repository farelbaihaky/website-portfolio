import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [menuOpen, setMenuOpen] = useState(false)
    const clickLockRef = useRef(false)
    const lockTimerRef = useRef(null)

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (clickLockRef.current) return

            const scrollPos = window.scrollY + 150
            const isAtBottom =
                window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80

            if (isAtBottom) {
                setActiveSection('contact')
                return
            }

            let current = 'home'
            for (const link of navLinks) {
                const el = document.getElementById(link.id)
                if (el && el.offsetTop <= scrollPos) {
                    current = link.id
                }
            }
            setActiveSection(current)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on scroll
    useEffect(() => {
        const handleScroll = () => setMenuOpen(false)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        clickLockRef.current = true
        setActiveSection(id)
        setMenuOpen(false)

        if (lockTimerRef.current) clearTimeout(lockTimerRef.current)
        lockTimerRef.current = setTimeout(() => {
            clickLockRef.current = false
        }, 1000)

        const el = document.getElementById(id)
        if (el) {
            const yOffset = -80
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="navbar navbar--desktop">
                <div className="navbar-pill">
                    <ul className="navbar-menu">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <button
                                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={() => scrollToSection(link.id)}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-resume-btn"
                    >
                        Resume ↗
                    </a>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="navbar navbar--mobile">
                <div className="mobile-navbar-bar">
                    <span className="mobile-navbar-brand">FB</span>
                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
                    <ul className="mobile-nav-list">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <button
                                    className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={() => scrollToSection(link.id)}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-resume-btn"
                    >
                        Resume ↗
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
