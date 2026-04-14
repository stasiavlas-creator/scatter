export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="2" y="4" width="12" height="12" rx="3" fill="#ED6C43" />
      <rect x="16" y="1" width="10" height="10" rx="3" fill="#BEB050" />
      <rect x="6" y="18" width="10" height="10" rx="3" fill="#BEB050" />
      <rect x="18" y="14" width="12" height="12" rx="3" fill="#D5D5D5" />
    </svg>
  )
}
