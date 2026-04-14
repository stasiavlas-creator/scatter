"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useAnimatedCounter } from "@/hooks/use-animated-counter"
import { ArrowRight, Eye, Bookmark, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

function Metric({ icon: Icon, target, suffix, label }: { icon: typeof Eye; target: number; suffix: string; label: string }) {
  const { ref, count } = useAnimatedCounter(target)
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm text-center hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Icon className="size-4 text-[var(--lp-blue)]" />
        <span className="text-xs text-gray-400">{label}</span>
      </div>
      <p className="text-2xl font-bold text-[var(--lp-graphite)]">
        <span ref={ref}>{count.toLocaleString()}{suffix}</span>
      </p>
    </div>
  )
}

export function ProductPlacement() {
  const { ref, visible } = useScrollAnimation(0.15)

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background floating pins */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-[-20px] top-[10%] opacity-[0.4] hidden lg:block animate-float-bob" style={{ animationDelay: "0.5s" }}>
          <img src="/images/pins/pin3.png" alt="" className="w-28 h-36 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
        <div className="absolute left-[3%] bottom-[12%] opacity-[0.35] hidden lg:block animate-float-bob-alt" style={{ animationDelay: "1.5s" }}>
          <img src="/images/pins/pin5.png" alt="" className="w-24 h-32 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section header */}
        <div className={cn("max-w-2xl mx-auto text-center mb-16", visible && "animate-fade-in-up")}>
          <p className="text-sm font-medium text-[var(--lp-blue)] tracking-wide uppercase mb-3">
            How placement works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-graphite)]">
            From product to pin
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Your product, placed naturally in curated lifestyle content.
          </p>
        </div>

        {/* Product to Pin transformation */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-center max-w-4xl mx-auto mb-16">
          {/* Left: Product card */}
          <div className={cn("rounded-2xl border border-gray-200 bg-white p-6 shadow-sm", visible && "animate-slide-in-left animation-delay-200")}>
            <div className="rounded-xl overflow-hidden mb-4 bg-[#F2F2F2]">
              <img
                src="/images/orangelamp.png"
                alt="Orange mushroom lamp — product shot"
                width={400}
                height={400}
                loading="lazy"
                className="w-full h-64 object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Product</p>
            <h4 className="text-lg font-semibold text-[var(--lp-graphite)]">Mushroom Table Lamp</h4>
            <p className="text-sm text-gray-500 mt-1">$89.00</p>
          </div>

          {/* Center: Arrow */}
          <div className={cn("flex flex-col items-center gap-2 py-4", visible && "animate-fade-in animation-delay-400")}>
            <div className="flex items-center gap-2 text-[var(--lp-blue)] animate-arrow-slide">
              <ArrowRight className="size-6" />
            </div>
            <p className="text-xs font-medium text-gray-400 whitespace-nowrap">Place as pin</p>
          </div>

          {/* Right: Pin result */}
          <div className={cn(visible && "animate-slide-in-right animation-delay-200")}>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src="/images/result.png"
                alt="Orange mushroom lamp in styled interior — pin preview"
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-72 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-sm font-medium text-[var(--lp-graphite)]">
                  Retro mushroom lamp for your living room
                </p>
                <p className="text-xs text-gray-400 mt-1">scatter.so</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className={cn("grid grid-cols-3 gap-4 max-w-xl mx-auto", visible && "animate-fade-in-up animation-delay-500")}>
          <Metric icon={Eye} target={45200} suffix="" label="Impressions" />
          <Metric icon={Bookmark} target={1200} suffix="" label="Saves" />
          <Metric icon={TrendingUp} target={3} suffix=".8%" label="Engagement" />
        </div>
      </div>
    </section>
  )
}
