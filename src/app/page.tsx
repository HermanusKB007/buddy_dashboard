import Image from 'next/image'
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const proximaLike = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation - make it responsive */}
      <nav className="p-4 md:p-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and text - stack on mobile */}
        <div className="flex items-center gap-4 ml-0 md:ml-20 mb-4 md:mb-0">
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

        {/* Button - same width on mobile and desktop */}
<div className="flex-1 flex justify-center md:justify-end md:mr-20 mt-6 md:mt-0">
  <a
    href="https://hermanblackie.wixsite.com/buddy"
    target="_blank"
    rel="noopener noreferrer"
    className={`
      px-6 py-2 
      bg-yellow-500 
      text-black 
      border-2 
      border-black 
      rounded-lg 
      ${spaceGrotesk.className}
      font-medium
      transition-all
      hover:bg-black 
      hover:text-yellow-500
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
    </div>
  )
}