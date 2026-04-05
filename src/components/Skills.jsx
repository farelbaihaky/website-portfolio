import './Skills.css'

const SI = 'https://cdn.simpleicons.org'

const Skills = () => {
    const techStack = [
        // Testing & QA
        { name: 'Cypress', category: 'automation', icon: `${SI}/cypress/69D3A7` },
        { name: 'Playwright', category: 'automation', icon: '🎭' },
        { name: 'Postman', category: 'api', icon: `${SI}/postman/FF6C37` },
        { name: 'Apache JMeter', category: 'performance', icon: `${SI}/apachejmeter/D22128` },
        { name: 'Selenium', category: 'automation', icon: `${SI}/selenium/43B02A` },
        // Tools
        { name: 'JIRA', category: 'tools', icon: `${SI}/jira/0052CC` },
        { name: 'DBeaver', category: 'tools', icon: `${SI}/dbeaver/5B88B5` },
        { name: 'Git', category: 'tools', icon: `${SI}/git/F05032` },
        { name: 'GitHub', category: 'tools', icon: `${SI}/github/ffffff` },
        { name: 'VS Code', category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Figma', category: 'tools', icon: `${SI}/figma/F24E1E` },
        { name: 'Visual Paradigm', category: 'tools', icon: null },
        // Programming
        { name: 'JavaScript', category: 'lang', icon: `${SI}/javascript/F7DF1E` },
        { name: 'Python', category: 'lang', icon: `${SI}/python/3776AB` },
        { name: 'Java', category: 'lang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'PHP', category: 'lang', icon: `${SI}/php/777BB4` },
        { name: 'HTML/CSS', category: 'lang', icon: `${SI}/html5/E34F26` },
        // Database
        { name: 'MySQL', category: 'db', icon: `${SI}/mysql/4479A1` },
        { name: 'PostgreSQL', category: 'db', icon: `${SI}/postgresql/4169E1` },
        { name: 'Google Sheets', category: 'db', icon: `${SI}/googlesheets/34A853` },
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
                <h2 className="section-title">Skills</h2>

                <div className="tech-grid">
                    {techStack.map((tech, i) => (
                        <div key={i} className={`tech-badge tech-${tech.category}`}>
                            {tech.icon && typeof tech.icon === 'string' && tech.icon.startsWith('http') ? (
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="tech-icon"
                                    width="16"
                                    height="16"
                                />
                            ) : tech.icon ? (
                                <span className="tech-icon-emoji">{tech.icon}</span>
                            ) : (
                                <span className="tech-icon-fallback">◆</span>
                            )}
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
