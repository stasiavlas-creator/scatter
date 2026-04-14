"use client"

import { FlaskConical, Palette, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { cn } from "@/lib/utils"

const cases = [
  {
    icon: FlaskConical,
    title: "Product Testing",
    description:
      "Test product appeal through real Pinterest engagement. See how your products resonate with a targeted audience before scaling.",
    tag: "Discovery",
    color: "#ED6C43",
  },
  {
    icon: Palette,
    title: "Creative Testing",
    description:
      "Validate visual content performance across real accounts. Optimize creatives based on actual saves, clicks, and impressions.",
    tag: "Optimization",
    color: "#BEB050",
  },
  {
    icon: Zap,
    title: "Reach Scaling",
    description:
      "Amplify organic discovery across targeted audiences. Scale your brand presence without increasing ad spend.",
    tag: "Growth",
    color: "#d4c46a",
  },
]

export function UseCases() {
  const { ref, visible } = useScrollAnimation()

  return (
    <section id="use-cases" className="py-24 lg:py-32 bg-[var(--lp-gray)] relative overflow-hidden" ref={ref}>
      {/* Floating pins */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-[1%] top-[12%] opacity-[0.3] hidden lg:block animate-float-bob-alt" style={{ animationDelay: "0.8s" }}>
          <img src="/images/pins/pin4.png" alt="" className="w-26 h-34 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
        <div className="absolute left-[2%] bottom-[15%] opacity-[0.35] hidden lg:block animate-float-bob" style={{ animationDelay: "2s" }}>
          <img src="/images/pins/pin11.png" alt="" className="w-24 h-30 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <SectionHeader
          tag="Use cases"
          title="Built for growth teams"
          subtitle="Whether you're testing or scaling, Pinscaler delivers measurable results."
          visible={visible}
          tagColor="#ED6C43"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={cn(
                "group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5",
                visible && "animate-fade-in-up",
                i === 1 && "animation-delay-200",
                i === 2 && "animation-delay-400"
              )}
              style={{ "--hover-color": c.color } as React.CSSProperties}
            >
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium mb-5"
                style={{ backgroundColor: c.color + "18", color: c.color === "#d4c46a" ? "#8a8030" : c.color }}
              >
                {c.tag}
              </span>

              <div
                className="relative flex h-12 w-12 items-center justify-center rounded-xl transition-colors mb-5"
                style={{ backgroundColor: c.color + "12" }}
              >
                <c.icon className="size-6 transition-colors" style={{ color: c.color === "#d4c46a" ? "#8a8030" : c.color }} />
              </div>

              <h3 className="text-xl font-semibold text-[var(--lp-graphite)] mb-3">
                {c.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
