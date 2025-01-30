import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://mybuddy.co.za'),
  title: "Buddy - Simplified Business Automation",
  description: "Buddy helps business owners automate tasks and streamline operations using WhatsApp, giving you more time to focus on growth and customer satisfaction.",
  openGraph: {
    title: "Buddy | Simplified Business Automation",
    description: "Buddy helps business owners automate tasks and streamline operations using WhatsApp, giving you more time to focus on growth and customer satisfaction.",
    url: "https://mybuddy.co.za",
    siteName: "Buddy",
    images: [
      {
        url: "/Buddy_banner.png", // Place this image in your public folder
        width: 1200,
        height: 630,
        alt: "Buddy | Simplified Business Automation",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}