import SEO from "./components/SEO"; // Adjust path as needed
import NavBar from "./components/NavBar"; // Adjust path as needed
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
         <SEO
          title="Home | Personal Finance Management"
          description="Simplify budgeting, track expenses, and grow your savings."
          keywords="finance, budgeting, expenses, savings"
          author="Your Name"
        />
						<NavBar/>

				<main>{children}</main>
				<footer className="py-6 bg-gray-800 text-white text-center">
					<p>&copy; 2025 Personal Finance App. All rights reserved.</p>
				</footer>
			</body>
		</html>
	);
}
