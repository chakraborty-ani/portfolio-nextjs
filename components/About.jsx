import Reveal from "./Reveal"
import AnimatedNumber from "./AnimatedNumber"

export default function About() {
	const skills = [
		"Next.js",
		"React Native (Expo)",
		"TypeScript",
		"Redux Toolkit",
		"Zustand",
		"Tailwind CSS",
		"Socket.IO",
		"Firebase",
		"React Hook Form + Zod",
		"Radix UI / shadcn",
		"Razorpay",
		"Docker",
	]

	return (
		<section id="about" className="py-28 px-6 md:px-12">
			<div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mb-12">
				01 / About
				<div className="flex-1 h-px bg-border"></div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
				<div>
					<Reveal>
						<h2 className="font-syne text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.03em]">
							Building interfaces that <em className="not-italic text-accent">feel</em> as good
							as they look.
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<div className="flex gap-8 md:gap-12 mt-12">
							{[
								{ num: "3+", label: "Years of experience" },
								{ num: "4", label: "Key projects delivered" },
								{ num: "480+", label: "REST endpoints integrated" },
							].map((stat, i) => (
								<div key={i}>
									<div className="font-syne text-3xl md:text-4xl xl:text-5xl font-extrabold text-accent tracking-[-0.04em]">
										<AnimatedNumber value={stat.num} />
									</div>
									<div className="text-muted text-sm mt-1">{stat.label}</div>
								</div>
							))}
						</div>
					</Reveal>
				</div>

				<div>
					<Reveal>
						<p className="text-mid font-light leading-[1.8] mb-8">
							I&apos;m a Frontend Engineer specializing in Next.js, TypeScript, and React Native,
							building dashboards, real-time platforms, and cross-platform products across
							healthcare, nonprofit, fintech, and consumer domains.
						</p>
						<p className="text-mid font-light leading-[1.8]">
							Currently serving as Senior Frontend Engineer & Project Owner at Freeflow Ventures,
							setting architecture across 2 products and 5 codebases and shipping as primary
							contributor on all five — spanning 94 web routes and a 53-screen React Native app.
						</p>
					</Reveal>

					<Reveal delay={0.1}>
						<div className="flex items-center gap-4 text-[0.72rem] font-medium tracking-[0.15em] uppercase text-accent mt-10 mb-6">
							Core Skills
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-px border border-border rounded-xl overflow-hidden bg-border">
							{skills.map(skill => (
								<div
									key={skill}
									className="px-5 py-6 bg-surface text-center text-[0.85rem] font-medium text-mid transition-colors hover:bg-accent-dim hover:text-accent relative group hover-trigger"
								>
									{skill}
								</div>
							))}
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	)
}
