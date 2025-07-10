
import Link from 'next/link'
import Image from 'next/image'

export default async function Navbar() {
  return (
   <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/made_with_love.png"
            alt="CookBook Logo"
            width={40}
            height={40}
          />
          <div className="flex items-center space-x-0">
            <span className="font-bold text-xl text-pink-600">Made</span>
            <span className="font-bold text-xl text-red-600">with</span>
            <span className="font-bold text-xl text-pink-600">Love</span>
          </div>


        </div>

        <div className="flex items-center space-x-6">
          <Link href="/recipes" className="text-gray-700 hover:text-pink-600 font-medium">
            <span className="inline-block h-12 leading-[3rem]">Recipes</span>
          </Link>
          <Link href="/articles" className="text-gray-700 hover:text-pink-600 font-medium">
            <span className="inline-block h-12 leading-[3rem]">Articles</span>
          </Link>
          <Link href="/submit">
            <button className="bg-pink-600 text-white px-4 h-12 rounded-full font-medium hover:bg-pink-500 transition">
              Share a Recipe
            </button>
          </Link>
        </div>
      </nav>
  );
}
