import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'Put Your Sanity ID Here',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client);

// Suggested by GP
// export const getImageUrl = (image) => {
//   return builder.image(image).url();
// };

export const urlFor = (source) => builder.image(source);

export default client;
