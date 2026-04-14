"use client"

import { useParallax } from "@/hooks/use-parallax"
import { PinCard } from "./pin-card"
import { cn } from "@/lib/utils"

interface FloatingPin {
  imageUrl: string
  title?: string
  x: string
  y: string
  size: "sm" | "md" | "lg"
  delay?: string
  variant?: "bob" | "bob-alt"
  opacity?: number
}

export function FloatingPins({
  pins,
  className,
}: {
  pins: FloatingPin[]
  className?: string
}) {
  const { ref, offset } = useParallax(0.08)

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      aria-hidden
      style={{ transform: `translateY(${offset}px)` }}
    >
      {pins.map((pin, i) => (
        <div
          key={i}
          className={cn(
            "absolute hidden lg:block",
            pin.variant === "bob-alt" ? "animate-float-bob-alt" : "animate-float-bob"
          )}
          style={{
            left: pin.x,
            top: pin.y,
            opacity: pin.opacity ?? 0.5,
            animationDelay: pin.delay ?? `${i * 0.5}s`,
          }}
        >
          <PinCard imageUrl={pin.imageUrl} title={pin.title} size={pin.size} />
        </div>
      ))}
    </div>
  )
}
