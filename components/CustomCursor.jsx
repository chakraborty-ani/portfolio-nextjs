"use client"
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
	const [isHovered, setIsHovered] = useState(false)
	const [label, setLabel] = useState("")
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
			const trigger = target.closest(".hover-trigger")
			if (
				target.tagName.toLowerCase() === "a" ||
				target.tagName.toLowerCase() === "button" ||
				trigger // Add this class to skill chips/project cards
			) {
				setIsHovered(true)
				setLabel(trigger?.dataset.cursorText || "")
			} else {
				setIsHovered(false)
				setLabel("")
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
				animate={{ opacity: label ? 0 : 1 }}
				transition={{ duration: 0.15 }}
			/>
			{/* Trailing Ring */}
			<motion.div
				className="fixed top-0 left-0 flex items-center justify-center border border-accent/40 rounded-full pointer-events-none z-9998 overflow-hidden"
				style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
				animate={{
					width: label ? 64 : isHovered ? 48 : 32,
					height: label ? 64 : isHovered ? 48 : 32,
					backgroundColor: label ? "rgba(200,245,90,0.12)" : "rgba(200,245,90,0)",
				}}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
			>
				{label && (
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="text-accent text-[0.65rem] font-semibold tracking-wide uppercase"
					>
						{label}
					</motion.span>
				)}
			</motion.div>
		</>
	)
}
