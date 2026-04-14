"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { cn } from "@/lib/utils"

const barColors = ["#ED6C43", "#BEB050", "#d4c46a", "#D5D5D5"]

const interests = [
  { name: "Art", pct: 84.5 },
  { name: "Home Decor", pct: 84.4 },
  { name: "Entertainment", pct: 80.8 },
  { name: "Design", pct: 80.7 },
  { name: "DIY & Crafts", pct: 77.8 },
  { name: "Beauty", pct: 77.1 },
  { name: "Women's Fashion", pct: 76.6 },
  { name: "Food & Drinks", pct: 73.4 },
]

const countries = [
  { name: "United States", value: "1.48M", pct: 13.5 },
  { name: "Brazil", value: "0.53M", pct: 4.9 },
  { name: "Russia", value: "0.49M", pct: 4.4 },
  { name: "India", value: "0.45M", pct: 4.1 },
  { name: "Germany", value: "0.42M", pct: 3.8 },
]

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      <p className="text-3xl lg:text-4xl font-bold text-[var(--lp-graphite)]">{value}</p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  )
}

export function Audience() {
  const { ref, visible } = useScrollAnimation(0.1)

  return (
    <section id="audience" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Floating pins */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-[1%] top-[15%] opacity-[0.3] hidden lg:block animate-float-bob" style={{ animationDelay: "0.5s" }}>
          <img src="/images/pins/pin2.png" alt="" className="w-24 h-32 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
        <div className="absolute right-[2%] bottom-[8%] opacity-[0.35] hidden lg:block animate-float-bob-alt" style={{ animationDelay: "1s" }}>
          <img src="/images/pins/pin9.png" alt="" className="w-28 h-36 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <SectionHeader
          tag="Audience"
          title="Real audience, real data"
          subtitle="US-focused, female-majority audience across home, beauty, and lifestyle verticals."
          visible={visible}
          tagColor="#BEB050"
        />

        {/* Stats row */}
        <div className={cn("grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14", visible && "animate-fade-in-up animation-delay-100")}>
          <StatCard label="Total audience" value="10.99M" />
          <StatCard label="Active accounts" value="132" />
          <StatCard label="Female audience" value="75.3%" />
          <StatCard label="Key age group" value="25-34" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Interests */}
          <div className={cn("rounded-2xl border border-gray-100 bg-white p-6 lg:p-8 shadow-sm", visible && "animate-fade-in-up animation-delay-200")}>
            <h3 className="text-lg font-semibold text-[var(--lp-graphite)] mb-6">
              Top audience interests
            </h3>
            <div className="space-y-4">
              {interests.map((interest, i) => (
                <div key={interest.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-gray-600">{interest.name}</span>
                    <span className="text-sm font-medium text-[var(--lp-graphite)]">
                      {interest.pct}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={cn("h-full rounded-full", visible && "animate-bar-grow")}
                      style={{
                        width: `${interest.pct}%`,
                        backgroundColor: barColors[i % barColors.length],
                        animationDelay: `${0.3 + i * 0.08}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Countries */}
          <div className={cn("rounded-2xl border border-gray-100 bg-white p-6 lg:p-8 shadow-sm", visible && "animate-fade-in-up animation-delay-300")}>
            <h3 className="text-lg font-semibold text-[var(--lp-graphite)] mb-6">
              Reach by country
            </h3>
            <div className="space-y-5">
              {countries.map((country, i) => (
                <div key={country.name} className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 w-28 shrink-0">
                    {country.name}
                  </span>
                  <div className="flex-1 h-3 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={cn("h-full rounded-full", visible && "animate-bar-grow")}
                      style={{
                        width: `${(country.pct / 13.5) * 100}%`,
                        backgroundColor: barColors[(i + 1) % barColors.length],
                        animationDelay: `${0.4 + i * 0.1}s`,
                      }}
                    />
                  </div>
                  <div className="text-right shrink-0 w-20">
                    <span className="text-sm font-medium text-[var(--lp-graphite)]">
                      {country.value}
                    </span>
                    <span className="text-xs text-gray-400 ml-1">{country.pct}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Demographics */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-medium text-gray-400 mb-4">Demographics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-2">Gender split</p>
                  <div className="flex h-3 rounded-full overflow-hidden">
                    <div style={{ width: "75.3%", backgroundColor: "#ED6C43" }} />
                    <div style={{ width: "17.9%", backgroundColor: "#BEB050" }} />
                    <div style={{ width: "6.8%", backgroundColor: "#D5D5D5" }} />
                  </div>
                  <div className="flex justify-between mt-1.5 text-xs text-gray-500">
                    <span>75.3% F</span>
                    <span>17.9% M</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-2">Peak age</p>
                  <div className="flex items-end gap-1 h-10">
                    {[19, 35.2, 19.9, 6, 3.9, 6.4, 3.2].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                          height: `${(h / 35.2) * 100}%`,
                          backgroundColor: barColors[i % barColors.length],
                          opacity: i === 1 ? 1 : 0.5,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5 text-center">25-34 peak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
