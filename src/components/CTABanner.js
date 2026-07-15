// src/components/CTABanner.js
import Button from "./ui/Button"
import SectionTag from "./ui/SectionTag"

export default function CTABanner({
  tag = "Ready to Grow?",
  title = "Let's Build Your Digital Growth Engine",
  subtitle = "Book a free 30-minute discovery call. No fluff, no sales pitch. Just a clear, actionable plan.",
  primaryText = "Book a Free Discovery Call →",
  primaryHref = "/contact",
  secondaryText = "Explore Services",
  secondaryHref = "/services"
}) {
  return (
    <section className="py-24 px-13">
      <div className="max-w-5xl mx-auto bg-card border border-primary/15 rounded-3xl p-20 text-center relative overflow-hidden">
        <SectionTag>{tag}</SectionTag>
        <h2 className="font-display text-4xl font-black tracking-tight text-white mb-3">{title}</h2>
        <p className="text-secondary font-light text-base leading-relaxed max-w-xl mx-auto mb-10">{subtitle}</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button href={primaryHref}>{primaryText}</Button>
          <Button href={secondaryHref} variant="secondary">{secondaryText}</Button>
        </div>
      </div>
    </section>
  )
}