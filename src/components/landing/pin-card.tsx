import { cn } from "@/lib/utils"

const sizeMap = {
  sm: { width: 144, height: 192 },
  md: { width: 192, height: 256 },
  lg: { width: 240, height: 320 },
}

export function PinCard({
  imageUrl,
  title,
  size = "md",
  className,
}: {
  imageUrl: string
  title?: string
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const dims = sizeMap[size]
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group",
        className
      )}
      style={{ width: dims.width }}
    >
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title || "Pin preview"}
          width={dims.width}
          height={dims.height}
          loading="lazy"
          className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          style={{ height: dims.height }}
        />
        {title && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
            <p className="text-white text-sm font-medium leading-snug">{title}</p>
          </div>
        )}
      </div>
    </div>
  )
}
