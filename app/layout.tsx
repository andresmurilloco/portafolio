import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Header } from './components'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dev. Andrés Murillo',
  description: 'Portafolio front-den dev Andrés Murillo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} container`}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
