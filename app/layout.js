import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/CustomCursor"

const syne = Syne({
	subsets: ["latin"],
	variable: "--font-syne",
})

const dmSans = DM_Sans({
	subsets: ["latin"],
	variable: "--font-dm-sans",
})

export const metadata = {
	metadataBase: new URL('https://portfolio-nextjs-alpha-one.vercel.app'),
	title: "Aniket Chakraborty | Frontend Developer",
	description:
		"Portfolio of Aniket Chakraborty, a Frontend Developer with 2.5+ years of experience building scalable, responsive web applications using Next.js, React, and TypeScript. Based in Kolkata.",
	keywords: [
		"Frontend Developer",
		"React Developer",
		"Next.js Developer",
		"Aniket Chakraborty",
		"Web Developer Kolkata",
		"TypeScript",
		"JavaScript",
	],
	authors: [{ name: "Aniket Chakraborty" }],
	creator: "Aniket Chakraborty",
	openGraph: {
		type: "website",
		locale: "en_IN",
		url: "/",
		title: "Aniket Chakraborty | Frontend Developer",
		description: "Frontend Developer specializing in React.js and Next.js. Explore my portfolio to view my latest projects, technical experience, and skills in building scalable web applications.",
		siteName: "Aniket Chakraborty Portfolio",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Aniket Chakraborty Portfolio Preview",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Aniket Chakraborty | Frontend Developer",
		description: "Frontend Developer specializing in React and Next.js.",
		images: ["/og-image.png"],
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${syne.variable} ${dmSans.variable} scroll-smooth`}>
			<body className="font-sans bg-bg text-gray-100 antialiased cursor-none">
				<CustomCursor />
				{children}
			</body>
		</html>
	)
}
