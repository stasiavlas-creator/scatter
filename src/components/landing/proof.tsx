"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { CategoryTable } from "./category-table"
import { HeatmapGrid } from "./heatmap-grid"
import { TrendingUp, Eye, Users as UsersIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const metrics = [
  { icon: Eye, value: "2M+", label: "Daily impressions", sublabel: "Average across network", color: "#ED6C43" },
  { icon: UsersIcon, value: "10.99M", label: "Total audience", sublabel: "Combined followers", color: "#BEB050" },
  { icon: TrendingUp, value: "+12.4%", label: "Weekly growth", sublabel: "Network average", color: "#d4c46a" },
]

const growthData = [
  { week: "W1", impressions: 820 },
  { week: "W2", impressions: 940 },
  { week: "W3", impressions: 890 },
  { week: "W4", impressions: 1050 },
  { week: "W5", impressions: 1120 },
  { week: "W6", impressions: 1080 },
  { week: "W7", impressions: 1200 },
  { week: "W8", impressions: 1350 },
  { week: "W9", impressions: 1280 },
  { week: "W10", impressions: 1420 },
  { week: "W11", impressions: 1380 },
  { week: "W12", impressions: 1520 },
]

function GrowthChart() {
  const max = Math.max(...growthData.map((d) => d.impressions))
  const min = Math.min(...growthData.map((d) => d.impressions))
  const width = 400
  const height = 120
  const padding = 8

  const points = growthData.map((d, i) => {
    const x = padding + (i / (growthData.length - 1)) * (width - padding * 2)
    const y = height - padding - ((d.impressions - min) / (max - min)) * (height - padding * 2)
    return `${x},${y}`
  })

  const pathD = `M ${points.join(" L ")}`
  const areaD = `${pathD} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      <defs>
        <linearGradient id="chartGradientBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--lp-blue)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--lp-blue)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#chartGradientBlue)" />
      <path d={pathD} fill="none" stroke="var(--lp-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {(() => {
        const last = points[points.length - 1].split(",")
        return <circle cx={last[0]} cy={last[1]} r="4" fill="var(--lp-blue)" stroke="white" strokeWidth="2" />
      })()}
    </svg>
  )
}

export function Proof() {
  const { ref, visible } = useScrollAnimation(0.1)

  return (
    <section className="py-24 lg:py-32 bg-[var(--lp-gray)] relative overflow-hidden" ref={ref}>
      {/* Floating pins */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-[1%] top-[5%] opacity-[0.3] hidden lg:block animate-float-bob-alt" style={{ animationDelay: "0.6s" }}>
          <img src="/images/pins/pin8.png" alt="" className="w-28 h-36 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
        <div className="absolute left-[1%] bottom-[5%] opacity-[0.35] hidden lg:block animate-float-bob" style={{ animationDelay: "1.4s" }}>
          <img src="/images/pins/pin13.png" alt="" className="w-24 h-32 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <SectionHeader
          tag="Metrics"
          title="Performance you can measure"
          subtitle="Real data from our active network — not projections."
          visible={visible}
          tagColor="#d4c46a"
        />

        {/* Metrics row */}
        <div className={cn("grid md:grid-cols-3 gap-6 mb-12", visible && "animate-fade-in-up animation-delay-100")}>
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-all duration-300">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl shrink-0" style={{ backgroundColor: m.color + "18" }}>
                <m.icon className="size-5" style={{ color: m.color === "#d4c46a" ? "#8a8030" : m.color }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--lp-graphite)]">{m.value}</p>
                <p className="text-sm text-gray-600">{m.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{m.sublabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Growth chart */}
        <div className={cn("rounded-2xl border border-gray-100 bg-white p-6 lg:p-8 shadow-sm mb-8", visible && "animate-fade-in-up animation-delay-200")}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-[var(--lp-graphite)]">Impression growth</h3>
              <p className="text-sm text-gray-400">Last 12 weeks</p>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[var(--lp-green-dark)] font-medium">
              <TrendingUp className="size-4" />
              +85%
            </div>
          </div>
          <GrowthChart />
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>Week 1</span>
            <span>Week 12</span>
          </div>
        </div>

        {/* Category Table + Heatmap */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          <div className={cn(visible && "animate-fade-in-up animation-delay-300")}>
            <CategoryTable />
          </div>
          <div className={cn(visible && "animate-fade-in-up animation-delay-400")}>
            <HeatmapGrid />
          </div>
        </div>
      </div>
    </section>
  )
}
