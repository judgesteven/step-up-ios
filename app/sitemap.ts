import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://stepup.gamelayer.io').replace(/\/$/, '')
  const today = new Date().toISOString().split('T')[0]

  return [
    {
      url: `${siteUrl}/`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}

