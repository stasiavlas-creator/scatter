"use client"

import { Package, Layers, Share2, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { cn } from "@/lib/utils"

const steps = [
  {
    icon: Package,
    title: "Your Product",
    description:
      "Share your product — we handle the creative. Your item is styled into native Pinterest content that fits each account's aesthetic.",
    stat: "1",
    statLabel: "product",
    color: "#ED6C43",
  },
  {
    icon: Layers,
    title: "Multiple Placements",
    description:
      "Your product is turned into multiple pins and placed across curated accounts in relevant niches — home, beauty, lifestyle.",
    stat: "60",
    statLabel: "placements per campaign",
    color: "#BEB050",
  },
  {
    icon: Share2,
    title: "Distribution",
    description:
      "Pins are posted daily across accounts on a schedule. Distributed posting maximizes organic visibility over the campaign period.",
    stat: "29,388",
    statLabel: "accounts in network",
    color: "#d4c46a",
  },
  {
    icon: TrendingUp,
    title: "Cumulative Reach",
    description:
      "Each pin compounds over time. Unlike ads, pins keep generating impressions, saves, and clicks for months after posting.",
    stat: "3M+",
    statLabel: "daily impressions",
    color: "#D5D5D5",
  },
]

export function HowItWorks() {
  const { ref, visible } = useScrollAnimation()

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[var(--lp-gray)] relative overflow-hidden" ref={ref}>
      {/* Floating pins */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-[3%] top-[8%] opacity-[0.35] hidden lg:block animate-float-bob" style={{ animationDelay: "0.3s" }}>
          <img src="/images/pins/pin1.png" alt="" className="w-28 h-36 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
        <div className="absolute left-[2%] bottom-[10%] opacity-[0.3] hidden lg:block animate-float-bob-alt" style={{ animationDelay: "1.8s" }}>
          <img src="/images/pins/pin7.png" alt="" className="w-24 h-32 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <SectionHeader
          tag="How it works"
          title="Three steps to scale"
          subtitle="From network to reach — a simple, transparent process."
          visible={visible}
          tagColor="#BEB050"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[var(--lp-silver)]/60 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className={cn(
                "relative text-center",
                visible && "animate-fade-in-up",
                i === 1 && "animation-delay-200",
                i === 2 && "animation-delay-400",
                i === 3 && "animation-delay-600"
              )}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-sm relative z-10 group hover:shadow-md transition-all duration-300">
                <step.icon className="size-7" style={{ color: step.color }} />
              </div>

              <span
                className="inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold mb-4"
                style={{ backgroundColor: step.color + "18", color: step.color }}
              >
                {i + 1}
              </span>

              <h3 className="text-xl font-semibold text-[var(--lp-graphite)] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 max-w-xs mx-auto">
                {step.description}
              </p>

              <div className="inline-flex items-baseline gap-1.5 rounded-full bg-white border border-gray-100 px-4 py-2 shadow-sm">
                <span className="text-xl font-bold text-[var(--lp-graphite)]">{step.stat}</span>
                <span className="text-sm text-gray-400">{step.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
