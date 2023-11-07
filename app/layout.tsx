import '@/app/ui/global.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { inter } from './ui/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`antialiased ${inter.className}`}>{children}</body>
    </html>
  )
}
