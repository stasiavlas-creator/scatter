"use client"

import { useEffect, useRef, useState } from "react"

export function useParallax(speed = 0.15) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect()
          const viewportCenter = window.innerHeight / 2
          const elementCenter = rect.top + rect.height / 2
          setOffset((elementCenter - viewportCenter) * speed)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [speed])

  return { ref, offset }
}
