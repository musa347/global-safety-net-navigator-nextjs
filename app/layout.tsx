import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Global Safety Net Navigator | Income Protection Information',
  description: 'Explore publicly available income-protection information for cancelled contracts and income disruption. Find official policy sources and next steps.',
  keywords: ['income protection', 'freelancer insurance', 'contract cancellation', 'variable income', 'remote work'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F9FF] text-[#2D3E50]">
        <Header />
        <main className="w-full pt-[124px] min-w-[1024px] max-w-[1440px] mx-auto px-8 md:px-12 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
