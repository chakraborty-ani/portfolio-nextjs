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
	title: "Aniket Chakraborty — Frontend Developer",
	description: "Frontend Developer with 2.5+ years crafting scalable, responsive web applications.",
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
