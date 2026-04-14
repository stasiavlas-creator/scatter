"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Audience", href: "#audience" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Formats", href: "#formats" },
]

const btnBase =
  "inline-flex shrink-0 items-center justify-center rounded-xl text-sm font-medium whitespace-nowrap transition-all select-none active:translate-y-px"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[var(--lp-gray-mid)] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Logo />
            <span className="text-lg font-semibold tracking-tight text-[var(--lp-graphite)]">
              Scatter
            </span>
          </a>

          {/* Center: Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-[var(--lp-graphite)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              className={cn(
                btnBase,
                "h-8 px-4 text-sm text-gray-500 hover:text-[var(--lp-graphite)]"
              )}
            >
              Get media kit
            </a>
            <a
              href="#cta"
              className={cn(
                btnBase,
                "h-8 px-4 text-sm bg-[var(--lp-coral)] hover:bg-[var(--lp-coral-dark)] text-white"
              )}
            >
              Request placement
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[var(--lp-gray-mid)] animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-gray-500 hover:text-[var(--lp-graphite)] py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[var(--lp-gray-mid)] space-y-2">
              <a
                href="#cta"
                className={cn(
                  btnBase,
                  "w-full h-10 px-4 bg-[var(--lp-coral)] hover:bg-[var(--lp-coral-dark)] text-white justify-center"
                )}
                onClick={() => setMobileOpen(false)}
              >
                Request placement
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
