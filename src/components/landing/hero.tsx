"use client"

import { useAnimatedCounter } from "@/hooks/use-animated-counter"
import { ArrowRight, TrendingUp, Users, Eye, BarChart3, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"
import { PinCard } from "./pin-card"

const btnBase =
  "inline-flex shrink-0 items-center justify-center rounded-xl text-sm font-medium whitespace-nowrap transition-all select-none active:translate-y-px"

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, count } = useAnimatedCounter(target)
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const heroPins = [
  { url: "/images/pins/pin2.png", x: "right-[-40px]", y: "top-[60px]", delay: "0s" },
  { url: "/images/pins/pin6.png", x: "right-[80px]", y: "bottom-[20px]", delay: "1.2s" },
  { url: "/images/pins/pin8.png", x: "right-[-20px]", y: "bottom-[160px]", delay: "0.7s" },
  { url: "/images/pins/pin10.png", x: "left-[-60px]", y: "bottom-[80px]", delay: "2s" },
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[var(--lp-coral)]/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[var(--lp-olive)]/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--lp-blue)]/5 border border-[var(--lp-blue)]/10 px-4 py-1.5 text-sm text-[var(--lp-blue)] mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[var(--lp-olive)]" />
                132 active accounts
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--lp-graphite)] leading-[1.05] animate-fade-in-up animation-delay-100">
              Scale your reach on{" "}
              <span className="bg-gradient-to-r from-[var(--lp-coral)] to-[var(--lp-olive)] bg-clip-text text-transparent">
                Pinterest
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-lg animate-fade-in-up animation-delay-200">
              <Counter target={2000000} suffix="+" /> daily impressions
              through curated content placement across verified accounts.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <a
                href="#cta"
                className={cn(
                  btnBase,
                  "bg-[var(--lp-blue)] hover:bg-[var(--lp-blue-dark)] text-white h-12 px-7 text-base gap-2 shadow-lg shadow-[var(--lp-blue)]/20 hover:shadow-xl hover:shadow-[var(--lp-blue)]/30"
                )}
              >
                Request placement
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#cta"
                className={cn(
                  btnBase,
                  "h-12 px-7 text-base border border-gray-200 bg-white hover:bg-gray-50 text-[var(--lp-graphite)]"
                )}
              >
                Get media kit
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 animate-fade-in-up animation-delay-400">
              <div>
                <p className="text-2xl font-bold text-[var(--lp-graphite)]">
                  <Counter target={10990000} />
                </p>
                <p className="text-sm text-gray-400 mt-0.5">Total audience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--lp-graphite)]">75.3%</p>
                <p className="text-sm text-gray-400 mt-0.5">Female audience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--lp-graphite)]">25–34</p>
                <p className="text-sm text-gray-400 mt-0.5">Key age group</p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Mockup + Floating Pins */}
          <div className="relative animate-slide-in-right animation-delay-300 hidden lg:block">
            {/* Floating pin images */}
            {heroPins.map((pin, i) => (
              <div
                key={i}
                className={cn(
                  "absolute z-10",
                  pin.x,
                  pin.y,
                  i % 2 === 0 ? "animate-float-bob" : "animate-float-bob-alt"
                )}
                style={{ animationDelay: pin.delay, opacity: 0.6 }}
              >
                <PinCard imageUrl={pin.url} size="sm" />
              </div>
            ))}

            <div className="relative z-20">
              {/* Main dashboard card */}
              <div className="rounded-2xl border border-gray-200/80 bg-[var(--lp-cream)] backdrop-blur-sm shadow-2xl shadow-gray-300/30 p-6 space-y-5">
                {/* Dashboard header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Network Overview</p>
                    <p className="text-2xl font-bold text-[var(--lp-graphite)] mt-0.5">1.52M</p>
                    <p className="text-xs text-[var(--lp-olive)] mt-0.5 flex items-center gap-1">
                      <TrendingUp className="size-3" /> +12.4% this week
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--lp-blue)]/10">
                    <BarChart3 className="size-5 text-[var(--lp-blue)]" />
                  </div>
                </div>

                {/* Mini chart bars */}
                <div className="flex items-end gap-1.5 h-24 pt-2">
                  {[40, 55, 45, 65, 50, 72, 60, 80, 68, 85, 75, 90, 78, 95, 88, 70, 82, 92, 86, 98, 90, 85, 95, 88].map(
                    (h, i) => {
                      const colors = ["#ED6C43", "#BEB050", "#d4c46a", "#D5D5D5"]
                      return (
                        <div
                          key={i}
                          className="flex-1 rounded-t opacity-80 animate-bar-grow"
                          style={{
                            height: `${h}%`,
                            backgroundColor: colors[i % colors.length],
                            animationDelay: `${0.5 + i * 0.03}s`,
                          }}
                        />
                      )
                    }
                  )}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    { icon: Eye, label: "Impressions", val: "2M+" },
                    { icon: Users, label: "Reach", val: "842K" },
                    { icon: Bookmark, label: "Saves", val: "23.4K" },
                  ].map(({ icon: Icon, label, val }) => (
                    <div key={label} className="rounded-xl bg-[var(--lp-gray)] p-3">
                      <div className="flex items-center gap-1.5">
                        <Icon className="size-3.5 text-gray-400" />
                        <span className="text-xs text-gray-400">{label}</span>
                      </div>
                      <p className="text-lg font-semibold text-[var(--lp-graphite)] mt-1">{val}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card: weekly growth */}
              <div className="absolute -top-6 -right-6 rounded-xl border border-gray-200/80 bg-[var(--lp-cream)] backdrop-blur-sm shadow-xl p-4 w-44 animate-scale-in animation-delay-700">
                <p className="text-xs font-medium text-gray-400 mb-1">Weekly Growth</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-[var(--lp-olive)]">+12.4%</span>
                  <TrendingUp className="size-4 text-[var(--lp-olive)]" />
                </div>
                <div className="flex gap-0.5 mt-2">
                  {[30, 45, 40, 55, 48, 62, 58].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-[var(--lp-green)]"
                      style={{ height: h * 0.4, opacity: 0.3 + (i / 7) * 0.7 }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating card: top category */}
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-gray-200/80 bg-[var(--lp-cream)] backdrop-blur-sm shadow-xl p-4 w-48 animate-scale-in animation-delay-900">
                <p className="text-xs font-medium text-gray-400 mb-2">Top Category</p>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-[var(--lp-blue)]/10 flex items-center justify-center">
                    <Eye className="size-4 text-[var(--lp-blue)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--lp-graphite)]">Home Decor</p>
                    <p className="text-xs text-gray-400">84.4% affinity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
