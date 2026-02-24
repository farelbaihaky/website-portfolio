import './Contact.css'

const Contact = () => {
    const contactMethods = [
        {
            icon: '📧',
            title: 'Email',
            value: 'farelbaihaky@gmail.com',
            link: 'mailto:farelbaihaky@gmail.com',
            color: 'blue'
        },
        {
            icon: '💼',
            title: 'LinkedIn',
            value: 'linkedin.com/in/farelbaihaky',
            link: 'https://linkedin.com/in/farelbaihaky',
            color: 'purple'
        },
        {
            icon: '🐙',
            title: 'GitHub',
            value: 'github.com/farelbaihaky',
            link: 'https://github.com/farelbaihaky',
            color: 'pink'
        }
    ]

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label badge">Get In Touch</span>
                    <h2>Let's Work Together</h2>
                    <p>Have a project or opportunity? I'd love to hear from you!</p>
                </div>

                <div className="contact-content contact-content-centered">
                    <div className="contact-info">
                        <div className="info-card glass-card">
                            <h3>
                                <span className="gradient-text">Ready to Ensure Quality?</span>
                            </h3>
                            <p>
                                I'm always interested in new opportunities and collaborations.
                                Whether you need a dedicated QA engineer or want to discuss testing
                                strategies, feel free to reach out!
                            </p>
                        </div>

                        <div className="contact-methods">
                            {contactMethods.map((method, index) => (
                                <a
                                    key={index}
                                    href={method.link}
                                    className={`contact-method glass-card method-${method.color}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="method-icon">{method.icon}</div>
                                    <div className="method-details">
                                        <h4>{method.title}</h4>
                                        <p>{method.value}</p>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
