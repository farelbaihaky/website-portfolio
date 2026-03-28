import './Skills.css'

const Skills = () => {
    const skillsData = [
        {
            category: 'Testing & QA',
            icon: '🎯',
            color: 'blue',
            skills: [
                'Manual Testing',
                'Functional Testing',
                'API Testing',
                'Regression Testing',
                'User Acceptance Testing',
                'Mobile Testing (Android)',
                'Web Application Testing'
            ]
        },
        {
            category: 'Automation',
            icon: '⚡',
            color: 'green',
            skills: [
                'Cypress',
                'Playwright',
                'CI/CD Integration'
            ]
        },
        {
            category: 'Tools',
            icon: '🛠️',
            color: 'purple',
            skills: [
                'Postman',
                'Apache JMeter',
                'JIRA',
                'DBeaver',
                'Visual Studio Code',
                'Git/GitHub',
                'Figma'
            ]
        },
        {
            category: 'Programming',
            icon: '💻',
            color: 'orange',
            skills: [
                'JavaScript',
                'Python',
                'Java',
                'MySQL',
                'PostgreSQL',
                'PHP',
                'HTML/CSS'
            ]
        },
        {
            category: 'Other Skills',
            icon: '📚',
            color: 'pink',
            skills: [
                'Software Documentation',
                'System Analysis',
                'Visual Paradigm',
                'Business Process Modelling',
                'Technical Writing'
            ]
        }
    ]

    const certifications = [
        { name: 'Certified System Analyst (BNSP)', icon: '🏆' },
        { name: 'User Interface Design (MySkill)', icon: '🎨' },
        { name: 'IEEE ICOICT 2025 Author', icon: '📝' },
        { name: 'GPA 3.75 Cumlaude - Telkom University', icon: '🎓' }
    ]

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label badge">Skills & Expertise</span>
                    <h2>Technical Proficiency</h2>                </div>

                <div className="skills-simple-grid">
                    {skillsData.map((category, idx) => (
                        <div key={idx} className={`skill-box glass-card skill-${category.color}`}>
                            <div className="skill-box-header">
                                <span className="skill-box-icon">{category.icon}</span>
                                <h3>{category.category}</h3>
                            </div>
                            <ul className="skill-box-list">
                                {category.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="certifications-simple glass-card">
                    <h3>
                        <span className="cert-icon-simple">🏅</span>
                        Certifications & Achievements
                    </h3>
                    <div className="cert-list-simple">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="cert-item-simple">
                                <span className="cert-item-icon">{cert.icon}</span>
                                <span className="cert-item-name">{cert.name}</span>
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://drive.google.com/drive/folders/1Cq1GcPCVHYyBahks7cLmyocgbE76QDED?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-view-btn"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                            <polyline points="10 17 15 12 10 7" />
                            <line x1="15" y1="12" x2="3" y2="12" />
                        </svg>
                        View All Certificates
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Skills
