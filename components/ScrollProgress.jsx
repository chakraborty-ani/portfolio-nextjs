"use client"
import { motion, useScroll } from "framer-motion"

// A thin wayfinding strip, not a decorative effect — kept separate from the
// rest of the motion budget on purpose.
export default function ScrollProgress() {
	const { scrollYProgress } = useScroll()

	return (
		<motion.div
			className="fixed top-0 left-0 right-0 h-0.5 bg-accent origin-left z-200 pointer-events-none"
			style={{ scaleX: scrollYProgress }}
		/>
	)
}
