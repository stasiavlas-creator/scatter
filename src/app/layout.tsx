import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pinscaler — Scale Your Reach on Pinterest',
  description: 'Scalable Pinterest growth through curated content placement. 2M+ daily impressions across 132 accounts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
