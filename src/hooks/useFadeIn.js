"use client"
import { useEffect } from "react"

export function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 80)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])
}