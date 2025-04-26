import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code2Grade',
  description: 'Created with Code2Grade',
  generator: 'Code2Grade',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">        
      <body>{children}</body>
    </html>
  )
}
