import Reveal from "./Reveal"

export default function Experience() {
	const experiences = [
		{
			date: "Aug 2025 — Present",
			company: "Freeflow Ventures",
			role: "Senior Frontend Engineer",
			points: [
				"Serve as Project Owner across 2 products and 5 codebases, owning frontend scope, estimates, technical direction, and release readiness.",
				"Set architecture at kickoff — component structure, state management, API layering — and deliver as primary contributor on all 5.",
				"Ship web and mobile in parallel, spanning 94 web routes and a 53-screen React Native app.",
				"Integrate 480+ REST endpoints against backend services, standardizing token auth, error normalization, and loading states.",
			],
		},
		{
			date: "Mar 2023 — Jul 2025",
			company: "Freeflow Ventures",
			role: "Frontend Engineer",
			points: [
				"Built and shipped client-facing frontends end to end, from design handoff through API integration to production release.",
				"Delivered the full product surface on each project — authentication, dashboards, role-based access for 3–6 roles, forms, and data-heavy list views.",
				"Integrated 200+ REST endpoints behind typed API clients with unified authentication and error handling.",
				"Carried a mid-transition project solo for 30 weeks after taking it over from a departing team.",
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
