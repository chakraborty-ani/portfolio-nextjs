"use client"
import { useState, useEffect } from "react"

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-100 px-6 py-5 md:px-12 md:py-6 flex items-center justify-between border-b transition-all duration-300 ${
				scrolled ? "border-border bg-bg/90 backdrop-blur-md" : "border-transparent bg-transparent"
			}`}
		>
			<a
				href="#"
				className="font-syne font-extrabold text-lg tracking-[-0.02em] text-white hover-trigger"
			>
				AC<span className="text-accent">.</span>
			</a>
			<ul className="hidden md:flex gap-10 list-none">
				{["About", "Experience", "Projects", "Contact"].map(item => (
					<li key={item}>
						<a
							href={`#${item.toLowerCase()}`}
							className="text-muted text-[0.85rem] font-medium tracking-wide uppercase transition-colors hover:text-accent hover-trigger"
						>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
