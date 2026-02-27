import { Lexend, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

// Stand-in for Tungsten until font files are placed in public/fonts/
// To switch: comment this out and uncomment @font-face blocks in globals.css
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-tungsten",
});

export const metadata = {
  title: "Lysto",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${barlowCondensed.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
