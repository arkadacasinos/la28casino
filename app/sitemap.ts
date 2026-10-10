import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://la28casino.vercel.app/',
      lastModified: new Date('2026-10-11'),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
