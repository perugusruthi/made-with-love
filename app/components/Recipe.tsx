import { RECIPES_QUERYResult } from '../../sanity/types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { Title } from './Title'
import { components } from './portableTextComponents'

export function Recipe(props: NonNullable<RECIPES_QUERYResult[0]>) {
  const {
    title,
    mainImage,
    finalImages,
    description,
    servings,
    time,
    difficulty,
    ingredients,
    steps,
  } = props

  return (
    <article className="grid lg:grid-cols-12 gap-y-12 gap-x-8">
      {/* Header */}
      <header className="lg:col-span-12 flex flex-col gap-4 items-start">
       
        <Title>{title}</Title>
        <p className="text-gray-600">{description}</p>
      </header>

      {/* Image */}
      {mainImage && (
        <figure className="lg:col-span-5">
          <Image
            src={urlFor(mainImage).width(600).height(400).url()}
            width={600}
            height={400}
            alt={mainImage?.alt || title || ''}
            className="rounded-lg object-cover"
          />
        </figure>
      )}

      {/* Meta Info */}
      <section className="lg:col-span-7 flex flex-col gap-4 text-sm text-gray-700">
        <p>🍽️ <strong>Servings:</strong> {servings}</p>
        <p>⏱️ <strong>Time:</strong> {time}</p>
        <p>⭐ <strong>Difficulty:</strong> {difficulty}</p>
      </section>

      {/* Ingredients */}
      {ingredients && (
        <section className="lg:col-span-12">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1">
            {ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Steps */}
      {steps && (
        <section className="lg:col-span-12">
          <h2 className="text-xl font-semibold mb-2">Let's Cook</h2>
          <PortableText value={steps} components={components} />
        </section>
      )}

      {/* Final Images */}
      {finalImages?.length > 0 && (
        <section className="lg:col-span-12 grid sm:grid-cols-2 gap-6 mt-6">
          {finalImages.map((img, i) => (
            <Image
              key={img._key || i}
              src={urlFor(img).width(600).height(400).url()}
              width={600}
              height={400}
              alt={`Final Image ${i + 1}`}
              className="rounded-lg object-cover"
            />
          ))}
        </section>
      )}
    </article>
  )
}
