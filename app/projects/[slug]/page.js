import Link from "next/link"
import { notFound } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Reveal from "@/components/Reveal"
import Magnetic from "@/components/Magnetic"
import AnimatedNumber from "@/components/AnimatedNumber"
import { projects, getProjectBySlug } from "@/lib/projects"

export function generateStaticParams() {
	return projects.map(project => ({ slug: project.slug }))
}

export async function generateMetadata({ params }) {
	const { slug } = await params
	const project = getProjectBySlug(slug)
	if (!project) return {}

	return {
		title: `${project.name} | Aniket Chakraborty`,
		description: project.summary,
		openGraph: {
			title: `${project.name} | Aniket Chakraborty`,
			description: project.summary,
		},
	}
}

export default async function ProjectCaseStudy({ params }) {
	const { slug } = await params
	const project = getProjectBySlug(slug)
	if (!project) notFound()

	const index = projects.findIndex(p => p.slug === slug)
	const caseNum = String(index + 1).padStart(2, "0")

	return (
		<main>
			<Navbar />

			{/* HERO */}
			<section className="relative pt-36 pb-20 px-6 md:px-12">
				<Reveal>
					<Link
						href="/#projects"
						className="inline-flex items-center gap-2 text-muted text-[0.8rem] mb-10 transition-colors hover:text-accent hover-trigger"
					>
						← Back to projects
					</Link>
				</Reveal>

				<Reveal delay={0.05}>
					<div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-6">
						Case Study {caseNum} / {project.short}
					</div>
				</Reveal>

				<Reveal delay={0.1}>
					<h1 className="font-syne text-[clamp(32px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.03em] max-w-4xl mb-8">
						{project.name}
					</h1>
				</Reveal>

				<Reveal delay={0.15}>
					<p className="text-mid text-base md:text-lg leading-[1.8] font-light max-w-2xl mb-12">
						{project.summary}
					</p>
				</Reveal>

				<Reveal delay={0.2}>
					<div className="flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8">
						<div>
							<div className="text-[0.65rem] tracking-[0.15em] uppercase text-muted mb-1.5">Role</div>
							<div className="text-[0.9rem] font-medium">{project.role}</div>
						</div>
						<div>
							<div className="text-[0.65rem] tracking-[0.15em] uppercase text-muted mb-1.5">
								Timeline
							</div>
							<div className="text-[0.9rem] font-medium">{project.timeline}</div>
						</div>
					</div>
				</Reveal>
			</section>

			{/* STACK */}
			<section className="px-6 md:px-12 pb-20">
				<Reveal>
					<div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-6">
						Stack
					</div>
					<div className="flex flex-wrap gap-2">
						{project.stack.map(tag => (
							<span
								key={tag}
								className="text-[0.8rem] px-3.5 py-1.5 border border-border rounded-full text-mid"
							>
								{tag}
							</span>
						))}
					</div>
				</Reveal>
			</section>

			{/* METRICS */}
			<section className="px-6 md:px-12 pb-8">
				<Reveal>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border rounded-xl overflow-hidden bg-border">
						{project.metrics.map((m, i) => (
							<div key={i} className="px-5 py-7 bg-surface text-center">
								<div className="font-syne text-2xl md:text-3xl font-extrabold text-accent tracking-[-0.03em]">
									<AnimatedNumber value={m.value} />
								</div>
								<div className="text-muted text-[0.75rem] mt-1.5 leading-snug">{m.label}</div>
							</div>
						))}
					</div>
				</Reveal>
			</section>

			{/* OVERVIEW */}
			<section className="py-20 px-6 md:px-12">
				<div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-8">
					Overview
					<div className="flex-1 h-px bg-border"></div>
				</div>
				<Reveal>
					<p className="text-mid font-light leading-[1.85] text-[0.95rem] max-w-3xl">
						{project.overview}
					</p>
				</Reveal>
			</section>

			{/* ARCHITECTURE HIGHLIGHTS */}
			<section className="py-20 px-6 md:px-12">
				<div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-8">
					Architecture Highlights
					<div className="flex-1 h-px bg-border"></div>
				</div>
				<div className="flex flex-col gap-4">
					{project.highlights.map((h, i) => (
						<Reveal key={i} delay={i * 0.06}>
							<div className="bg-surface border border-border rounded-2xl p-7 transition-colors hover:border-accent/30 hover-trigger">
								<h3 className="font-syne text-[1.05rem] font-bold tracking-[-0.02em] mb-2.5">
									{h.title}
								</h3>
								<p className="text-mid text-[0.88rem] leading-[1.7] font-light">{h.body}</p>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			{/* GALLERY */}
			<section className="py-20 px-6 md:px-12">
				<div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-8">
					Gallery
					<div className="flex-1 h-px bg-border"></div>
				</div>
				<Reveal>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{[0, 1, 2].map(i => (
							<div
								key={i}
								className="aspect-video bg-accent-dim border border-accent/10 rounded-xl flex items-center justify-center"
							>
								<span className="text-muted text-[0.75rem] tracking-wide uppercase">
									Screenshot coming soon
								</span>
							</div>
						))}
					</div>
				</Reveal>
			</section>

			{/* NEXT PROJECT */}
			<section className="px-6 md:px-12 pb-28">
				<Reveal>
					<Magnetic>
						<Link
							href="/#projects"
							className="inline-flex items-center gap-2 bg-accent text-bg py-3 px-8 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,245,90,0.3)] hover-trigger"
						>
							View all projects
						</Link>
					</Magnetic>
				</Reveal>
			</section>

			<Footer />
		</main>
	)
}
