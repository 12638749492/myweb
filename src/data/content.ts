export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: Author;
  featuredImage: string;
  readTime: number;
  views: number;
  publishedAt: string;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  expertise: string[];
  social: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Review {
  id: string;
  name: string;
  company: string;
  avatar: string;
  service: string;
  rating: number;
  review: string;
  featured: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  likes: number;
  caption: string;
  instagramUrl: string;
}

export const authors: Author[] = [
  {
    id: '1',
    name: 'VisionCut Team',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
    bio: 'The creative minds behind VisionCut. We are passionate about digital marketing, design, and helping brands grow in the digital space.',
    expertise: ['Digital Marketing', 'Graphic Design', 'SEO', 'Content Strategy'],
    social: {
      instagram: 'visioncut.2025',
      twitter: 'visioncut',
      linkedin: 'visioncut'
    }
  },
  {
    id: '2',
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    bio: 'Senior Content Strategist with 5+ years of experience in digital marketing and brand storytelling.',
    expertise: ['Content Strategy', 'Brand Storytelling', 'Social Media'],
    social: {
      instagram: 'priyasharma',
      linkedin: 'priyasharma'
    }
  }
];

export const blogs: Blog[] = [
  {
    id: '1',
    slug: 'how-to-create-viral-youtube-thumbnails',
    title: 'How to Create Viral YouTube Thumbnails That Get Clicks',
    excerpt: 'Learn the secrets behind creating YouTube thumbnails that dramatically increase your click-through rates and grow your channel.',
    content: `
# How to Create Viral YouTube Thumbnails That Get Clicks

Creating eye-catching thumbnails is one of the most crucial skills for any YouTube creator. A great thumbnail can be the difference between someone clicking on your video or scrolling past it.

## Why Thumbnails Matter

Your thumbnail is the first impression viewers have of your content. Studies show that **90% of the best-performing videos on YouTube have custom thumbnails**.

### Key Elements of a Viral Thumbnail

1. **Bold, Readable Text** - Use large fonts that are readable even on mobile devices
2. **Expressive Faces** - Emotions drive clicks. Show surprise, excitement, or curiosity
3. **Contrasting Colors** - Make your thumbnail pop against YouTube's white background
4. **Clear Subject** - Viewers should understand what your video is about instantly

## Best Practices

### Color Psychology
- **Red**: Creates urgency and excitement
- **Yellow**: Grabs attention and conveys happiness
- **Blue**: Builds trust and reliability

### Typography Tips
Use no more than 4-5 words in your thumbnail. The text should complement the image, not compete with it.

## Tools We Recommend

At VisionCut, we use:
- Adobe Photoshop for professional designs
- Canva for quick iterations
- Adobe Illustrator for vector elements

## Conclusion

Creating viral thumbnails is both an art and a science. Test different styles, analyze your analytics, and continuously improve.

**Need professional thumbnail designs? [Contact VisionCut](/contact) today!**
    `,
    category: 'Design Tips',
    tags: ['YouTube', 'Thumbnails', 'Design', 'CTR'],
    author: authors[0],
    featuredImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop',
    readTime: 5,
    views: 2840,
    publishedAt: '2025-01-15'
  },
  {
    id: '2',
    slug: 'instagram-marketing-strategies-2025',
    title: 'Instagram Marketing Strategies That Actually Work in 2025',
    excerpt: 'Discover the latest Instagram marketing strategies that help brands grow their following and increase engagement.',
    content: `
# Instagram Marketing Strategies That Actually Work in 2025

Instagram continues to evolve, and so should your marketing strategy. Here's what's working right now.

## The Rise of Reels

Reels are now Instagram's primary focus. The algorithm heavily favors short-form video content.

### Reels Best Practices
- Keep videos between 15-30 seconds
- Hook viewers in the first 3 seconds
- Use trending audio
- Add captions for accessibility

## Content Pillars for Success

1. **Educational Content** - Teach your audience something valuable
2. **Entertainment** - Make them laugh or feel good
3. **Inspirational** - Motivate and inspire action
4. **Promotional** - Showcase your products/services (keep this to 20%)

## Engagement Strategies

### The 5-3-1 Rule
- Comment on 5 posts in your niche
- Engage with 3 new accounts daily
- Post 1 piece of quality content

## Analytics That Matter

Focus on:
- Reach and Impressions
- Engagement Rate
- Saves and Shares
- Profile Visits

## Conclusion

Success on Instagram requires consistency, creativity, and community engagement.

**Want expert help with your Instagram? [Reach out to VisionCut](/contact)!**
    `,
    category: 'Social Media',
    tags: ['Instagram', 'Marketing', 'Reels', 'Growth'],
    author: authors[1],
    featuredImage: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=450&fit=crop',
    readTime: 7,
    views: 3520,
    publishedAt: '2025-01-10'
  },
  {
    id: '3',
    slug: 'seo-tips-for-small-businesses',
    title: 'SEO Tips Every Small Business in Karnataka Should Know',
    excerpt: 'Local SEO strategies specifically designed for small businesses in Karnataka to dominate local search results.',
    content: `
# SEO Tips Every Small Business in Karnataka Should Know

Local SEO is crucial for small businesses. Here's how to rank higher in your local area.

## Google My Business Optimization

Your Google My Business profile is essential for local visibility.

### Key Optimization Steps
1. Complete every section of your profile
2. Add high-quality photos weekly
3. Collect and respond to reviews
4. Post updates regularly

## Local Keywords

Target keywords like:
- "Best [service] in Bangalore"
- "[Service] near me"
- "[Service] in Karnataka"

## Building Local Citations

Get listed on:
- JustDial
- Sulekha
- IndiaMART
- Local directories

## Content Strategy

Create content about:
- Local events and news
- Customer success stories
- Local guides and tips

## Technical SEO Basics

- Ensure mobile-friendly design
- Improve page speed
- Use proper heading structure
- Add schema markup

## Conclusion

Local SEO is an ongoing process. Start with these basics and build from there.

**Need SEO help? [Contact VisionCut](/contact) for a free audit!**
    `,
    category: 'SEO',
    tags: ['SEO', 'Local Business', 'Karnataka', 'Google'],
    author: authors[0],
    featuredImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=450&fit=crop',
    readTime: 6,
    views: 1890,
    publishedAt: '2025-01-05'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    company: 'TechStart Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    service: 'Digital Marketing',
    rating: 5,
    review: 'VisionCut transformed our online presence completely. Our social media engagement increased by 300% in just 3 months. Highly recommended!',
    featured: true
  },
  {
    id: '2',
    name: 'Priya Hegde',
    company: 'Hegde Academy',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    service: 'Educational Thumbnails',
    rating: 5,
    review: 'The thumbnail designs for our YouTube channel are amazing! Our CTR improved from 2% to 8%. The team understands educational content perfectly.',
    featured: true
  },
  {
    id: '3',
    name: 'Suresh Gowda',
    company: 'Gowda Textiles',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    service: 'Logo Design',
    rating: 5,
    review: 'Our new logo perfectly represents our brand heritage while looking modern. The process was smooth and the team was very responsive.',
    featured: true
  },
  {
    id: '4',
    name: 'Ananya Rao',
    company: 'FitLife Studio',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    service: 'Social Media Management',
    rating: 5,
    review: 'Managing social media was overwhelming until we hired VisionCut. Now our Instagram is thriving with consistent, beautiful content!',
    featured: false
  },
  {
    id: '5',
    name: 'Mohammed Fazil',
    company: 'Fazil Electronics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    service: 'Video Editing',
    rating: 5,
    review: 'The product videos they created helped us increase online sales by 150%. Professional quality at a reasonable price.',
    featured: true
  },
  {
    id: '6',
    name: 'Lakshmi Narayana',
    company: 'Sri Guru Coaching',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    service: 'Course Promotion',
    rating: 5,
    review: 'VisionCut helped us launch our online course successfully. The promotional creatives and strategy brought in 500+ enrollments!',
    featured: true
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'YouTube Thumbnail - Tech Review',
    category: 'graphic',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=600&fit=crop',
    likes: 234,
    caption: 'Eye-catching thumbnail design for a tech review channel #thumbnaildesign #youtube',
    instagramUrl: 'https://instagram.com/visioncut.2025'
  },
  {
    id: '2',
    title: 'Brand Identity - Coffee Shop',
    category: 'graphic',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    likes: 456,
    caption: 'Complete brand identity for a local coffee shop ☕ #logodesign #branding',
    instagramUrl: 'https://instagram.com/visioncut.2025'
  },
  {
    id: '3',
    title: 'Social Media Campaign',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=600&fit=crop',
    likes: 789,
    caption: 'Successful social media campaign that drove 10K+ engagement #socialmedia #marketing',
    instagramUrl: 'https://instagram.com/visioncut.2025'
  },
  {
    id: '4',
    title: 'Educational Video Edit',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=600&fit=crop',
    likes: 567,
    caption: 'Engaging educational video edit for online learning platform #videoediting #education',
    instagramUrl: 'https://instagram.com/visioncut.2025'
  },
  {
    id: '5',
    title: 'Poster Design - Music Festival',
    category: 'graphic',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=600&fit=crop',
    likes: 892,
    caption: 'Vibrant poster design for a music festival 🎵 #posterdesign #festival',
    instagramUrl: 'https://instagram.com/visioncut.2025'
  },
  {
    id: '6',
    title: 'Reels Edit - Fashion Brand',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=600&fit=crop',
    likes: 1234,
    caption: 'Trendy Reels edit for a fashion brand that went viral! #reels #fashion',
    instagramUrl: 'https://instagram.com/visioncut.2025'
  },
  {
    id: '7',
    title: 'Website SEO Success',
    category: 'seo',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop',
    likes: 345,
    caption: '500% organic traffic growth for our client! #seo #digitalmarketing',
    instagramUrl: 'https://instagram.com/visioncut.2025'
  },
  {
    id: '8',
    title: 'Product Photography Edit',
    category: 'graphic',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    likes: 678,
    caption: 'Clean product photo editing for e-commerce #productphotography #ecommerce',
    instagramUrl: 'https://instagram.com/visioncut.2025'
  },
  {
    id: '9',
    title: 'Motion Graphics Intro',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop',
    likes: 901,
    caption: 'Dynamic motion graphics intro for a gaming channel 🎮 #motiongraphics #gaming',
    instagramUrl: 'https://instagram.com/visioncut.2025'
  }
];

export const blogCategories = ['All', 'Design Tips', 'Social Media', 'SEO', 'Marketing', 'Video'];

export const stats = [
  { number: 500, suffix: '+', label: 'Projects Completed' },
  { number: 100, suffix: '+', label: 'Happy Clients' },
  { number: 50, suffix: 'M+', label: 'Views Generated' },
  { number: 5, suffix: '+', label: 'Years Experience' }
];
