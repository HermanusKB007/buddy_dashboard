import { Space_Grotesk } from "next/font/google"
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-lg">
        <h1 className={`text-4xl md:text-6xl font-bold text-slate-800 mb-6 ${spaceGrotesk.className}`}>
          Access Restricted
        </h1>

        <p className="text-xl text-slate-600 mb-8">
          This service is currently only available in South Africa.
        </p>

        <Link
          href="https://hermanblackie.wixsite.com/buddy"
          className={`
            inline-block
            px-6 py-2 
            bg-yellow-400 
            text-black 
            border-2 
            border-black 
            rounded-lg 
            ${spaceGrotesk.className}
            font-medium
            transition-all
            hover:bg-black 
            hover:text-yellow-400
            hover:border-yellow-400
          `}
        >
          Learn More About Buddy
        </Link>
      </div>
    </div>
  )
}