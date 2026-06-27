import type { MetadataRoute } from 'next'

const SITE_URL = 'https://blueskyfinancialservices.co.za'

const PAGES = ['/', '/privacy-policy', '/terms-and-conditions']

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))
}
