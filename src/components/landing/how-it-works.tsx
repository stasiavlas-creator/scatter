"use client"

import { Globe, Layout, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { cn } from "@/lib/utils"

const steps = [
  {
    icon: Globe,
    title: "Curated Network",
    description:
      "132 verified accounts across home, beauty, and lifestyle niches — each built with engaged, real audiences.",
    stat: "132",
    statLabel: "accounts",
    color: "#ED6C43",
  },
  {
    icon: Layout,
    title: "Content Placement",
    description:
      "Your products are featured as native pins across relevant accounts, blending seamlessly into organic feeds.",
    stat: "10.99M",
    statLabel: "total audience",
    color: "#BEB050",
  },
  {
    icon: TrendingUp,
    title: "Organic Reach",
    description:
      "Pins generate impressions, saves, and clicks — driving sustained discovery without paid ad spend.",
    stat: "2M+",
    statLabel: "daily impressions",
    color: "#d4c46a",
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

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="hidden md:block absolute top-24 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-[var(--lp-silver)]/60 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className={cn(
                "relative text-center",
                visible && "animate-fade-in-up",
                i === 1 && "animation-delay-200",
                i === 2 && "animation-delay-400"
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
