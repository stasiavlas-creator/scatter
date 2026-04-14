export function Footer() {
  return (
    <footer className="border-t border-[var(--lp-gray-mid)] bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              How it works
            </a>
            <a href="#audience" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Audience
            </a>
            <a href="#formats" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Formats
            </a>
            <a href="mailto:hello@pinscaler.com" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Pinscaler
          </p>

          {/* Text logo */}
          <a href="#" className="text-sm font-bold tracking-tight text-[var(--lp-graphite)]">
            Pinscaler
          </a>
        </div>
      </div>
    </footer>
  )
}
