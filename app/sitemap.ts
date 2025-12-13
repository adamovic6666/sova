import { MetadataRoute } from 'next'
import { OurWorkData } from './_data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sova.ooo'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-notice`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamic portfolio pages
  const portfolioPages: MetadataRoute.Sitemap = OurWorkData.map((item) => ({
    url: `${baseUrl}/our-work/${item.link}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...portfolioPages]
}
