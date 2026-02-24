import './Experience.css'

const Experience = () => {
    const experiences = [
        {
            title: 'IT Quality Assurance',
            company: 'PT Global Loyalty Indonesia (Alfagift)',
            period: 'October 2025 - Present',
            location: 'Onsite, Indonesia',
            type: 'Internship',
            description: 'Responsible for ensuring software quality through comprehensive manual and automation testing',
            responsibilities: [
                'Perform functional testing on web and mobile applications',
                'Develop and maintain automation test scripts using Cypress',
                'Conduct API testing using Postman and validate data integrity',
                'Execute regression and User Acceptance Testing (UAT)',
                'Create and maintain comprehensive QA documentation',
                'Collaborate with development team to identify and resolve issues'
            ],
            technologies: ['Cypress', 'Postman', 'JIRA', 'MySQL', 'DBeaver']
        },
        {
            title: 'Software Quality Assurance',
            company: 'PT Sumber Trijaya Lestari (Aksesmu)',
            period: 'August 2024 - December 2024',
            location: 'Onsite, Indonesia',
            type: 'Internship',
            description: 'Conducted comprehensive testing for web and mobile applications with focus on functionality and reliability',
            responsibilities: [
                'Conducted testing using Apache JMeter for performance analysis',
                'Performed data validation testing on MySQL databases using DBeaver',
                'Executed functional API testing utilizing Postman',
                'Performed functional testing on Website and Android mobile applications',
                'Executed web application testing to ensure feature reliability',
                'Conducted User Acceptance Testing (UAT) with stakeholders'
            ],
            technologies: ['Apache JMeter', 'Postman', 'MySQL', 'DBeaver', 'JIRA']
        },
        {
            title: 'Data Entry Specialist',
            company: 'Telkom Indonesia',
            period: 'June 2024 - August 2024',
            location: 'Onsite, Indonesia',
            type: 'Internship',
            description: 'Managed data entry and validation for large-scale database systems',
            responsibilities: [
                'Entered and updated large volumes of data accurately into databases',
                'Utilized tools such as Microsoft Excel, Google Sheets for data management',
                'Verified, validated, and cross-checked data for consistency',
                'Prepared and maintained comprehensive QA documentation'
            ],
            technologies: ['Microsoft Excel', 'Google Sheets', 'Database Management']
        },
        {
            title: 'Analysis and Design Practicum Assistant',
            company: 'Telkom University',
            period: 'February 2024 - June 2024',
            location: 'Onsite, Indonesia',
            type: 'Part-time',
            description: 'Guided students in system analysis and design using Visual Paradigm tools',
            responsibilities: [
                'Guided students in learning system analysis and design',
                'Taught Component Deployment, Class, Sequence, Use Case, and Activity Diagrams',
                'Assisted in requirements identification and competency assessments',
                'Conducted practicum sessions and evaluated student work'
            ],
            technologies: ['Visual Paradigm', 'UML', 'System Analysis', 'SDLC']
        },
        {
            title: 'Object Oriented Programming Practicum Assistant',
            company: 'Telkom University',
            period: 'August 2023 - December 2023',
            location: 'Onsite, Indonesia',
            type: 'Part-time',
            description: 'Guided students in understanding fundamental concepts of Object-Oriented Programming in Java',
            responsibilities: [
                'Guided students in understanding fundamental concepts of Object-Oriented Programming (OOP) in Java',
                'Taught abstraction, encapsulation, inheritance, and polymorphism principles',
                'Assisted in lab sessions and explained key OOP concepts',
                'Supported students in solving programming exercises and debugging code'
            ],
            technologies: ['Java', 'Object-Oriented Programming', 'Teaching', 'Lab Sessions']
        }
    ]

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label badge">Career Journey</span>
                    <h2>Professional Experience</h2>
                    <p>My path in quality assurance and software testing</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <div className="exp-header">
                                    <div>
                                        <h3>{exp.title}</h3>
                                        <div className="exp-meta">
                                            <span className="company">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M20 7h-9M14 17H5M19 17h1M10 7H5m14-4v16l-7-3-7 3V3l7 3z" />
                                                </svg>
                                                {exp.company}
                                            </span>
                                            <span className="location">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="exp-badges">
                                        <span className="period badge">{exp.period}</span>
                                        <span className="type badge">{exp.type}</span>
                                    </div>
                                </div>

                                <p className="exp-description">{exp.description}</p>

                                <div className="exp-responsibilities">
                                    <h4>Key Responsibilities:</h4>
                                    <ul>
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M9 11l3 3L22 4" />
                                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
