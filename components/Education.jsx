import Reveal from "./Reveal"

export default function Education() {
	return (
		<section id="education" className="py-28 px-6 md:px-12">
			<div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-12">
				04 / Education & Certifications
				<div className="flex-1 h-px bg-border"></div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div>
					<div className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-accent mb-6 flex items-center gap-4">
						Education <div className="flex-1 h-px bg-border"></div>
					</div>
					<Reveal>
						<div>
							<h3 className="font-syne text-[1.1rem] font-bold tracking-[-0.02em] mb-1.5">
								Hooghly Engineering & Technology College
							</h3>
							<p className="text-mid text-[0.88rem] font-light">
								B.Tech in Computer Science & Engineering
								<br />
								2018 – 2022 · Kolkata, India
							</p>
							<span className="inline-block mt-3 bg-accent-dim text-accent text-[0.8rem] font-semibold py-1 px-3 rounded-full border border-accent/20">
								CGPA: 9.31
							</span>
						</div>
					</Reveal>
				</div>

				<div>
					<div className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-accent mb-6 flex items-center gap-4">
						Certifications <div className="flex-1 h-px bg-border"></div>
					</div>
					<div className="flex flex-col gap-4">
						<Reveal>
							<div className="p-5 bg-surface border border-border rounded-xl transition-colors hover:border-accent/20 hover-trigger">
								<h4 className="font-syne text-[0.9rem] font-bold mb-1">
									IBM Full-Stack JavaScript Developer
								</h4>
								<p className="text-muted text-[0.8rem] font-light">
									IBM · Coursera — October 2024
									<br />
									React, Docker, NoSQL, CI/CD pipelines
								</p>
							</div>
						</Reveal>
						<Reveal delay={0.1}>
							<div className="p-5 bg-surface border border-border rounded-xl transition-colors hover:border-accent/20 hover-trigger">
								<h4 className="font-syne text-[0.9rem] font-bold mb-1">
									Certificate Program in JavaScript Full Stack (MERN)
								</h4>
								<p className="text-muted text-[0.8rem] font-light">
									StackRoute — February 2023
									<br />
									React, Node.js, Express, MongoDB
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	)
}
