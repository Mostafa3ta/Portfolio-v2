import type { MetadataRoute } from 'next'
import { SITE } from '@/constant/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: SITE.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/work/elevent`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
