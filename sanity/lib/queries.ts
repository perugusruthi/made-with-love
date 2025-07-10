// lib/queries/recipes.ts
import { defineQuery } from 'next-sanity'

// ✅ Get all recipes (latest 12)
export const RECIPES_QUERY = defineQuery(`*[_type == "recipe" && defined(slug.current)] | order(_createdAt desc)[0...12] {
  _id,
  title,
  slug,
  description,
  difficulty,
  ingredients,
  mainImage,
  finalImages,
  servings,
  time,
  steps,
  publishedAt,
  "author": {
    "name": author.author,
    "team": author.team
  },
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  )
}`)

// ✅ Get only slugs for routing
export const RECIPE_SLUGS_QUERY = defineQuery(`*[_type == "recipe" && defined(slug.current)]{
  "slug": slug.current
}`)

// ✅ Get a single recipe by slug
export const RECIPE_QUERY = defineQuery(`*[_type == "recipe" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  difficulty,
  ingredients,
  mainImage,
  finalImages,
  servings,
  time,
  steps,
  publishedAt,
  "author": {
    "name": author.author,
    "team": author.team
  },
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  )
}`)
