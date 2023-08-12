import './globals.css'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Go5 Lab. | 🧪We are an organization that develops a variety of web applications.',
  description: '🧪We are an organization that develops a variety of web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
