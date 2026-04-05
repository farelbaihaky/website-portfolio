import { useState } from 'react'
import './Experience.css'
import logoAlfagift from '../assets/logo/Alfagift.png'
import logoAksesmu from '../assets/logo/Aksesmu.png'
import logoTelkomIndonesia from '../assets/logo/Telkom_Indonesia.png'
import logoTelkomUniversity from '../assets/logo/Telkom_University.png'

const Experience = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    const experiences = [
        {
            title: 'IT Quality Assurance',
            company: 'PT Global Loyalty Indonesia (Alfagift)',
            logo: logoAlfagift,
            period: 'Oct 2025 – Present',
            location: 'Onsite, Indonesia',
            type: 'Internship',
            description: 'Responsible for ensuring software quality through comprehensive manual and automation testing',
            responsibilities: [
                'Successfully managed end-to-end QA lifecycle for 6 diverse projects, encompassing web applications and complex WhatsApp Chatbot integrations via backend APIs.',
                'Engineered robust E2E automation suites using Cypress, significantly reducing manual regression testing time and increasing overall deployment confidence.',
                'Identified and systematically documented 370+ bugs across all projects, including a major high-scale system with over 207 identified issues.',
                'Optimized data integrity by performing rigorous data validation on PostgreSQL databases using DBeaver, ensuring zero data discrepancies in production.',
                'Spearheaded User Acceptance Testing (UAT) for all 6 projects, aligning technical deliverables with business requirements.',
            ],
            technologies: ['Cypress', 'PostgreSQL', 'DBeaver', 'Postman', 'Google Sheets']
        },
        {
            title: 'Software Quality Assurance',
            company: 'PT Sumber Trijaya Lestari (Aksesmu)',
            logo: logoAksesmu,
            period: 'Aug 2024 – Dec 2024',
            location: 'Onsite, Indonesia',
            type: 'Internship',
            description: 'Conducted comprehensive testing for web and mobile applications with focus on functionality and reliability',
            responsibilities: [
                'Managed QA for 12 projects, executing manual, functional, and performance testing (Apache JMeter) across Web and Android platforms.',
                'Identified and tracked 100+ bugs using Postman for API testing and DBeaver for MySQL database validation.',
                'Benchmarked 3 mobile devices and authored technical documentation for optimal hardware compatibility.',
                'Executed end-to-end testing including Web/Mobile functional tests and User Acceptance Testing (UAT).',
            ],
            technologies: ['Apache JMeter', 'Postman', 'MySQL', 'DBeaver', 'JIRA']
        },
        {
            title: 'Data Management',
            company: 'Telkom Indonesia',
            logo: logoTelkomIndonesia,
            period: 'Jun 2024 – Aug 2024',
            location: 'Onsite, Indonesia',
            type: 'Internship',
            description: 'Managed data entry and validation for large-scale database systems',
            responsibilities: [
                'Entered and updated large volumes of data accurately into databases.',
                'Utilized Microsoft Excel and Google Sheets for data management and reporting.',
                'Verified, validated, and cross-checked data for consistency across systems.',
            ],
            technologies: ['Microsoft Excel', 'Google Sheets', 'Database Management']
        },
        {
            title: 'Analysis and Design Practicum Assistant',
            company: 'Telkom University',
            logo: logoTelkomUniversity,
            period: 'Feb 2024 – Jun 2024',
            location: 'Onsite, Indonesia',
            type: 'Contract',
            description: 'Guided students in system analysis and design using Visual Paradigm tools',
            responsibilities: [
                'Guided students in learning system analysis and design using UML diagrams.',
                'Taught Component Deployment, Class, Sequence, Use Case, and Activity Diagrams.',
                'Conducted practicum sessions and evaluated student work.',
            ],
            technologies: ['Visual Paradigm', 'UML', 'System Analysis']
        },
        {
            title: 'Object Oriented Programming Practicum Assistant',
            company: 'Telkom University',
            logo: logoTelkomUniversity,
            period: 'Aug 2023 – Dec 2023',
            location: 'Onsite, Indonesia',
            type: 'Contract',
            description: 'Guided students in Object-Oriented Programming fundamentals in Java',
            responsibilities: [
                'Guided students in OOP concepts: abstraction, encapsulation, inheritance, and polymorphism.',
                'Assisted in lab sessions and explained key OOP concepts using Java.',
                'Supported students in solving programming exercises and debugging code.',
            ],
            technologies: ['Java', 'OOP', 'Teaching']
        }
    ]

    return (
        <section id="experience" className="experience-section">
            <div className="section-container">
                <h2 className="section-title">Experience</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => {
                        const isOpen = openIndex === index

                        return (
                            <div key={index} className={`timeline-item ${isOpen ? 'timeline-item--open' : ''}`}>

                                {/* Clickable header — always visible */}
                                <button
                                    className="exp-toggle"
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                >
                                    {/* Large logo on the left */}
                                    {exp.logo && (
                                        <div className="exp-logo-box">
                                            <img
                                                src={exp.logo}
                                                alt={exp.company}
                                                className="exp-logo-img"
                                                onError={(e) => { e.target.parentElement.style.display = 'none' }}
                                            />
                                        </div>
                                    )}

                                    {/* Text info — left side */}
                                    <div className="exp-toggle-left">
                                        <div className="exp-summary">
                                            <span className="exp-title">{exp.title}</span>
                                            <span className="exp-company-name">{exp.company}</span>
                                        </div>
                                    </div>

                                    {/* Period + Type badges — right side */}
                                    <div className="exp-badges">
                                        <span className="period">{exp.period}</span>
                                        <span className="type">{exp.type}</span>
                                    </div>

                                    {/* Chevron */}
                                    <span className="exp-toggle-indicator">
                                        <svg
                                            width="12" height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            className={`exp-chevron ${isOpen ? 'exp-chevron--open' : ''}`}
                                        >
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </span>
                                </button>

                                {/* Collapsible content */}
                                <div className={`exp-content ${isOpen ? 'exp-content--open' : ''}`}>
                                    <div className="exp-content-inner">
                                        <div className="exp-meta-row">
                                            <span className="location">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                {exp.location}
                                            </span>
                                        </div>

                                        <p className="exp-description">{exp.description}</p>

                                        <div className="exp-responsibilities">
                                            <h4>Key Responsibilities</h4>
                                            <ul>
                                                {exp.responsibilities.map((resp, i) => (
                                                    <li key={i}>
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                        {resp}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="exp-tech">
                                            {exp.technologies.map((tech, i) => (
                                                <span key={i} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience
