import Reveal from "./Reveal"

export default function Contact() {
	return (
		<section id="contact" className="py-28 px-6 md:px-12">
			<div className="max-w-175 mx-auto text-center">
				<Reveal>
					<div className="flex items-center justify-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-8">
						<div className="w-8 h-px bg-border"></div>
						05 / Contact
						<div className="w-8 h-px bg-border"></div>
					</div>
				</Reveal>

				<Reveal delay={0.1}>
					<h2 className="font-syne text-[clamp(38px,6vw,80px)] font-extrabold tracking-[-0.04em] leading-none mb-6">
						Let&apos;s build something
						<br />
						<span className="text-accent">great together.</span>
					</h2>
				</Reveal>

				<Reveal delay={0.2}>
					<p className="text-mid font-light text-base mb-12">
						Always open to interesting projects and the right opportunities. Feel free to reach
						out.
					</p>
				</Reveal>

				<Reveal delay={0.3}>
					<div className="flex justify-center gap-4 flex-wrap">
						<a
							href="mailto:anichakraborty20800@gmail.com"
							className="inline-flex items-center gap-2 py-3 px-7 bg-accent text-bg border border-accent rounded-full font-semibold text-[0.9rem] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,245,90,0.3)] hover-trigger"
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<rect x="2" y="4" width="20" height="16" rx="2" />
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
							</svg>
							Email me
						</a>
						<a
							href="tel:7685848451"
							className="inline-flex items-center gap-2 py-3 px-7 border border-border text-mid rounded-full font-normal text-[0.9rem] transition-colors hover:border-accent hover:text-accent hover:bg-accent-dim hover-trigger"
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.19 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
							</svg>
							+91 76858 48451
						</a>
						<a
							href="https://www.linkedin.com/in/aniket-chakraborty-07a69615a"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 py-3 px-7 border border-border text-mid rounded-full font-normal text-[0.9rem] transition-colors hover:border-accent hover:text-accent hover:bg-accent-dim hover-trigger"
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
								<rect x="2" y="9" width="4" height="12" />
								<circle cx="4" cy="4" r="2" />
							</svg>
							LinkedIn
						</a>
					</div>
				</Reveal>
			</div>
		</section>
	)
}
