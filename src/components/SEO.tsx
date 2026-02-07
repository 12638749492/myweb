import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: object | object[];
}

export function SEO({
  title,
  description,
  keywords,
  image = 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=630&fit=crop',
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  schema
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | VisionCut – Creative Digital Marketing Agency`;

    // Helper to update or create meta tag
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    updateMeta('author', author || 'VisionCut');

    // Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', type, true);
    updateMeta('og:image', image, true);
    if (url) updateMeta('og:url', url, true);
    updateMeta('og:site_name', 'VisionCut', true);
    updateMeta('og:locale', 'en_IN', true);

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    updateMeta('twitter:site', '@visioncut');

    // Article specific meta
    if (type === 'article') {
      if (publishedTime) updateMeta('article:published_time', publishedTime, true);
      if (modifiedTime) updateMeta('article:modified_time', modifiedTime, true);
      if (author) updateMeta('article:author', author, true);
    }

    // Schema.org structured data
    if (schema) {
      // Remove existing schema scripts
      document.querySelectorAll('script[data-schema="true"]').forEach(el => el.remove());

      // Add new schema(s)
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'true');
        script.setAttribute('data-schema-index', index.toString());
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }

    // Cleanup on unmount
    return () => {
      document.querySelectorAll('script[data-schema="true"]').forEach(el => el.remove());
    };
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, schema]);

  return null;
}

// Schema generators
export const schemas = {
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VisionCut',
    alternateName: 'VisionCut Creative Agency',
    url: 'https://visioncut.com',
    logo: 'https://visioncut.com/logo.png',
    description: 'Creative Digital Marketing Agency in Karnataka, India. We Design. We Market. We Grow Brands.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Karnataka',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98765-43210',
      contactType: 'customer service',
      availableLanguage: ['English', 'Kannada']
    },
    sameAs: [
      'https://instagram.com/visioncut.2025',
      'https://twitter.com/visioncut',
      'https://linkedin.com/company/visioncut'
    ]
  }),

  localBusiness: () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://visioncut.com/#localbusiness',
    name: 'VisionCut',
    image: 'https://visioncut.com/logo.png',
    description: 'Creative Digital Marketing Agency in Karnataka, India specializing in graphic design, video editing, SEO, and digital marketing.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Karnataka',
      addressCountry: 'India'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '15.3173',
      longitude: '75.7139'
    },
    telephone: '+91-98765-43210',
    email: 'hello@visioncut.com',
    url: 'https://visioncut.com',
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00'
    }
  }),

  aggregateRating: (rating: number, reviewCount: number) => ({
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'VisionCut',
      image: 'https://visioncut.com/logo.png'
    },
    ratingValue: rating.toFixed(1),
    bestRating: '5',
    worstRating: '1',
    ratingCount: reviewCount
  }),

  review: (review: {
    name: string;
    rating: number;
    review: string;
    company: string;
    date?: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'VisionCut'
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
      worstRating: '1'
    },
    author: {
      '@type': 'Person',
      name: review.name
    },
    reviewBody: review.review,
    datePublished: review.date || new Date().toISOString().split('T')[0],
    publisher: {
      '@type': 'Organization',
      name: review.company
    }
  }),

  blogPosting: (blog: {
    title: string;
    description: string;
    image: string;
    authorName: string;
    publishedDate: string;
    modifiedDate?: string;
    url: string;
    content?: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    author: {
      '@type': 'Person',
      name: blog.authorName
    },
    publisher: {
      '@type': 'Organization',
      name: 'VisionCut',
      logo: {
        '@type': 'ImageObject',
        url: 'https://visioncut.com/logo.png'
      }
    },
    datePublished: blog.publishedDate,
    dateModified: blog.modifiedDate || blog.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': blog.url
    }
  }),

  person: (author: {
    name: string;
    bio: string;
    image: string;
    url: string;
    social?: { instagram?: string; twitter?: string; linkedin?: string };
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    description: author.bio,
    image: author.image,
    url: author.url,
    sameAs: [
      author.social?.instagram ? `https://instagram.com/${author.social.instagram}` : null,
      author.social?.twitter ? `https://twitter.com/${author.social.twitter}` : null,
      author.social?.linkedin ? `https://linkedin.com/in/${author.social.linkedin}` : null
    ].filter(Boolean)
  }),

  service: (service: {
    name: string;
    description: string;
    url: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'VisionCut'
    },
    url: service.url,
    areaServed: {
      '@type': 'Country',
      name: 'India'
    }
  }),

  webPage: (page: {
    title: string;
    description: string;
    url: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'VisionCut',
      url: 'https://visioncut.com'
    }
  }),

  breadcrumb: (items: { name: string; url: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }),

  faqPage: (faqs: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  })
};
