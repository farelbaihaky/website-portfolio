import './Skills.css'

const Skills = () => {
    const techStack = [
        // Testing & QA
        { name: 'Cypress', category: 'automation', icon: '🌀' },
        { name: 'Playwright', category: 'automation', icon: '🎭' },
        { name: 'Postman', category: 'api', icon: '📮' },
        { name: 'Apache JMeter', category: 'performance', icon: '⚡' },
        { name: 'Selenium', category: 'automation', icon: '🤖' },
        // Tools
        { name: 'JIRA', category: 'tools', icon: '📋' },
        { name: 'DBeaver', category: 'tools', icon: '🗄️' },
        { name: 'Git', category: 'tools', icon: '🌿' },
        { name: 'GitHub', category: 'tools', icon: '🐙' },
        { name: 'VS Code', category: 'tools', icon: '💻' },
        { name: 'Figma', category: 'tools', icon: '🎨' },
        { name: 'Visual Paradigm', category: 'tools', icon: '📐' },
        // Programming
        { name: 'JavaScript', category: 'lang', icon: '🟨' },
        { name: 'Python', category: 'lang', icon: '🐍' },
        { name: 'Java', category: 'lang', icon: '☕' },
        { name: 'PHP', category: 'lang', icon: '🐘' },
        { name: 'HTML/CSS', category: 'lang', icon: '🌐' },
        // Database
        { name: 'MySQL', category: 'db', icon: '🐬' },
        { name: 'PostgreSQL', category: 'db', icon: '🐘' },
        { name: 'Google Sheets', category: 'db', icon: '📊' },
    ]

    const certifications = [
        { icon: '🏆', name: 'Certified System Analyst', issuer: 'BNSP' },
        { icon: '🎨', name: 'User Interface Design', issuer: 'MySkill' },
        { icon: '📝', name: 'IEEE ICOICT 2025 Author', issuer: 'IEEE' },
        { icon: '🎓', name: 'GPA 3.75 Cumlaude', issuer: 'Telkom University' },
    ]

    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <h2 className="section-title">Stack</h2>

                <div className="tech-grid">
                    {techStack.map((tech, i) => (
                        <div key={i} className={`tech-badge tech-${tech.category}`}>
                            <span className="tech-icon">{tech.icon}</span>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>

                <h2 className="section-title" style={{ marginTop: '4rem' }}>Certifications</h2>

                <div className="cert-grid">
                    {certifications.map((cert, i) => (
                        <div key={i} className="cert-card">
                            <span className="cert-card-icon">{cert.icon}</span>
                            <div>
                                <p className="cert-card-name">{cert.name}</p>
                                <p className="cert-card-issuer">{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <a
                    href="https://drive.google.com/drive/folders/1Cq1GcPCVHYyBahks7cLmyocgbE76QDED?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-view-all"
                >
                    View all certificates ↗
                </a>
            </div>
        </section>
    )
}

export default Skills
