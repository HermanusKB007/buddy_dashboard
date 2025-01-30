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
        url: "/Buddy_banner.png",
        width: 1200,
        height: 630,
        alt: "Buddy | Simplified Business Automation",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddy | Simplified Business Automation",
    description: "Buddy helps business owners automate tasks and streamline operations using WhatsApp, giving you more time to focus on growth and customer satisfaction.",
    images: ["/Buddy_banner.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}