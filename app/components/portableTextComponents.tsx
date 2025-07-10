import type { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'

export const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="my-6">
          {value?.asset?._ref ? (
            <Image
              src={`https://cdn.sanity.io/images/YOUR_PROJECT_ID/production/${value.asset._ref
                .split('-')
                .slice(1)
                .join('-')
                .replace(/-(jpg|png|webp|gif)$/, '.$1')}`}
              alt={value.alt || ''}
              width={800}
              height={500}
              className="rounded-lg object-cover"
            />
          ) : null}
        </div>
      )
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="leading-relaxed text-gray-800">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
}
