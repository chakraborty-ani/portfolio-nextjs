import Reveal from "./Reveal"

export default function Projects() {
	return (
		<section id="projects" className="py-28 px-6 md:px-12">
			<div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-12">
				03 / Projects
				<div className="flex-1 h-px bg-border"></div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Project 01: Featured */}
				<Reveal className="md:col-span-2">
					<div className="bg-surface border border-border rounded-2xl p-8 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-accent/30 group grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover-trigger">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,245,90,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="relative z-10">
							<div className="font-syne text-[0.7rem] font-bold text-border tracking-widest mb-6">
								01 — FEATURED
							</div>
							<h3 className="font-syne text-[1.15rem] font-bold tracking-[-0.02em] mb-3">
								Mindsmith — Admin & Doctor Dashboard
							</h3>
							<p className="text-mid text-[0.88rem] leading-[1.65] font-light mb-6">
								Took over mid-development during a critical team transition and delivered
								complex dashboards with real-time data flows under strict deadlines. Currently
								in client testing with live data integrations.
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									"Next.js",
									"TypeScript",
									"Socket.IO",
									"Firebase",
									"Redux Toolkit",
									"React Bootstrap",
								].map(tag => (
									<span
										key={tag}
										className="text-[0.72rem] px-3 py-1 border border-border rounded-full text-muted"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
						<div className="flex items-center justify-center bg-accent-dim border border-accent/10 rounded-xl h-50 relative z-10">
							<svg
								width="80"
								height="80"
								viewBox="0 0 80 80"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="8"
									y="8"
									width="28"
									height="20"
									rx="3"
									fill="rgba(200,245,90,0.15)"
									stroke="rgba(200,245,90,0.4)"
									strokeWidth="1.5"
								/>
								<rect
									x="44"
									y="8"
									width="28"
									height="20"
									rx="3"
									fill="rgba(200,245,90,0.15)"
									stroke="rgba(200,245,90,0.4)"
									strokeWidth="1.5"
								/>
								<rect
									x="8"
									y="36"
									width="64"
									height="36"
									rx="3"
									fill="rgba(200,245,90,0.08)"
									stroke="rgba(200,245,90,0.3)"
									strokeWidth="1.5"
								/>
								<line
									x1="8"
									y1="48"
									x2="72"
									y2="48"
									stroke="rgba(200,245,90,0.2)"
									strokeWidth="1"
								/>
								<circle cx="22" cy="42" r="4" fill="rgba(200,245,90,0.3)" />
								<rect
									x="30"
									y="40"
									width="24"
									height="4"
									rx="2"
									fill="rgba(200,245,90,0.15)"
								/>
							</svg>
						</div>
					</div>
				</Reveal>

				{/* Project 02 */}
				<Reveal delay={0.1}>
					<div className="bg-surface border border-border rounded-2xl p-8 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-accent/30 group h-full hover-trigger">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,245,90,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="font-syne text-[0.7rem] font-bold text-border tracking-widest mb-6">
							02
						</div>
						<h3 className="font-syne text-[1.15rem] font-bold tracking-[-0.02em] mb-3">
							Multivendor E-Commerce Platform
						</h3>
						<p className="text-mid text-[0.88rem] leading-[1.65] font-light mb-6">
							Sole frontend developer. Built from scratch with modular UI architecture and
							optimized state management, achieving ~10% improvement in load times.
						</p>
						<div className="flex flex-wrap gap-2">
							{["Next.js", "Framer Motion", "Redux Toolkit", "Emotion JS"].map(tag => (
								<span
									key={tag}
									className="text-[0.72rem] px-3 py-1 border border-border rounded-full text-muted"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</Reveal>

				{/* Project 03 */}
				<Reveal delay={0.2}>
					<div className="bg-surface border border-border rounded-2xl p-8 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-accent/30 group h-full hover-trigger">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,245,90,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="font-syne text-[0.7rem] font-bold text-border tracking-widest mb-6">
							03
						</div>
						<h3 className="font-syne text-[1.15rem] font-bold tracking-[-0.02em] mb-3">
							Freeflow Digital Dashboard
						</h3>
						<p className="text-mid text-[0.88rem] leading-[1.65] font-light mb-6">
							Interfaces for startups, incubators, and investors. UX improvements cut UI
							inconsistencies by ~25%, enhancing the overall experience across the ecosystem.
						</p>
						<div className="flex flex-wrap gap-2">
							{["Next.js", "Redux Toolkit", "Emotion JS", "React Bootstrap"].map(tag => (
								<span
									key={tag}
									className="text-[0.72rem] px-3 py-1 border border-border rounded-full text-muted"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</Reveal>

				{/* Project 04 */}
				<Reveal delay={0.3}>
					<div className="bg-surface border border-border rounded-2xl p-8 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-accent/30 group h-full hover-trigger">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,245,90,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="font-syne text-[0.7rem] font-bold text-border tracking-widest mb-6">
							04
						</div>
						<h3 className="font-syne text-[1.15rem] font-bold tracking-[-0.02em] mb-3">
							NGO Donation Management Platform
						</h3>
						<p className="text-mid text-[0.88rem] leading-[1.65] font-light mb-6">
							Role-based admin dashboards for managing campaigns and donations. Ensured reusable
							UI components and seamless API communication throughout the platform.
						</p>
						<div className="flex flex-wrap gap-2">
							{["Next.js", "Firebase", "Redux Toolkit", "Emotion JS"].map(tag => (
								<span
									key={tag}
									className="text-[0.72rem] px-3 py-1 border border-border rounded-full text-muted"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</Reveal>

				{/* Project 05: In Progress (with custom styling) */}
				<Reveal delay={0.4}>
					<div className="bg-linear-to-br from-surface to-accent/5 border border-accent/15 rounded-2xl p-8 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-accent/40 group h-full hover-trigger">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,245,90,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="font-syne text-[0.7rem] font-bold text-border tracking-widest mb-6">
							05 — IN PROGRESS
						</div>
						<h3 className="font-syne text-[1.15rem] font-bold tracking-[-0.02em] mb-3">
							Expense Tracker PWA
						</h3>
						<p className="text-mid text-[0.88rem] leading-[1.65] font-light mb-6">
							Chat-based expense tracking app with real-time updates via Socket.IO. Focused on
							clean modular architecture and an engaging conversational logging experience.
						</p>
						<div className="flex flex-wrap gap-2">
							{[
								"Next.js",
								"TypeScript",
								"Socket.IO",
								"Tailwind CSS",
								"Shadcn/UI",
								"Firebase",
							].map(tag => (
								<span
									key={tag}
									className="text-[0.72rem] px-3 py-1 border border-border rounded-full text-muted"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	)
}
