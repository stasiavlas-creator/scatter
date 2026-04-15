"use client"

import { Check, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { cn } from "@/lib/utils"

const btnBase =
  "inline-flex shrink-0 items-center justify-center rounded-xl text-sm font-medium whitespace-nowrap transition-all select-none active:translate-y-px"

const packages = [
  {
    name: "Free Trial",
    description: "Try before you commit — 7 days free",
    features: [
      "1–2 curated accounts",
      "5–10 total placements",
      "Distributed posting over 7 days",
      "Impression reporting",
    ],
    cta: "Start free trial",
    highlighted: false,
    badge: "Free",
  },
  {
    name: "Core Package",
    description: "Sustained reach across multiple accounts",
    features: [
      "3–6 relevant accounts",
      "Up to 60 total placements",
      "Daily distribution across accounts",
      "Up to 30-day campaign period",
      "Full analytics report",
    ],
    cta: "Request placement",
    highlighted: true,
  },
  {
    name: "Custom Campaign",
    description: "Flexible strategy tailored to your goals",
    features: [
      "Flexible number of accounts",
      "Custom placement volume",
      "Custom campaign duration",
      "Dedicated account manager",
      "Weekly performance reports",
    ],
    cta: "Contact us",
    highlighted: false,
  },
]

export function Formats() {
  const { ref, visible } = useScrollAnimation()

  return (
    <section id="formats" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Floating pins */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-[1%] top-[10%] opacity-[0.3] hidden lg:block animate-float-bob" style={{ animationDelay: "1.2s" }}>
          <img src="/images/pins/pin6.png" alt="" className="w-24 h-32 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
        <div className="absolute right-[2%] bottom-[12%] opacity-[0.35] hidden lg:block animate-float-bob-alt" style={{ animationDelay: "0.4s" }}>
          <img src="/images/pins/pin12.png" alt="" className="w-28 h-36 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <SectionHeader
          tag="Formats"
          title="Simple, transparent placement"
          subtitle="Choose the format that fits your goals. No hidden fees, no long-term contracts."
          visible={visible}
          tagColor="#D5D5D5"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={cn(
                "relative rounded-2xl border p-8 transition-all duration-300",
                pkg.highlighted
                  ? "border-[var(--lp-olive)] bg-white shadow-lg shadow-[var(--lp-olive)]/10 scale-[1.02] hover:scale-[1.04]"
                  : "border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gray-200 hover:scale-[1.02]",
                visible && "animate-fade-in-up",
                i === 1 && "animation-delay-200",
                i === 2 && "animation-delay-400"
              )}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-[var(--lp-olive)] px-4 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              {"badge" in pkg && pkg.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-[var(--lp-green)] px-4 py-1 text-xs font-bold text-white">
                  {pkg.badge}
                </span>
              )}

              <h3 className="text-xl font-semibold text-[var(--lp-graphite)]">{pkg.name}</h3>
              <p className="text-sm text-gray-500 mt-1 mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="size-4 text-[var(--lp-green)] mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={cn(
                  btnBase,
                  "w-full h-11 gap-1.5",
                  pkg.highlighted
                    ? "bg-[var(--lp-coral)] hover:bg-[var(--lp-coral-dark)] text-white shadow-md shadow-[var(--lp-coral)]/20"
                    : "border border-gray-200 bg-white hover:bg-gray-50 text-[var(--lp-graphite)]"
                )}
              >
                {pkg.cta}
                <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
