import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const geist = Geist({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Azure Stay Hotel & PG | Comfortable Stays in Prime Location",
  description:
    "Experience comfortable stays at Azure Stay Hotel & PG. Affordable luxury accommodation for tourists, professionals, and students. Clean rooms, WiFi, security, and more amenities in prime city location.",
  keywords:
    "hotel, PG, paying guest, accommodation, Mumbai hotel, affordable hotel, student accommodation, professional stays",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${playfair.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
