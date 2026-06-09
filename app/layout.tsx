import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Response Decision Tree Generator',
  description: 'Generate interactive decision trees from incident postmortems for faster future incident response.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2a309724-778a-47e8-87ec-39d98ecfdb86"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
