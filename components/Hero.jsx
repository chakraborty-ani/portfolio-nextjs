"use client"
import { motion } from "framer-motion"
import Reveal from "./Reveal"
import Magnetic from "./Magnetic"

const nameContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
}
const nameWord = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function Hero() {
	return (
		<section
			className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 overflow-hidden"
			id="hero"
		>
			{/* Background Text */}
			<div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-syne font-extrabold text-[clamp(120px,18vw,260px)] text-transparent tracking-tighter select-none pointer-events-none w-full text-center"
				style={{ WebkitTextStroke: "1px rgba(255,255,255,0.04)" }}
			>
				FRONTEND
			</div>

			<Reveal delay={0}>
				<div className="inline-flex items-center gap-2 bg-accent-dim border border-accent/20 text-accent text-xs font-medium tracking-widest uppercase py-1.5 px-3.5 rounded-full mb-8 w-fit">
					<span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
					Open to opportunities
				</div>
			</Reveal>

			<motion.h1
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-10%" }}
				variants={nameContainer}
				className="font-syne font-extrabold text-[8.5vw] sm:text-[42px] md:text-[clamp(52px,8vw,110px)] leading-[0.92] tracking-[-0.04em]"
			>
				<motion.span variants={nameWord} className="block">
					Aniket
				</motion.span>
				<motion.span variants={nameWord} className="block text-accent">
					Chakraborty
				</motion.span>
			</motion.h1>

			<Reveal delay={0.2}>
				<div className="flex flex-col md:flex-row md:items-end justify-between mt-12 gap-8 md:gap-0">
					<p className="max-w-105 text-mid text-base leading-relaxed font-light">
						Frontend Engineer with 3+ years building scalable web and mobile products with Next.js,
						TypeScript, and React Native. Based in Kolkata.
					</p>
					<div className="flex gap-4 items-center">
						<Magnetic>
							<a
								href="mailto:anichakraborty20800@gmail.com"
								className="bg-accent text-bg py-3 px-8 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,245,90,0.3)] hover-trigger"
							>
								Get in touch
							</a>
						</Magnetic>
						<a
							href="#projects"
							className="text-mid text-sm inline-flex items-center gap-1.5 transition-colors hover:text-white hover-trigger"
						>
							View work ↓
						</a>
					</div>
				</div>
			</Reveal>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
				<span className="text-[0.65rem] tracking-[0.15em] uppercase text-muted">Scroll</span>
				<div className="w-px h-15 bg-linear-to-b from-muted to-transparent origin-top animate-[scrollDrop_1.5s_infinite]"></div>
			</div>
		</section>
	)
}
