// src/components/ui/Button.js
import Link from "next/link"

export default function Button({ children, href, variant = "primary", className = "" }) {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
  const variants = {
    primary: "bg-gradient-to-r from-primary to-purple text-white shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-primary/45",
    secondary: "bg-white/5 text-white border border-white/10 hover:border-primary/40 hover:bg-primary/7 hover:-translate-y-0.5"
  }
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}