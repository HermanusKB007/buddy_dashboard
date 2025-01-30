import Image from 'next/image'
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const proximaLike = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function Home() {
  return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Navigation */}
        <nav className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-4 ml-20">
            <Image
                src="/buddy_logo.png"
                alt="Buddy Logo"
                width={50}
                height={50}
                className="object-contain"
            />
            <div className="flex flex-col justify-center">
              <span className={`text-xl font-semibold ${spaceGrotesk.className}`}>Buddy</span>
              <span className={`text-sm text-slate-600 ${proximaLike.className}`}>Simplified Business Automation</span>
            </div>
          </div>

          <div className="flex-1 flex justify-end mr-20"> {/* Added wrapper for positioning */}
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
                      hover:text-yellow-500
                      hover:border-yellow-500
                    `}
            >
              View Marketing Site
            </a>
          </div>
        </nav>

        {/* Rest of your content remains the same */}
        <main className="flex-1 flex flex-col items-center justify-center p-4 gap-8">
          <div className="max-w-2xl text-center space-y-6 pt-16">  {/* Added pt-16 for top padding */}
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800">
              Something exciting is Coming soon!
            </h1>
            <p className="text-xl text-slate-600">
              We&apos;re working hard to bring you an amazing new experience.
              Stay tuned!
            </p>
          </div>

          <div className="flex items-center justify-center w-full h-full">
            <div className="max-w-lg w-full">  {/* Changed from max-w-4xl to max-w-2xl */}
              <Image
                  src="/buddy_building.png"
                  alt="Coming Soon Illustration"
                  width={450}
                  height={450}
                  className="w-full h-auto object-contain"
                  priority
              />
            </div>
          </div>
        </main>
      </div>
  )
}