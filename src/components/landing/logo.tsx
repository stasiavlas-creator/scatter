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
      {/* Pin shape */}
      <rect x="2" y="8" width="14" height="18" rx="4" fill="#ED6C43" />
      <rect x="5" y="11" width="8" height="8" rx="2" fill="white" fillOpacity="0.3" />
      {/* Upward scaling arrow */}
      <path d="M22 24 L22 10 L18 14" stroke="#BEB050" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 10 L26 14" stroke="#BEB050" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Accent dot */}
      <circle cx="28" cy="6" r="3" fill="#d4c46a" />
    </svg>
  )
}
