import { Lexend, Barlow_Condensed } from "next/font/google";
import "./globals.css";

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
  title: "ValoBot",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${barlowCondensed.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
