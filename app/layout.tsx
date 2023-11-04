import '@/app/ui/global.css'
import { ReactNode } from 'react'
import { inter } from './ui/fonts'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`antialiased ${inter.className}`}>{children}</body>
    </html>
  )
}
