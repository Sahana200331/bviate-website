import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata = {
  title: "Bviate Ventures — We Build, Scale, and Automate Ambitious Brands",
  description: "Full-service digital growth company — web development, performance marketing, SEO, and business automation.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-navy text-white font-body">
        {children}
      </body>
    </html>
  )
}
