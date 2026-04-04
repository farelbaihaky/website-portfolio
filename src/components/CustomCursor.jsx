import { useEffect, useRef } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const prevPos = useRef({ x: -1, y: -1 })
    const currentAngle = useRef(0)
    const targetAngle = useRef(0)
    const rafRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        if (!cursor) return

        // Smooth angle interpolation loop
        const lerp = (a, b, t) => {
            // Shortest path rotation
            let diff = ((b - a + 540) % 360) - 180
            return a + diff * t
        }

        const animate = () => {
            currentAngle.current = lerp(currentAngle.current, targetAngle.current, 0.12)
            cursor.style.transform = `translate(-50%, -50%) rotate(${currentAngle.current}deg)`
            rafRef.current = requestAnimationFrame(animate)
        }
        rafRef.current = requestAnimationFrame(animate)

        const onMouseMove = (e) => {
            // Move cursor to mouse position
            cursor.style.left = `${e.clientX}px`
            cursor.style.top = `${e.clientY}px`

            // Calculate movement angle only if mouse moved enough
            const dx = e.clientX - prevPos.current.x
            const dy = e.clientY - prevPos.current.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance > 2 && prevPos.current.x !== -1) {
                // atan2 returns angle from x-axis; -90 to align tip with movement direction
                const angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90
                targetAngle.current = angle
            }

            prevPos.current = { x: e.clientX, y: e.clientY }
        }

        const onMouseDown = () => cursor.classList.add('cursor--clicking')
        const onMouseUp = () => cursor.classList.remove('cursor--clicking')
        const onMouseEnterLink = () => cursor.classList.add('cursor--hover')
        const onMouseLeaveLink = () => cursor.classList.remove('cursor--hover')

        // Add hover effect on interactive elements
        const addLinkListeners = () => {
            document.querySelectorAll('a, button, [role="button"]').forEach(el => {
                el.addEventListener('mouseenter', onMouseEnterLink)
                el.addEventListener('mouseleave', onMouseLeaveLink)
            })
        }
        addLinkListeners()

        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mousedown', onMouseDown)
        window.addEventListener('mouseup', onMouseUp)

        return () => {
            cancelAnimationFrame(rafRef.current)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mousedown', onMouseDown)
            window.removeEventListener('mouseup', onMouseUp)
            document.querySelectorAll('a, button, [role="button"]').forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnterLink)
                el.removeEventListener('mouseleave', onMouseLeaveLink)
            })
        }
    }, [])

    return (
        <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
            <svg
                width="26"
                height="32"
                viewBox="0 0 26 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13 29 L24.5 5 Q13 11.5 1.5 5 Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    )
}

export default CustomCursor
