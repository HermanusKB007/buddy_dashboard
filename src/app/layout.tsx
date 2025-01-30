import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://mybuddy.co.za'),
  title: "Buddy - Simplified Business Automation",
  description: "Buddy helps business owners automate tasks and streamline operations using WhatsApp, giving you more time to focus on growth and customer satisfaction.",

  // Basic metadata
  applicationName: 'Buddy',
  authors: [{ name: 'Buddy' }],
  generator: 'Next.js',
  keywords: ['Business Automation', 'WhatsApp Business', 'Task Automation', 'Business Efficiency'],

  // OpenGraph metadata
  openGraph: {
    type: 'website',
    title: "Buddy | Simplified Business Automation",
    description: "Buddy helps business owners automate tasks and streamline operations using WhatsApp, giving you more time to focus on growth and customer satisfaction.",
    siteName: "Buddy",
    url: 'https://mybuddy.co.za',
    locale: 'en_ZA',
    images: [{
      url: '/Buddy_banner.png',
      width: 1200,
      height: 630,
      alt: 'Buddy | Simplified Business Automation',
    }],
  },

  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: "Buddy | Simplified Business Automation",
    description: "Buddy helps business owners automate tasks and streamline operations using WhatsApp, giving you more time to focus on growth and customer satisfaction.",
    images: [{
      url: '/Buddy_banner.png',
      width: 1200,
      height: 630,
      alt: 'Buddy | Simplified Business Automation',
    }],
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-touch-icon.png'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Buddy | Simplified Business Automation</title>
        {/* Force favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Force OpenGraph image */}
        <meta property="og:image" content="https://mybuddy.co.za/Buddy_banner.png" />
        {/* Force Twitter image */}
        <meta name="twitter:image" content="https://mybuddy.co.za/Buddy_banner.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}