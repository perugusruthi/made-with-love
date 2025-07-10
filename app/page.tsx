import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Fixed Navbar */}
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

      {/* Main Content */}
      <section className="text-center py-32 px-6"> {/* push down to avoid navbar overlap */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/madewithlove.png"
            alt="CookBook Logo"
            width={80}
            height={80}
            className="mb-2"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Cooking Made Easy</h1>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover delicious recipes crafted by your teammates, or share your own culinary creations.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/recipes">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-500 transition">
              Browse Recipes
            </button>
          </Link>

          <Link href="/submit">
            <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full font-medium hover:bg-pink-50 transition">
              Share a Recipe
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
