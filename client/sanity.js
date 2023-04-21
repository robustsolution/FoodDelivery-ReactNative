import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'npcegap4',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',


})
const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;