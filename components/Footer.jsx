export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className="py-8 px-6 md:px-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
			<p className="text-muted text-[0.8rem]">&copy; {year} Aniket Chakraborty. All rights reserved.</p>
			<p className="text-muted text-[0.78rem]">Kolkata, India</p>
		</footer>
	)
}
