import './Hero.css'

const Hero = () => {
    return (
        <section id="home" className="hero">

            {/* Dotted background with large initials */}
            <div className="hero-initials-bg">
                <span className="hero-initials">FB</span>
            </div>

            {/* Profile block */}
            <div className="hero-profile-card">
                <div className="hero-avatar-wrap">
                    <img src="/profile.jpg" alt="Farel Baihaky" className="hero-avatar" />
                    <span className="hero-avatar-badge" title="Available for Opportunities" />
                </div>
                <div className="hero-identity">
                    <h1 className="hero-name">Farel Baihaky</h1>
                    <p className="hero-role">IT Quality Assurance Engineer</p>
                </div>
            </div>

            {/* Info Table */}
            <div className="hero-info-table">
                <div className="info-row">
                    <div className="info-cell">
                        <span className="info-label">Role</span>
                        <span className="info-value">QA Engineer</span>
                    </div>
                   
                    <div className="info-cell">
                        <span className="info-label">Status</span>
                        <span className="info-value info-available">Available for Opportunities</span>
                    </div>
                </div>
                <div className="info-row">
                    <div className="info-cell">
                        <span className="info-label">Email</span>
                        <a
                            href="mailto:farelbaihaky@gmail.com"
                            className="info-value info-link"
                        >
                            farelbaihaky@gmail.com
                        </a>
                    </div>
                    <div className="info-cell">
                        <span className="info-label">LinkedIn</span>
                        <a
                            href="https://linkedin.com/in/farelbaihaky"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-value info-link"
                        >
                            /farelbaihaky ↗
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats bar */}
            <div className="hero-stats-bar">
                <div className="stat-item">
                    <span className="stat-number">1+</span>
                    <span className="stat-label">Years Exp</span>
                </div>
                <div className="stat-sep" />
                <div className="stat-item">
                    <span className="stat-number">370+</span>
                    <span className="stat-label">Bugs Found</span>
                </div>
                <div className="stat-sep" />
                <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Projects</span>
                </div>
                <div className="stat-sep" />
                <div className="stat-item">
                    <span className="stat-number">3.75</span>
                    <span className="stat-label">GPA Cumlaude</span>
                </div>
            </div>

        </section>
    )
}

export default Hero
