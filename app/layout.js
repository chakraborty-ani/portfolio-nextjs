import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/CustomCursor"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const syne = Syne({
	subsets: ["latin"],
	variable: "--font-syne",
})

const dmSans = DM_Sans({
	subsets: ["latin"],
	variable: "--font-dm-sans",
})

export const metadata = {
	metadataBase: new URL("https://portfolio-nextjs-alpha-one.vercel.app"),
	title: "Aniket Chakraborty | Frontend Developer",
	description:
		"Portfolio of Aniket Chakraborty, a Frontend Engineer with 3+ years of experience building scalable web and mobile applications using Next.js, TypeScript, and React Native. Based in Kolkata.",
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
		description:
			"Frontend Engineer specializing in Next.js, TypeScript, and React Native. Explore case studies of the products and platforms I've built as a solo or lead frontend contributor.",
		siteName: "Aniket Chakraborty Portfolio",
		// images: [
		// 	{
		// 		url: "/og-image.png",
		// 		width: 1200,
		// 		height: 630,
		// 		alt: "Aniket Chakraborty Portfolio Preview",
		// 	},
		// ],
	},
	twitter: {
		card: "summary_large_image",
		title: "Aniket Chakraborty | Frontend Developer",
		description: "Frontend Engineer specializing in Next.js, TypeScript, and React Native.",
		// images: ["/og-image.png"],
	},
	verification: {
		google: "0wvnPILplG9fobL52sKunIOvCBYDvW0QpZO9FIdCVzg",
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${syne.variable} ${dmSans.variable} scroll-smooth`}>
			<body className="font-sans bg-bg text-gray-100 antialiased cursor-none">
				<CustomCursor />
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
