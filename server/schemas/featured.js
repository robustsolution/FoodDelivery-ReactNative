import { defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Resturants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Resturant name',
      validation: rule=> rule.required(),
   },
   {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: rule=> rule.max(200),
   },
   {
      name: 'resturants',
      type: 'array',
      title: 'Resturants',
      of: [{type: 'reference', to: [{type: 'resturant'}]}]
   }
  ],
})
