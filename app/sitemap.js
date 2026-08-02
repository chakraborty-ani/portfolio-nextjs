import { projects } from "@/lib/projects"

export default function sitemap() {
	const base = "https://portfolio-nextjs-alpha-one.vercel.app"

	return [
		{
			url: base,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		...projects.map(project => ({
			url: `${base}/projects/${project.slug}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		})),
	]
}
