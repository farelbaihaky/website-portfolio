import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                </div>

                <ul className="navbar-menu">
                    {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(item => (
                        <li key={item}>
                            <button
                                onClick={() => scrollToSection(item)}
                                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        </li>
                    ))}
                </ul>

                <a
    href="https://farelbaihaky.vercel.app/cv.pdf"
    className="btn btn-primary navbar-cta"
    onClick={(e) => {
        e.preventDefault(); // Mencegah pindah halaman langsung
        const cvUrl = 'https://farelbaihaky.vercel.app/cv.pdf';

        // --- 1. PROSES DOWNLOAD FILE ---
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'CV_Farel_Baihaky.pdf'; // Nama file hasil download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // --- 2. TAMPILKAN CV (DI TAB YANG SAMA) ---
        // Kita beri jeda 1 detik (1000ms) agar download sempat mulai
        // sebelum halaman browser berubah menjadi PDF reader.
        setTimeout(() => {
            window.location.href = cvUrl;
        }, 1000);
    }}
>
     View Full Resume
</a>
            </div>
        </nav>
    )
}

export default Navbar
