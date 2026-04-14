"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { Search, Clock, ShoppingBag, TrendingUp, DollarSign, Target } from "lucide-react"
import { cn } from "@/lib/utils"

const reasons = [
  {
    icon: ShoppingBag,
    title: "90% of users are in shopping mode",
    description:
      "Unlike social media where users scroll passively, Pinterest users actively search for products and ideas. 88% have purchased something they discovered on the platform.",
    stat: "88%",
    statLabel: "purchase rate",
    color: "#ED6C43",
  },
  {
    icon: Search,
    title: "96% of searches are unbranded",
    description:
      "Users search for ideas, not brands. They look for 'modern table lamp' — not a specific store. Your products appear exactly when intent is highest.",
    stat: "96%",
    statLabel: "unbranded searches",
    color: "#BEB050",
  },
  {
    icon: Clock,
    title: "Pins live for months, not hours",
    description:
      "An Instagram post dies in 48 hours. A TikTok in minutes. A Pinterest pin drives traffic for 3-6 months — some pins generate clicks over a year later. 1,680x longer lifespan than a Facebook post.",
    stat: "6 mo",
    statLabel: "average pin lifespan",
    color: "#d4c46a",
  },
  {
    icon: Target,
    title: "80% of traffic is new to your brand",
    description:
      "Pinterest sends visitors who have never seen your brand before. It's a discovery engine, not a follower feed — perfect for reaching untapped audiences.",
    stat: "80%",
    statLabel: "new visitors",
    color: "#ED6C43",
  },
  {
    icon: DollarSign,
    title: "2x higher spend per shopper",
    description:
      "Pinterest users spend twice as much per month compared to shoppers on other platforms. High intent leads to high-value customers.",
    stat: "2x",
    statLabel: "spend vs other platforms",
    color: "#BEB050",
  },
  {
    icon: TrendingUp,
    title: "32% higher ROAS than other channels",
    description:
      "Pinterest delivers 32% higher return on ad spend. Organic placement through our network amplifies this even further — zero ad budget required.",
    stat: "32%",
    statLabel: "higher ROAS",
    color: "#d4c46a",
  },
]

export function WhyPinterest() {
  const { ref, visible } = useScrollAnimation()

  return (
    <section className="py-24 lg:py-32 bg-[var(--lp-gray)] relative overflow-hidden" ref={ref}>
      {/* Floating pins */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-[2%] top-[8%] opacity-[0.3] hidden lg:block animate-float-bob" style={{ animationDelay: "0.4s" }}>
          <img src="/images/pins/pin10.png" alt="" className="w-24 h-32 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
        <div className="absolute left-[1%] bottom-[10%] opacity-[0.35] hidden lg:block animate-float-bob-alt" style={{ animationDelay: "1.6s" }}>
          <img src="/images/pins/pin4.png" alt="" className="w-28 h-36 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <SectionHeader
          tag="Why Pinterest"
          title="The highest-intent platform for e-commerce"
          subtitle="Pinterest isn't social media — it's a visual search engine where users come ready to buy."
          visible={visible}
          tagColor="#ED6C43"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={cn(
                "group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                visible && "animate-fade-in-up"
              )}
              style={{ animationDelay: visible ? `${0.1 + i * 0.1}s` : undefined }}
            >
              {/* Icon + stat row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
                  style={{ backgroundColor: r.color + "15" }}
                >
                  <r.icon className="size-5" style={{ color: r.color }} />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-[var(--lp-graphite)]">{r.stat}</span>
                  <p className="text-xs text-gray-400">{r.statLabel}</p>
                </div>
              </div>

              <h3 className="text-base font-semibold text-[var(--lp-graphite)] mb-2 leading-snug">
                {r.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={cn("mt-14 text-center", visible && "animate-fade-in-up animation-delay-700")}>
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white border border-gray-100 px-6 py-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--lp-green)]/15">
              <Clock className="size-5 text-[var(--lp-olive)]" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[var(--lp-graphite)]">
                Start with a free 7-day placement
              </p>
              <p className="text-xs text-gray-400">
                See the results before committing to a paid package
              </p>
            </div>
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-xl text-sm font-medium bg-[var(--lp-coral)] hover:bg-[var(--lp-coral-dark)] text-white h-9 px-4 transition-all ml-2"
            >
              Try free
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
