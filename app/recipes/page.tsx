

import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { RECIPES_QUERY } from '@/sanity/lib/queries'
import { RecipeCard } from '../components/RecipeCard'
import { Title } from '../components/Title'


export default async function RecipesPage() {
  const {data: recipes} = await sanityFetch({query: RECIPES_QUERY});

  return (
    <main className="container mx-auto px-6 py-12">
      <Title>All Recipes</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} {...recipe} />
        ))}
      </div>
      {/* 👇 Inject real-time updates */}
      <SanityLive />
    </main>
  )
}