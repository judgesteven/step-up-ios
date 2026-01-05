import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Step-Up — Make walking a team sport',
  description: 'Community step challenges powered by GameLayer. Join squads, complete daily missions, earn rewards, and build streaks together.',
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
