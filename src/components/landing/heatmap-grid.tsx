"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const hours = ["6a", "9a", "12p", "3p", "6p", "9p"]

// Engagement intensity data (0-1)
const data = [
  [0.2, 0.4, 0.6, 0.8, 0.5, 0.3],
  [0.3, 0.5, 0.7, 0.9, 0.6, 0.4],
  [0.2, 0.6, 0.8, 0.7, 0.5, 0.3],
  [0.4, 0.7, 0.9, 1.0, 0.7, 0.5],
  [0.3, 0.5, 0.6, 0.8, 0.6, 0.4],
  [0.5, 0.8, 0.7, 0.6, 0.8, 0.6],
  [0.4, 0.7, 0.5, 0.4, 0.7, 0.5],
]

export function HeatmapGrid() {
  const { ref, visible } = useScrollAnimation(0.1)

  return (
    <div ref={ref} className="rounded-2xl border border-gray-100 bg-white p-6 lg:p-8 shadow-sm">
      <h3 className="text-lg font-semibold text-[var(--lp-graphite)] mb-1">
        Engagement Heatmap
      </h3>
      <p className="text-sm text-gray-400 mb-6">Peak activity by day and time</p>

      <div className="overflow-x-auto">
        <div className="grid gap-1.5" style={{ gridTemplateColumns: `60px repeat(${hours.length}, 1fr)` }}>
          {/* Header row */}
          <div />
          {hours.map((h) => (
            <div key={h} className="text-center text-xs text-gray-400 pb-1">{h}</div>
          ))}

          {/* Data rows — flattened for CSS grid */}
          {data.flatMap((row, ri) => [
            <div key={`label-${ri}`} className="text-xs text-gray-400 flex items-center">{days[ri]}</div>,
            ...row.map((val, ci) => (
              <div
                key={`cell-${ri}-${ci}`}
                className={cn(
                  "h-8 rounded-md transition-all duration-200 hover:ring-2 hover:ring-[var(--lp-blue)]/30",
                  visible && "animate-heatmap-cell"
                )}
                style={{
                  backgroundColor: `rgba(237, 108, 67, ${0.1 + val * 0.7})`,
                  animationDelay: visible ? `${(ri * hours.length + ci) * 0.03}s` : undefined,
                }}
                title={`${days[ri]} ${hours[ci]}: ${Math.round(val * 100)}% activity`}
              />
            )),
          ])}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-4 justify-end">
        <span className="text-xs text-gray-400">Low</span>
        <div className="flex gap-0.5">
          {[0.1, 0.3, 0.5, 0.7, 0.9].map((val) => (
            <div
              key={val}
              className="w-5 h-3 rounded-sm"
              style={{ backgroundColor: `rgba(237, 108, 67, ${0.1 + val * 0.7})` }}
            />
          ))}
        </div>
        <span className="text-xs text-gray-400">High</span>
      </div>
    </div>
  )
}
