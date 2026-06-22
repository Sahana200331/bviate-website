import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-primary/15 pt-20 pb-10 px-13">
      <div className="max-w-7xl mx-auto">
        
        {/* Four Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1">
            <Link
              href="/"
              className="font-display text-2xl font-black tracking-tight text-white no-underline mb-4 inline-block"
            >
              <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
                Bviate
              </span>
              Solutions
            </Link>
            <p className="text-secondary text-sm leading-relaxed mt-4">
              Building digital growth engines for ambitious brands.
            </p>
          </div>

          {/* Column 2: Quick Links (Internal uses <Link>) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Company</h4>
            <Link href="/about" className="text-secondary hover:text-white text-sm transition-colors">About Us</Link>
            <Link href="/services" className="text-secondary hover:text-white text-sm transition-colors">Services</Link>
            <Link href="/industries" className="text-secondary hover:text-white text-sm transition-colors">Industries</Link>
            <Link href="/contact" className="text-secondary hover:text-white text-sm transition-colors">Contact</Link>
          </div>

          {/* Column 3: Legal (Internal uses <Link>) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Legal</h4>
            <Link href="/privacy-policy" className="text-secondary hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-secondary hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>

          {/* Column 4: Socials (External uses <a> tag) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Follow Us</h4>
            {/* TODO: Replace with real Bviate LinkedIn company page URL */}
            <a href="https://www.linkedin.com/company/bviate" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white text-sm transition-colors">LinkedIn</a>
            {/* TODO: Replace with real Bviate Instagram handle URL */}
            <a href="https://www.instagram.com/bviate" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white text-sm transition-colors">Instagram</a>
            {/* TODO: Replace 919XXXXXXXXX with real Bviate WhatsApp business number */}
            <a href="https://wa.me/919XXXXXXXXX?text=Hi%2C%20I%20found%20you%20on%20bviate.com%20and%20wanted%20to%20know%20more." target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white text-sm transition-colors">WhatsApp</a>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="border-t border-primary/15 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-sm">
            © 2025 Bviate Solutions. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}