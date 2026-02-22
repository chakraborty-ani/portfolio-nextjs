"use client"
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
	const [isHovered, setIsHovered] = useState(false)
	const cursorX = useMotionValue(-100)
	const cursorY = useMotionValue(-100)

	// Smooth out the ring movement
	const springConfig = { damping: 25, stiffness: 250, mass: 0.5 }
	const cursorXSpring = useSpring(cursorX, springConfig)
	const cursorYSpring = useSpring(cursorY, springConfig)

	useEffect(() => {
		const moveCursor = e => {
			cursorX.set(e.clientX)
			cursorY.set(e.clientY)
		}

		const handleMouseOver = e => {
			const target = e.target
			if (
				target.tagName.toLowerCase() === "a" ||
				target.tagName.toLowerCase() === "button" ||
				target.closest(".hover-trigger") // Add this class to skill chips/project cards
			) {
				setIsHovered(true)
			} else {
				setIsHovered(false)
			}
		}

		window.addEventListener("mousemove", moveCursor)
		window.addEventListener("mouseover", handleMouseOver)
		return () => {
			window.removeEventListener("mousemove", moveCursor)
			window.removeEventListener("mouseover", handleMouseOver)
		}
	}, [cursorX, cursorY])

	return (
		<>
			{/* Small Dot */}
			<motion.div
				className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-9999"
				style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
			/>
			{/* Trailing Ring */}
			<motion.div
				className="fixed top-0 left-0 border border-accent/40 rounded-full pointer-events-none z-9998"
				style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
				animate={{
					width: isHovered ? 48 : 32,
					height: isHovered ? 48 : 32,
				}}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
			/>
		</>
	)
}
