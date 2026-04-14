"use client"

import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const btnBase =
  "inline-flex shrink-0 items-center justify-center rounded-xl text-sm font-medium whitespace-nowrap transition-all select-none active:translate-y-px"

export function CtaSection() {
  return (
    <section id="cta" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl min-h-[400px] flex items-center justify-center">
          {/* Background image */}
          <img
            src="/images/pins/pin14.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[var(--lp-graphite)]/75 backdrop-blur-[2px]" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
              Ready to scale your Pinterest reach?
            </h2>
            <p className="mt-5 text-lg text-gray-300 max-w-lg mx-auto">
              Join brands reaching millions through curated content placement.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@pinscaler.com"
                className={cn(
                  btnBase,
                  "bg-[var(--lp-blue)] hover:bg-[var(--lp-blue-dark)] text-white h-12 px-8 text-base gap-2 shadow-lg"
                )}
              >
                Request placement
                <ArrowRight className="size-4" />
              </a>
              <a
                href="mailto:hello@pinscaler.com"
                className={cn(
                  btnBase,
                  "h-12 px-8 text-base border border-white/30 text-white hover:bg-white/10"
                )}
              >
                Get media kit
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--lp-green)] text-white text-xs font-bold">7</span>
              <span className="text-sm text-gray-300">Free 7-day trial included — no commitment required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
