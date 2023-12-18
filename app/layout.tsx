import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Slothpixel',
  description: 'Open source Hypixel data platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
