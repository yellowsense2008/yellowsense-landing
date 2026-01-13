import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css"

export const metadata: Metadata = {
  title: "Yellowsense Technologies - Deep Tech & Industrial Security",
  description:
    "Yellowsense Technologies delivers AI-powered solutions for fraud detection, industrial fault detection, and cybersecurity to protect and optimize your operations.",
  icons: {
    icon: '/assets/logo.jpeg',
    shortcut: '/assets/logo.jpeg',
    apple: '/assets/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/assets/logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/assets/logo.jpeg" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
