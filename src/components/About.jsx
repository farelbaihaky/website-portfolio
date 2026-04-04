import './About.css'

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="section-container">
                <h2 className="section-title">About</h2>

                <div className="about-body">
                    <p>
                        Information Systems Graduate from <strong>Telkom University</strong> (GPA 3.75 — Cumlaude)
                        with hands-on internship experience in Quality Assurance at two companies. Passionate about
                        ensuring software quality through both manual and automated testing approaches.
                    </p>
                    <p>
                        Currently working as <strong>IT Quality Assurance</strong> at PT Global Loyalty Indonesia
                        (Alfagift), where I manage end-to-end QA lifecycle for multiple projects including web
                        applications and WhatsApp Chatbot integrations. I have identified and documented
                        <strong> 370+ bugs</strong> across 6 diverse projects.
                    </p>
                    <p>
                        Experienced in building robust automation suites using <strong>Cypress</strong> and
                        <strong> Playwright</strong>, API testing with Postman, database validation with DBeaver,
                        and performance testing with Apache JMeter. I thrive in collaborative environments
                        and am driven by delivering high-quality, reliable software.
                    </p>
                    <p>
                        I approach testing with an analytical, out-of-the-box mindset — every bug found is
                        one less problem for the end user. My goal is to help teams ship with confidence.
                    </p>

                    <div className="about-highlights">
                        <div className="highlight-tag">🎯 Detail-Oriented</div>
                        <div className="highlight-tag">⚡ Fast Learner</div>
                        <div className="highlight-tag">🤝 Team Player</div>
                        <div className="highlight-tag">🧪 Quality-First Mindset</div>
                        <div className="highlight-tag">📝 Documentation</div>
                        <div className="highlight-tag">🔍 Root Cause Analysis</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
