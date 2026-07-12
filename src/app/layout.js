import { GoogleAnalytics } from "@next/third-parties/google"
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

// 1. Imports for our global components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

// 2. Initialize the fonts
const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne" 
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans"
});

export const metadata = {
  metadataBase: new URL("https://bviatesolutions.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-navy text-white font-body flex flex-col min-h-screen">
        
        <Navbar />
        
        {/* Added flex-grow so the footer gets pushed to the very bottom */}
        <main className="flex-grow pt-16">{children}</main>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <Footer />
        <WhatsAppButton />

      </body>
    </html>
  );
}