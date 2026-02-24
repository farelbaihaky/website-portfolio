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
                'Test Automation',
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
                'SQL',
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
        { name: 'BNSP System Analyst', icon: '🏆' },
        { name: 'User Interface Design (Myskill)', icon: '🎨' },
        { name: 'IEEE ICOICT 2025 Author', icon: '📝' },
        { name: 'GPA 3.75 Cumlaude - Telkom University', icon: '🎓' }
    ]

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label badge">Skills & Expertise</span>
                    <h2>Technical Proficiency</h2>
                    <p>My technical skills and competencies</p>
                </div>

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
                </div>
            </div>
        </section>
    )
}

export default Skills
