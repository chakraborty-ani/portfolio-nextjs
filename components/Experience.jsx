import Reveal from "./Reveal"

export default function Experience() {
	const experiences = [
		{
			date: "Aug 2025 — Present",
			company: "Freeflow Ventures",
			role: "Senior Frontend Developer",
			points: [
				"Serving as Project Owner for assigned initiatives, overseeing delivery and guiding technical decisions.",
				"Leading frontend development with Next.js, ensuring scalability and performance.",
				"Coordinating across teams to align design, development, and deployment efforts.",
			],
		},
		{
			date: "Mar 2023 — Jul 2025",
			company: "Freeflow Ventures",
			role: "Frontend Developer",
			points: [
				"Designed, implemented, and maintained interactive UIs for multiple projects using Next.js.",
				"Integrated RESTful APIs for dynamic and real-time data rendering.",
				"Created reusable UI components that improved load times by ~10%.",
			],
		},
	]

	return (
		<section id="experience" className="py-28 px-6 md:px-12">
			<div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-12">
				02 / Experience
				<div className="flex-1 h-px bg-border"></div>
			</div>

			<div className="flex flex-col">
				{experiences.map((exp, i) => (
					<Reveal key={i} delay={i * 0.1}>
						<div
							className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-12 py-10 hover:bg-surface/30 transition-colors ${
								i !== experiences.length - 1 ? "border-b border-border" : ""
							}`}
						>
							<div className="text-[0.8rem] text-muted tracking-wide pt-1">{exp.date}</div>
							<div>
								<div className="text-[0.75rem] font-medium tracking-widest uppercase text-accent mb-1.5">
									{exp.company}
								</div>
								<div className="font-syne text-[1.3rem] font-bold tracking-[-0.02em] mb-4">
									{exp.role}
								</div>
								<ul className="flex flex-col gap-2.5">
									{exp.points.map((point, j) => (
										<li
											key={j}
											className="text-mid text-[0.9rem] font-light pl-4 relative before:content-['—'] before:absolute before:-left-2 before:text-border"
										>
											{point}
										</li>
									))}
								</ul>
							</div>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	)
}
