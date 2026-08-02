"use client"
import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

// Subtle magnetic pull for primary CTAs only — keep `strength` small so it
// reads as a nudge, not a rubber-band.
export default function Magnetic({ children, strength = 0.25 }) {
	const ref = useRef(null)
	const x = useMotionValue(0)
	const y = useMotionValue(0)
	const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 })
	const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 })

	const handleMouseMove = e => {
		const rect = ref.current.getBoundingClientRect()
		x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
		y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
	}

	const handleMouseLeave = () => {
		x.set(0)
		y.set(0)
	}

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ x: springX, y: springY, display: "inline-block" }}
		>
			{children}
		</motion.div>
	)
}
