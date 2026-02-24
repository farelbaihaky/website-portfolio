import { useEffect, useRef } from 'react'
import './QABackground.css'

const QABackground = () => {
    return (
        <div className="qa-background">
            <div className="qa-grid"></div>

            {/* QA Element: Code Brackets (Source Code) */}
            <div className="qa-symbol symbol-code">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M16 18L22 12L16 6" />
                    <path d="M8 6L2 12L8 18" />
                </svg>
            </div>

            {/* QA Element: Check Circle (Verification) */}
            <div className="qa-symbol symbol-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12L11 14L15 10" />
                </svg>
            </div>

            {/* QA Element: Search/Bug Hunt (Discovery) */}
            <div className="qa-symbol symbol-search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21L16.65 16.65" />
                    <path d="M11 8V14" strokeDasharray="2 2" />
                    <path d="M8 11H14" strokeDasharray="2 2" />
                </svg>
            </div>

            {/* QA Element: Automation/Lightning (Performance) */}
            <div className="qa-symbol symbol-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                </svg>
            </div>

            {/* QA Element: Shield (Security) */}
            <div className="qa-symbol symbol-security">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            </div>

            {/* Decorative Lines */}
            <div className="qa-line line-1"></div>
            <div className="qa-line line-2"></div>
            <div className="qa-line line-3"></div>
        </div>
    )
}

export default QABackground
