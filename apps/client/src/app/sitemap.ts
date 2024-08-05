import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   return [
      {
         url: `https://ejresume.com`,
         lastModified: new Date(),
      },
   ];
}
