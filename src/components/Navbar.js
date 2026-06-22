// src/components/Navbar.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // All your core pages are now in the menu!
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle transparent to solid background transition on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close the mobile menu when a link is clicked
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0B1120]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-13 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="font-display text-2xl font-black tracking-tight flex items-center gap-1 hover:opacity-80 transition-opacity">
          <span className="text-primary">Bviate</span><span className="text-white">Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            // Check if the current URL matches the link to highlight it
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-white ${isActive ? "text-white" : "text-secondary"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden md:inline-flex bg-gradient-to-r from-primary to-purple text-white text-sm font-bold py-2.5 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Enquire Now
          </Link>
          
          {/* Mobile Hamburger Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-20 left-0 w-full bg-[#0B1120] border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-lg font-semibold transition-colors ${isActive ? "text-white" : "text-secondary"}`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="w-full h-[1px] bg-white/10 my-2" />
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-primary to-purple text-white text-center font-bold py-4 px-6 rounded-lg shadow-lg"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}