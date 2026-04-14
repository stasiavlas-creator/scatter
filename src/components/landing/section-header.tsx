import { cn } from "@/lib/utils"

export function SectionHeader({
  tag,
  title,
  subtitle,
  visible,
  tagColor,
}: {
  tag: string
  title: string
  subtitle: string
  visible: boolean
  tagColor?: string
}) {
  return (
    <div className={cn("max-w-2xl mx-auto text-center mb-16 lg:mb-20", visible && "animate-fade-in-up")}>
      <p
        className="text-sm font-medium tracking-wide uppercase mb-3"
        style={{ color: tagColor || "var(--lp-coral)" }}
      >
        {tag}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--lp-graphite)]">
        {title}
      </h2>
      <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
    </div>
  )
}
