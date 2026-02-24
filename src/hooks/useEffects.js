import { useEffect } from 'react'

// Scroll Reveal Hook
export const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed')
                }
            })
        }, observerOptions)

        // Observe all elements with scroll-reveal class
        const elements = document.querySelectorAll('.scroll-reveal')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])
}

// Magnetic Button Effect Hook
export const useMagneticButton = (ref, strength = 0.3) => {
    useEffect(() => {
        const button = ref.current
        if (!button) return

        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            button.style.transform = `translate(${x * strength}px, ${y * strength}px)`
        }

        const handleMouseLeave = () => {
            button.style.transform = 'translate(0, 0)'
        }

        button.addEventListener('mousemove', handleMouseMove)
        button.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            button.removeEventListener('mousemove', handleMouseMove)
            button.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [ref, strength])
}

// 3D Tilt Effect Hook
export const useTiltEffect = (ref, maxTilt = 10) => {
    useEffect(() => {
        const element = ref.current
        if (!element) return

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = ((y - centerY) / centerY) * -maxTilt
            const rotateY = ((x - centerX) / centerX) * maxTilt

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        }

        const handleMouseLeave = () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        }

        element.addEventListener('mousemove', handleMouseMove)
        element.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            element.removeEventListener('mousemove', handleMouseMove)
            element.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [ref, maxTilt])
}
