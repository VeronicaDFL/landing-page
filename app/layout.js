import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Veronica De Felice: Landing Page',
  description: 'Connecting Links related to my Profile, all in one page: Linkedin,GitHub,Portfolio,Contact',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
