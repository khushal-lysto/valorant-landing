import { Lexend } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata = {
  title: "Lysto",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
