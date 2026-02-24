import './About.css'

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label badge">About Me</span>
                    <h2>Dedicated to Software Quality</h2>
                    <p>Turning bugs into features and chaos into quality</p>
                </div>

                <div className="about-content">
                    <div className="about-image">
                        <div className="image-wrapper glass-card">
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="profile-image"
                            />
                            <div className="image-decoration decoration-1"></div>
                            <div className="image-decoration decoration-2"></div>
                        </div>
                    </div>

                    <div className="about-text">
                        <p className="about-intro">
                            <strong className="gradient-text">Quality is not an act, it's a habit.</strong>
                            Dedicated to delivering bug-free user experiences, I specialize in transforming 
                            complex manual test scenarios into robust Cypress automation scripts, ensuring stability and speed in every release.
                        </p>

                        <p>
                            I am detail-oriented, organized, and adaptive with strong analytical skills to identify and
                            resolve issues effectively. Currently working as Quality Assurance at PT Global Loyalty Indonesia,
                            I specialize in both manual and automation testing using tools like Cypress, and API testing
                            with Postman. I'm eager to contribute to delivering high-quality and reliable software products.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item glass-card">
                                <div className="highlight-icon">🎯</div>
                                <h4>Detail-Oriented</h4>
                                <p>Meticulous attention to every aspect of software functionality</p>
                            </div>

                            <div className="highlight-item glass-card">
                                <div className="highlight-icon">🚀</div>
                                <h4>Fast Learner</h4>
                                <p>Quick to adapt to new technologies and testing methodologies</p>
                            </div>

                            <div className="highlight-item glass-card">
                                <div className="highlight-icon">🤝</div>
                                <h4>Team Player</h4>
                                <p>Excellent collaboration with developers and stakeholders</p>
                            </div>
                        </div>

                        <div className="about-philosophy glass-card">
                            <div className="philosophy-icon">💡</div>
                            <div className="philosophy-content">
                                <h4>Testing Philosophy</h4>
                                <p>
                                    "I approach testing with an out-of-the-box mindset. Every test case is an opportunity
                                    to ensure user satisfaction and product reliability. My goal is to persistently tackle
                                    challenges and consistently deliver software that meets the highest quality standards."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
