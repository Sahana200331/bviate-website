"use client"
import { useEffect } from "react"

// Pass a deps array (e.g. [status]) to re-scan for new .fade-in elements
// whenever a component swaps in a fresh one after the initial mount -
// otherwise elements mounted later (e.g. a form re-shown after a reset)
// never get observed and stay permanently at opacity:0.
export function useFadeIn(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 80)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })

    document.querySelectorAll(".fade-in:not(.visible)").forEach(el => observer.observe(el))

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}