import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://insaflimited.com'
  const currentDate = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experts`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // আপনার 20টি Blog Posts
  const blogSlugs = [
    'pile-foundation-construction-guide-bangladesh',
    'piling-machine-types-cost-estimation-bangladesh',
    'soil-test-importance-cost-bangladesh',
    'spt-test-standard-penetration-test-bangladesh',
    'building-layout-marking-process-rules-bangladesh',
    'rcc-casting-preparation-checklist-bangladesh',
    '10-storey-building-design-cost-bangladesh-2026',
    'modern-architecture-design-insaf-building-design',
    'new-house-construction-rules-rajuk-plan-pass-guide',
    'commercial-space-shop-buying-guide-jatrabari-dhaka',
    'premium-architectural-design-project-value-increase',
    'minimalist-house-design-small-plot-luxury',
    '3d-architectural-visualization-day-night-rendering',
    'commercial-building-exterior-facade-design-trends-2026',
    'drone-aerial-view-master-planning-residential-project',
    'duplex-house-floor-plan-interior-design-guide-2026',
    'joint-family-house-design-space-optimization',
    'natural-light-ventilation-eco-friendly-house-design',
    'rooftop-garden-design-urban-green-building',
    'smart-materials-premium-finishing-modern-building-2026',
  ]

  const blogPosts: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [...staticPages, ...blogPosts]
}