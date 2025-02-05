import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { Josefin_Sans } from "next/font/google";
import "./_styles/globals.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "welcome to the Wild Oasis",
  },
  description: [
    "luxirous",
    "cabin",
    "forest",
    "mountains",
    "dolomites",
    "beautiful",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} flex min-h-screen flex-col bg-primary-950 text-primary-50 antialiased`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="mx-auto max-w-7xl w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
