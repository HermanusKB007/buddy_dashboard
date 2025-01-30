import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google"
import { Inter } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })
const proximaLike = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Coming Soon",
  description: "Something exciting is coming soon!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}