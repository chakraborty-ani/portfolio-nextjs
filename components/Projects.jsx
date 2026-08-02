import Link from "next/link"
import Reveal from "./Reveal"
import { projects } from "@/lib/projects"

export default function Projects() {
	return (
		<section id="projects" className="py-28 px-6 md:px-12">
			<div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-12">
				03 / Projects
				<div className="flex-1 h-px bg-border"></div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((project, i) => (
					<Reveal key={project.slug} delay={(i % 4) * 0.1}>
						<Link
							href={`/projects/${project.slug}`}
							className="block bg-surface border border-border rounded-2xl p-8 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-accent/30 group h-full hover-trigger"
						>
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,245,90,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
							<div className="font-syne text-[0.7rem] font-bold text-border tracking-widest mb-6">
								{String(i + 1).padStart(2, "0")} — {project.short}
							</div>
							<h3 className="font-syne text-[1.15rem] font-bold tracking-[-0.02em] mb-3">
								{project.name}
							</h3>
							<p className="text-mid text-[0.88rem] leading-[1.65] font-light mb-6">
								{project.summary}
							</p>
							<div className="flex flex-wrap gap-2 mb-6">
								{project.stack.slice(0, 4).map(tag => (
									<span
										key={tag}
										className="text-[0.72rem] px-3 py-1 border border-border rounded-full text-muted"
									>
										{tag}
									</span>
								))}
							</div>
							<span className="inline-flex items-center gap-1.5 text-accent text-[0.85rem] font-medium">
								View case study →
							</span>
						</Link>
					</Reveal>
				))}
			</div>
		</section>
	)
}
