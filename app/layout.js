import { Lexend, Barlow_Condensed, Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
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
      <body className={`${lexend.variable} ${barlowCondensed.variable} ${sourceSerif4.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
