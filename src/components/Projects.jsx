import { useState } from 'react'
import './Projects.css'

const Projects = () => {
    const [activeModal, setActiveModal] = useState(null)

    const projects = [
        {
            id: 'cypress',
            title: 'SauceDemo - Cypress E2E',
            category: 'E2E Automation',
            icon: '🎯',
            accentColor: 'purple',
            description: 'Comprehensive E2E test automation framework for SauceDemo built with Cypress, featuring security testing and full CI/CD integration.',
            longDescription: 'Professional QA Automation Portfolio project featuring a comprehensive end-to-end test automation framework. The project covers authentication, cart operations, checkout flows, product management, and session handling — with both positive and negative test scenarios including security testing for SQL injection and XSS prevention.',
            technologies: ['Cypress 15.x', 'JavaScript (ES6+)', 'Page Object Model', 'Mochawesome', 'GitHub Actions', 'JSON Fixtures'],
            highlights: [
                'Page Object Model (POM) architecture for maintainable and scalable tests',
                'Data-driven testing with JSON fixtures for flexible test data',
                'Security testing — SQL Injection, XSS prevention, input sanitization',
                'CI/CD pipeline with GitHub Actions for automated testing',
                'Mochawesome HTML reports with screenshots & video recording',
                '100% test coverage across all features (45+ test cases)',
                'Feature-based organization: tests grouped by feature → positive/negative'
            ],
            stats: [
                { label: 'Test Cases', value: '45+' },
                { label: 'Features', value: '5' },
                { label: 'Coverage', value: '100%' },
                { label: 'Security Tests', value: '13' },
            ],
            features: [
                { name: 'Authentication', tests: 14, icon: '🔐' },
                { name: 'Cart Operations', tests: 8, icon: '🛒' },
                { name: 'Checkout Flow', tests: 12, icon: '💳' },
                { name: 'Product Mgmt', tests: 9, icon: '📦' },
                { name: 'Session Mgmt', tests: 2, icon: '🔄' }
            ],
            links: {
                github: 'https://github.com/farelbaihaky/saucedemo-cypress-automation',
                testScenario: 'https://docs.google.com/spreadsheets/d/1AmpjQS1Zhg_JuTwZyGxZ4D0j2qrGz3QCt6iCumC8Lz4/edit?usp=sharing'
            },
            structure: `saucedemo-cypress-automation/
├── .github/workflows/       # CI/CD pipeline
├── cypress/
│   ├── e2e/                 # Test specs by feature
│   │   ├── auth/            # Login & Logout tests
│   │   ├── cart/            # Cart operations
│   │   ├── checkout/        # Checkout flow
│   │   ├── products/        # Product management
│   │   └── session/         # Session handling
│   ├── fixtures/            # Test data (JSON)
│   ├── pages/               # Page Object Model
│   └── support/             # Custom commands
├── docs/                    # Manual test cases
└── cypress.config.js`
        },
        {
            id: 'playwright',
            title: 'SauceDemo - Playwright E2E',
            category: 'E2E Automation',
            icon: '🎭',
            accentColor: 'green',
            description: 'End-to-end test automation for SauceDemo using Playwright with multi-browser support, parallel execution, and Allure reporting.',
            longDescription: 'A modern QA Automation project built with Playwright, covering the full SauceDemo application with cross-browser testing capability. The project implements the Page Object Model and supports parallel test execution across Chromium, Firefox, and WebKit.',
            technologies: ['Playwright', 'JavaScript (ES6+)', 'Page Object Model', 'Allure Report', 'GitHub Actions', 'JSON Fixtures'],
            highlights: [
                'Cross-browser testing — Chromium, Firefox, and WebKit',
                'Parallel test execution for faster feedback loops',
                'Page Object Model (POM) for scalable and maintainable code',
                'Allure reports with rich screenshots and trace logs',
                'CI/CD integration with GitHub Actions',
                'Data-driven testing with JSON fixture files',
                'Positive and negative scenario coverage across all key features'
            ],
            stats: [
                { label: 'Test Cases', value: '40+' },
                { label: 'Browsers', value: '3' },
                { label: 'Coverage', value: '100%' },
                { label: 'Negative Tests', value: '20+' },
            ],
            features: [
                { name: 'Authentication', tests: 12, icon: '🔐' },
                { name: 'Cart Operations', tests: 8, icon: '🛒' },
                { name: 'Checkout Flow', tests: 10, icon: '💳' },
                { name: 'Product Mgmt', tests: 8, icon: '📦' },
                { name: 'Session Mgmt', tests: 2, icon: '🔄' }
            ],
            links: {
                github: 'https://github.com/farelbaihaky/saucedemo-playwright-automation',
                testScenario: null
            },
            structure: `saucedemo-playwright-automation/
├── .github/workflows/       # CI/CD pipeline
├── tests/
│   ├── auth/                # Login & Logout tests
│   ├── cart/                # Cart operations
│   ├── checkout/            # Checkout flow
│   ├── products/            # Product management
│   └── session/             # Session handling
├── pages/                   # Page Object Model
├── fixtures/                # Test data (JSON)
├── playwright.config.js
└── allure-results/          # Test reports`
        }
    ]

    const openModal = (id) => setActiveModal(id)
    const closeModal = () => setActiveModal(null)
    const activeProject = projects.find(p => p.id === activeModal)

    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <h2 className="section-title">Projects</h2>

                {/* Project Cards */}
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-card project-card--${project.accentColor}`}
                        >
                            {/* Top accent bar */}
                            <div className={`project-card__bar project-card__bar--${project.accentColor}`} />

                            {/* Header */}
                            <div className="project-card__header">
                                <div className="project-card__title-row">
                                    <span className="project-card__icon">{project.icon}</span>
                                    <div>
                                        <h3>{project.title}</h3>
                                        <span className="project-card__category">{project.category}</span>
                                    </div>
                                </div>
                                <p className="project-card__desc">{project.description}</p>
                            </div>

                            {/* Top 3 tech tags only */}
                            <div className="project-card__tech">
                                {project.technologies.slice(0, 3).map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                                {project.technologies.length > 3 && (
                                    <span className="tech-tag tech-tag--more">+{project.technologies.length - 3}</span>
                                )}
                            </div>

                            {/* Footer actions */}
                            <div className="project-card__footer">
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="fp-link-btn fp-link-github"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                                <button
                                    className="fp-details-btn fp-details-btn--primary"
                                    onClick={() => openModal(project.id)}
                                >
                                    Details
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {activeModal && activeProject && (
                <div className="project-modal" onClick={closeModal}>
                    <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="modal-header">
                            <div className="modal-icon">{activeProject.icon}</div>
                            <div>
                                <h3>{activeProject.title}</h3>
                                <span className="badge">{activeProject.category}</span>
                            </div>
                        </div>

                        <p className="modal-description">{activeProject.longDescription}</p>

                        <div className="modal-section">
                            <h4>Key Highlights</h4>
                            <ul className="highlights-list">
                                {activeProject.highlights.map((highlight, i) => (
                                    <li key={i}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-section">
                            <h4>Test Coverage Breakdown</h4>
                            <div className="modal-coverage-grid">
                                {activeProject.features.map((feature, i) => (
                                    <div key={i} className="modal-coverage-item">
                                        <span className="modal-coverage-icon">{feature.icon}</span>
                                        <span className="modal-coverage-name">{feature.name}</span>
                                        <span className="modal-coverage-tests">{feature.tests} tests</span>
                                        <span className="modal-coverage-pct">100%</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="modal-section">
                            <h4>Technologies Used</h4>
                            <div className="modal-tech">
                                {activeProject.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-section">
                            <h4>Project Structure</h4>
                            <div className="modal-structure">
                                <pre>{activeProject.structure}</pre>
                            </div>
                        </div>

                        <div className="modal-links">
                            <a
                                href={activeProject.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link-btn modal-link-github"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                View Repository
                            </a>
                            {activeProject.links.testScenario && (
                                <a
                                    href={activeProject.links.testScenario}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="modal-link-btn modal-link-sheets"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                    </svg>
                                    Test Scenarios
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects
