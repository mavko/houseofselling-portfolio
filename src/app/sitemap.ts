import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sebastianselling.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'yearly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/artifacts`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    {
      url: `${base}/artifacts/makings-of-ispect`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/artifacts/makings-of-icontrol`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: `${base}/cursor`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/visuals`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/essentials`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
