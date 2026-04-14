"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const categories = [
  { name: "Home Decor", count: 30, srr: 0.80, err: 4.06 },
  { name: "Art & Design", count: 13, srr: 0.64, err: 3.60 },
  { name: "Nature & Animals", count: 11, srr: 0.80, err: 4.02 },
  { name: "Food & Drinks", count: 10, srr: 1.16, err: 3.68 },
  { name: "Fashion & Outfits", count: 8, srr: 1.05, err: 4.39 },
  { name: "Weddings", count: 8, srr: 0.69, err: 4.61 },
  { name: "Kids & Characters", count: 6, srr: 1.06, err: 3.64 },
  { name: "Fitness & Lifestyle", count: 6, srr: 0.70, err: 3.21 },
  { name: "Travel", count: 6, srr: 0.93, err: 3.93 },
  { name: "Beauty & Hair", count: 5, srr: 0.74, err: 3.41 },
  { name: "Crafts & DIY", count: 4, srr: 0.87, err: 3.70 },
  { name: "Holidays", count: 2, srr: 0.87, err: 3.71 },
  { name: "Other", count: 3, srr: 0.46, err: 2.60 },
]

const maxSRR = Math.max(...categories.map((c) => c.srr))
const maxERR = Math.max(...categories.map((c) => c.err))

export function CategoryTable() {
  const { ref, visible } = useScrollAnimation(0.1)

  return (
    <div ref={ref} className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-[var(--lp-graphite)]">Category Performance</h3>
        <p className="text-sm text-gray-400 mt-0.5">Save rate (SRR) and engagement rate (ERR) by category</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider text-right">Count</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider text-right">SRR</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider text-right">ERR</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, i) => {
              const isBestSRR = cat.srr === maxSRR
              const isBestERR = cat.err === maxERR
              return (
                <tr
                  key={cat.name}
                  className={cn(
                    "border-b border-gray-50 hover:bg-gray-50 transition-colors duration-200",
                    visible && "animate-fade-in-up",
                  )}
                  style={{ animationDelay: visible ? `${0.1 + i * 0.05}s` : undefined }}
                >
                  <td className="px-6 py-3.5 text-sm font-medium text-[var(--lp-graphite)]">{cat.name}</td>
                  <td className="px-6 py-3.5 text-sm text-gray-600 text-right">{cat.count}</td>
                  <td className="px-6 py-3.5 text-right">
                    <span
                      className={cn(
                        "text-sm",
                        isBestSRR
                          ? "font-bold text-[var(--lp-graphite)]"
                          : "text-gray-600"
                      )}
                    >
                      {cat.srr.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-right">
                    <span
                      className={cn(
                        "text-sm",
                        isBestERR
                          ? "font-bold text-[var(--lp-graphite)]"
                          : "text-gray-600"
                      )}
                    >
                      {cat.err.toFixed(2)}%
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
