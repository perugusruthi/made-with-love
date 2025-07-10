import { RECIPES_QUERYResult } from '../../sanity/types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export function RecipeCard(props: RECIPES_QUERYResult[0]) {
  const { title, author, mainImage, publishedAt, categories } = props

  return (
    <Link href={`/recipes/${props.slug?.current}`} className="group">
      <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">
        {mainImage && (
          <Image
            src={urlFor(mainImage).width(600).height(400).url()}
            alt={mainImage.alt || title || ''}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-slate-800 group-hover:text-pink-600 transition-colors mb-2">
            {title}
          </h2>
          <div className="text-sm text-gray-600 flex flex-col">
            <span>🍽️ {props.servings}</span>
            <span>⏱️ {props.time}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}