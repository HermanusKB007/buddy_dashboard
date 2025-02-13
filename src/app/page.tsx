import Image from 'next/image'
import Link from 'next/link'
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const proximaLike = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="p-4 flex flex-col md:flex-row items-start md:items-center">
        <div className="flex items-center gap-4 ml-0 md:ml-20">
          <Image
            src="/buddy_logo.png"
            alt="Buddy Logo"
            width={50}
            height={50}
            className="object-contain w-[40px] md:w-[50px]"
          />
          <div className="flex flex-col justify-center">
            <span className={`text-lg md:text-xl font-semibold ${spaceGrotesk.className}`}>Buddy</span>
            <span className={`text-xs md:text-sm text-slate-600 ${proximaLike.className}`}>Simplified Business Automation</span>
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-end md:mr-20">
          <a
            href="https://hermanblackie.wixsite.com/buddy"
            target="_blank"
            rel="noopener noreferrer"
            className={`
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
              hover:border-yellow-500
              text-center
            `}
          >
            View Marketing Site
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-4 gap-8">
        <div className="max-w-2xl text-center space-y-6 pt-8 md:pt-16 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate-800">
            Something exciting is coming soon!
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            We&apos;re working hard to bring you an amazing new experience.
            Stay tuned!
          </p>

          <div className="md:hidden mt-6">
            <a
                href="https://hermanblackie.wixsite.com/buddy"
                target="_blank"
                rel="noopener noreferrer"
                className={`
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
          hover:border-yellow-500
          text-center
        `}
            >
              View Marketing Site
            </a>
          </div>
        </div>

        <div className="w-full max-w-sm md:max-w-lg aspect-square flex items-center justify-center">
          <Image
              src="/buddy_building.png"
              alt="Coming Soon Illustration"
              width={600}
              height={600}
              className="w-full h-auto object-contain px-4 md:px-0"
          />
        </div>
      </main>

      {/* Footer with Privacy Policy and Terms of Service */}
      <footer className="text-center p-4 text-gray-500 text-sm">
        <div className="flex justify-center space-x-4">
          <Link href="/privacy-policy" target="_blank" className="hover:underline">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms-of-service" target="_blank" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  )
}