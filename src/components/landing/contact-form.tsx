"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdNVgD_rkBnd0I8EKIpw2fdPpKHSuPZJ67qCkguoqqazZBq1A/formResponse"

const ENTRY_IDS = {
  name: "entry.1316750978",
  email: "entry.218384712",
  productUrl: "entry.1061708772",
  message: "entry.713593944",
}

const btnBase =
  "inline-flex shrink-0 items-center justify-center rounded-xl text-sm font-medium whitespace-nowrap transition-all select-none active:translate-y-px"

export function ContactForm() {
  const { ref, visible } = useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData()
    data.append(ENTRY_IDS.name, (form.elements.namedItem("name") as HTMLInputElement).value)
    data.append(ENTRY_IDS.email, (form.elements.namedItem("email") as HTMLInputElement).value)
    data.append(ENTRY_IDS.productUrl, (form.elements.namedItem("product_url") as HTMLInputElement).value)
    data.append(ENTRY_IDS.message, (form.elements.namedItem("message") as HTMLTextAreaElement).value)

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      })
    } catch {
      // Google Forms returns opaque response with no-cors, submission still works
    }

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          tag="Get started"
          title="Request a placement"
          subtitle="Fill out the form and we'll get back to you within 24 hours."
          visible={visible}
          tagColor="#ED6C43"
        />

        <div className={cn("max-w-xl mx-auto", visible && "animate-fade-in-up animation-delay-200")}>
          {submitted ? (
            <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--lp-green)]/15 mx-auto mb-5">
                <CheckCircle className="size-7 text-[var(--lp-olive)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--lp-graphite)] mb-2">
                Request received
              </h3>
              <p className="text-gray-500">
                We'll review your request and reach out within 24 hours to discuss your free 7-day trial placement.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm space-y-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--lp-graphite)] mb-1.5">
                  Name <span className="text-[var(--lp-coral)]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-[var(--lp-graphite)] placeholder:text-gray-400 outline-none focus:border-[var(--lp-coral)] focus:ring-2 focus:ring-[var(--lp-coral)]/10 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--lp-graphite)] mb-1.5">
                  Email <span className="text-[var(--lp-coral)]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-[var(--lp-graphite)] placeholder:text-gray-400 outline-none focus:border-[var(--lp-coral)] focus:ring-2 focus:ring-[var(--lp-coral)]/10 transition-all"
                />
              </div>

              {/* Product URL (optional) */}
              <div>
                <label htmlFor="product_url" className="block text-sm font-medium text-[var(--lp-graphite)] mb-1.5">
                  Product URL <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  id="product_url"
                  name="product_url"
                  type="url"
                  placeholder="https://yourstore.com/product"
                  className="w-full h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-[var(--lp-graphite)] placeholder:text-gray-400 outline-none focus:border-[var(--lp-coral)] focus:ring-2 focus:ring-[var(--lp-coral)]/10 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--lp-graphite)] mb-1.5">
                  Message <span className="text-[var(--lp-coral)]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your brand and goals..."
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[var(--lp-graphite)] placeholder:text-gray-400 outline-none focus:border-[var(--lp-coral)] focus:ring-2 focus:ring-[var(--lp-coral)]/10 transition-all resize-none"
                />
              </div>

              {/* Consent */}
              <p className="text-xs text-gray-400">
                By submitting this form, you agree to our{" "}
                <a href="/terms" className="underline hover:text-gray-600">Terms & Conditions</a>
                {" "}and{" "}
                <a href="/cookies" className="underline hover:text-gray-600">Cookies Policy</a>.
                We only use your data to respond to your request.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  btnBase,
                  "w-full h-12 text-base gap-2 bg-[var(--lp-coral)] hover:bg-[var(--lp-coral-dark)] text-white shadow-lg shadow-[var(--lp-coral)]/20 disabled:opacity-60"
                )}
              >
                {loading ? "Sending..." : "Request placement"}
                {!loading && <Send className="size-4" />}
              </button>

              {/* Free trial reminder */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--lp-olive)] text-white text-xs font-bold">7</span>
                <span className="text-sm text-gray-500">Includes free 7-day trial placement</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
