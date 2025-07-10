import { type SchemaTypeDefinition } from 'sanity'
import recipe from './recipe'
import category from './category'
import article from './article'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recipe, category, article],
}
