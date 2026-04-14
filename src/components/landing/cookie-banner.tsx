"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-600 leading-relaxed">
            We use cookies to improve your experience. By continuing to use this site, you agree to our{" "}
            <a href="/cookies" className="text-[var(--lp-coral)] underline">Cookies Policy</a>.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="h-9 px-4 rounded-xl text-sm font-medium text-gray-500 hover:text-[var(--lp-graphite)] hover:bg-gray-100 transition-all"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="h-9 px-5 rounded-xl text-sm font-medium bg-[var(--lp-coral)] hover:bg-[var(--lp-coral-dark)] text-white transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
