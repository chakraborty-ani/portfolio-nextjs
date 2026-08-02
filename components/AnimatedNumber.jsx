"use client"
import { useEffect, useRef, useState } from "react"
import { useInView, animate } from "framer-motion"

// Counts up any digit groups found in `value` (e.g. "3+", "17 / 13", "210k",
// "~30") while leaving surrounding text untouched. Runs once, on scroll-in.
export default function AnimatedNumber({ value, duration = 1.2 }) {
	const ref = useRef(null)
	const inView = useInView(ref, { once: true, margin: "-10%" })

	const parts = value.split(/(\d+)/)
	const numberIndexes = parts.reduce(
		(acc, part, i) => (/^\d+$/.test(part) ? [...acc, i] : acc),
		[]
	)

	const [current, setCurrent] = useState(() =>
		parts.map((p, i) => (numberIndexes.includes(i) ? "0" : p))
	)

	useEffect(() => {
		if (!inView) return

		if (numberIndexes.length === 0) {
			setCurrent(parts)
			return
		}

		const controls = numberIndexes.map(i => {
			const target = parseInt(parts[i], 10)
			return animate(0, target, {
				duration,
				ease: "easeOut",
				onUpdate: latest => {
					setCurrent(prev => {
						const next = [...prev]
						next[i] = String(Math.round(latest))
						return next
					})
				},
			})
		})

		return () => controls.forEach(c => c.stop())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView])

	return <span ref={ref}>{current.join("")}</span>
}
