// import {defineField, defineType} from 'sanity'

export default {
  name: 'resturant',
  title: 'Resturants',
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
      name: 'image',
      type: 'image',
      title: 'image of the resturant',
   },
   {
      name: 'lat',
      type: 'number',
      title: 'latitude of the resturant',
   },
   {
      name: 'lng',
      type: 'number',
      title: 'longitude of the resturant',
   },
   {
      name: 'address',
      type: 'string',
      title: 'Resturant address',
      validation: rule=> rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a number between 1 to 5',
      validation: rule=>rule.required().min(1).max(5).error('Please enter a value between 1 to 5')
    },
    {
      name: 'reviews',
      type: 'string',
      title: 'Reviews'
    },
    {
      name: 'type',
      title: 'Category',
      validation: rule=> rule.required(),
      type: 'reference',
      to: [{type: 'category'}]
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}]
    }
  ]
}
