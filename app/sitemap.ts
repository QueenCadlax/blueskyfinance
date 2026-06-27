import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.blueskyfinance.co.za/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.blueskyfinance.co.za/privacy-policy',
      lastModified: new Date(),
    },
    {
      url: 'https://www.blueskyfinance.co.za/terms-and-conditions',
      lastModified: new Date(),
    },
  ]
}
