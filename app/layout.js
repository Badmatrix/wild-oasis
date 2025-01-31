import Navigation from "@/components/Navigation";
import "./globals.css";
import Logo from "@/components/Logo";
export const metadata = {
	title: "wild oasis",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<header>
					<Logo />
					<Navigation />
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
