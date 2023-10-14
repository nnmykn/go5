import './globals.css'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Go5 Lab. | 🧪Researching ways to make life more convenient through generative AI and automation.',
  description: '🧪Researching ways to make life more convenient through generative AI and automation.',
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
