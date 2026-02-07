export interface Service {
  id: string;
  name: string;
  kannada: string;
  category: string;
  icon: string;
  overview: string;
  deliverables: string[];
  process: string[];
  tools: string[];
  caseStudy: {
    problem: string;
    solution: string;
    result: string;
  };
  idealFor: string[];
}

export const serviceCategories = [
  { id: 'graphic', name: 'Graphic Design', icon: '🎨', kannada: 'ಗ್ರಾಫಿಕ್ ಡಿಸೈನ್' },
  { id: 'video', name: 'Video Editing', icon: '🎬', kannada: 'ವೀಡಿಯೋ ಎಡಿಟಿಂಗ್' },
  { id: 'marketing', name: 'Digital Marketing', icon: '📈', kannada: 'ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್' },
  { id: 'seo', name: 'SEO & Growth', icon: '🚀', kannada: 'SEO & ಗ್ರೋತ್' },
  { id: 'academy', name: 'Academy Services', icon: '🎓', kannada: 'ಅಕಾಡೆಮಿ ಸೇವೆಗಳು' },
  { id: 'technical', name: 'Technical Services', icon: '⚙', kannada: 'ತಾಂತ್ರಿಕ ಸೇವೆಗಳು' },
  { id: 'content', name: 'Content Services', icon: '✍', kannada: 'ಕಂಟೆಂಟ್ ಸೇವೆಗಳು' },
];

export const services: Service[] = [
  // Graphic Design
  {
    id: 'youtube-thumbnail',
    name: 'YouTube Thumbnail Design',
    kannada: 'ಯೂಟ್ಯೂಬ್ ಥಂಬ್ನೈಲ್ ಡಿಸೈನ್',
    category: 'graphic',
    icon: '🖼️',
    overview: 'Eye-catching YouTube thumbnails that increase click-through rates and help your videos stand out in search results.',
    deliverables: ['High-resolution thumbnail (1280x720)', 'Multiple design variations', 'Source files', 'Quick revisions'],
    process: ['Analyze video content & target audience', 'Design concept creation', 'Typography & color optimization', 'Final delivery with revisions'],
    tools: ['Adobe Photoshop', 'Canva Pro', 'Adobe Illustrator'],
    caseStudy: {
      problem: 'Educational channel with low CTR (2%) on thumbnails',
      solution: 'Created bold, emotion-driven thumbnails with clear text hierarchy',
      result: 'Increased CTR to 8.5% within 30 days'
    },
    idealFor: ['YouTubers', 'Content Creators', 'Educational Channels', 'Businesses']
  },
  {
    id: 'social-media-post',
    name: 'Social Media Post Design',
    kannada: 'ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ ಪೋಸ್ಟ್ ಡಿಸೈನ್',
    category: 'graphic',
    icon: '📱',
    overview: 'Stunning social media graphics optimized for Instagram, Facebook, LinkedIn, and Twitter that drive engagement.',
    deliverables: ['Platform-optimized designs', 'Story & feed formats', 'Brand consistency', 'Editable templates'],
    process: ['Brand analysis', 'Content calendar planning', 'Design creation', 'Format optimization'],
    tools: ['Adobe Photoshop', 'Canva', 'Figma'],
    caseStudy: {
      problem: 'Startup with inconsistent brand presence on social media',
      solution: 'Created cohesive design system with templates',
      result: '150% increase in engagement rate'
    },
    idealFor: ['Businesses', 'Influencers', 'Startups', 'Agencies']
  },
  {
    id: 'poster-design',
    name: 'Poster Design',
    kannada: 'ಪೋಸ್ಟರ್ ಡಿಸೈನ್',
    category: 'graphic',
    icon: '🎭',
    overview: 'Professional poster designs for events, promotions, and marketing campaigns that capture attention.',
    deliverables: ['Print-ready files', 'Digital versions', 'Multiple sizes', 'Source files'],
    process: ['Brief understanding', 'Concept development', 'Design execution', 'Print preparation'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'InDesign'],
    caseStudy: {
      problem: 'Event company struggling with low ticket sales',
      solution: 'Created vibrant, attention-grabbing event posters',
      result: '40% increase in event registrations'
    },
    idealFor: ['Event Organizers', 'Businesses', 'Educational Institutions']
  },
  {
    id: 'banner-design',
    name: 'Banner Design',
    kannada: 'ಬ್ಯಾನರ್ ಡಿಸೈನ್',
    category: 'graphic',
    icon: '🏷️',
    overview: 'Professional digital and print banners for websites, ads, and physical displays.',
    deliverables: ['Web banners', 'Social media covers', 'Roll-up designs', 'Billboard designs'],
    process: ['Size & placement analysis', 'Design creation', 'Copy integration', 'Final optimization'],
    tools: ['Adobe Photoshop', 'Illustrator', 'Figma'],
    caseStudy: {
      problem: 'E-commerce store with low ad conversion',
      solution: 'Designed compelling ad banners with clear CTAs',
      result: '25% improvement in ad CTR'
    },
    idealFor: ['E-commerce', 'Retail', 'Events', 'Corporate']
  },
  {
    id: 'logo-design',
    name: 'Logo Design',
    kannada: 'ಲೋಗೋ ಡಿಸೈನ್',
    category: 'graphic',
    icon: '✨',
    overview: 'Unique, memorable logo designs that represent your brand identity and values.',
    deliverables: ['Primary logo', 'Logo variations', 'Brand guidelines', 'All file formats'],
    process: ['Brand discovery', 'Concept sketching', 'Digital refinement', 'Brand guidelines'],
    tools: ['Adobe Illustrator', 'Figma', 'Procreate'],
    caseStudy: {
      problem: 'New startup needed professional brand identity',
      solution: 'Created modern, versatile logo with complete brand kit',
      result: 'Successfully established brand recognition'
    },
    idealFor: ['Startups', 'Businesses', 'Personal Brands']
  },
  {
    id: 'book-cover',
    name: 'Book Cover Design',
    kannada: 'ಪುಸ್ತಕ ಮುಖಪುಟ ವಿನ್ಯಾಸ',
    category: 'graphic',
    icon: '📚',
    overview: 'Professional book cover designs that attract readers and convey your book\'s essence.',
    deliverables: ['Front cover', 'Back cover', 'Spine design', 'E-book cover'],
    process: ['Genre research', 'Concept development', 'Design execution', 'Print preparation'],
    tools: ['Adobe Photoshop', 'InDesign', 'Illustrator'],
    caseStudy: {
      problem: 'Self-published author with poor book sales',
      solution: 'Redesigned cover with genre-appropriate aesthetics',
      result: '200% increase in book sales'
    },
    idealFor: ['Authors', 'Publishers', 'Self-Publishers']
  },
  {
    id: 'cv-resume',
    name: 'CV / Resume Designing',
    kannada: 'ಸಿವಿ / ರೆಸ್ಯೂಮ್ ಡಿಸೈನ್',
    category: 'graphic',
    icon: '📄',
    overview: 'Professional CV and resume designs that help you stand out in job applications.',
    deliverables: ['ATS-friendly design', 'Editable template', 'PDF & Word formats', 'Cover letter template'],
    process: ['Content analysis', 'Layout design', 'Typography selection', 'Final formatting'],
    tools: ['Canva', 'Adobe InDesign', 'Microsoft Word'],
    caseStudy: {
      problem: 'Job seeker with low interview callback rate',
      solution: 'Created modern, ATS-optimized resume',
      result: '3x increase in interview invitations'
    },
    idealFor: ['Job Seekers', 'Professionals', 'Fresh Graduates']
  },
  // Video Editing
  {
    id: 'professional-video',
    name: 'Professional Video Editing',
    kannada: 'ಪ್ರೊಫೆಷನಲ್ ವೀಡಿಯೋ ಎಡಿಟಿಂಗ್',
    category: 'video',
    icon: '🎥',
    overview: 'High-quality video editing for YouTube, corporate videos, and promotional content.',
    deliverables: ['Edited video', 'Color grading', 'Sound design', 'Multiple formats'],
    process: ['Footage review', 'Story structure', 'Editing & effects', 'Color & sound'],
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    caseStudy: {
      problem: 'YouTube channel with low watch time',
      solution: 'Implemented engaging editing style with better pacing',
      result: '45% increase in average watch time'
    },
    idealFor: ['YouTubers', 'Businesses', 'Content Creators']
  },
  {
    id: 'reels-shorts',
    name: 'Reels / Shorts Editing',
    kannada: 'ರೀಲ್ಸ್ / ಶಾರ್ಟ್ಸ್ ಎಡಿಟಿಂಗ್',
    category: 'video',
    icon: '📲',
    overview: 'Trendy short-form video editing optimized for Instagram Reels, YouTube Shorts, and TikTok.',
    deliverables: ['Vertical video format', 'Trending effects', 'Captions', 'Music sync'],
    process: ['Trend analysis', 'Hook creation', 'Fast-paced editing', 'Platform optimization'],
    tools: ['CapCut', 'Premiere Pro', 'After Effects'],
    caseStudy: {
      problem: 'Brand struggling to gain traction on Reels',
      solution: 'Created trend-aligned, fast-paced Reels',
      result: '500K+ views on multiple Reels'
    },
    idealFor: ['Influencers', 'Brands', 'Creators']
  },
  {
    id: 'motion-graphics',
    name: 'Motion Graphics Editing',
    kannada: 'ಮೋಶನ್ ಗ್ರಾಫಿಕ್ಸ್ ಎಡಿಟಿಂಗ್',
    category: 'video',
    icon: '🌀',
    overview: 'Dynamic motion graphics and animations for intros, explainers, and promotional videos.',
    deliverables: ['Animated graphics', 'Logo animations', 'Transitions', 'Explainer videos'],
    process: ['Concept design', 'Storyboarding', 'Animation', 'Sound integration'],
    tools: ['After Effects', 'Cinema 4D', 'Blender'],
    caseStudy: {
      problem: 'Tech company needed engaging product explainer',
      solution: 'Created animated explainer with motion graphics',
      result: '60% increase in product page conversions'
    },
    idealFor: ['Tech Companies', 'Startups', 'Agencies']
  },
  {
    id: 'effects-transitions',
    name: 'Effects & Transitions',
    kannada: 'ಎಫೆಕ್ಟ್ಸ್ & ಟ್ರಾನ್ಸಿಷನ್',
    category: 'video',
    icon: '✨',
    overview: 'Professional visual effects and seamless transitions that enhance video quality.',
    deliverables: ['Custom transitions', 'Visual effects', 'Color grading', 'Preset packages'],
    process: ['Style analysis', 'Effect design', 'Implementation', 'Fine-tuning'],
    tools: ['After Effects', 'Premiere Pro', 'DaVinci Resolve'],
    caseStudy: {
      problem: 'Travel vlogger with generic-looking videos',
      solution: 'Added cinematic effects and smooth transitions',
      result: 'Doubled subscriber growth rate'
    },
    idealFor: ['Vloggers', 'Filmmakers', 'Content Creators']
  },
  {
    id: 'documentary-editing',
    name: 'Documentary Editing',
    kannada: 'ಡಾಕ್ಯುಮೆಂಟರಿ ಎಡಿಟಿಂಗ್',
    category: 'video',
    icon: '🎬',
    overview: 'Compelling documentary editing that tells powerful stories through visuals.',
    deliverables: ['Full documentary edit', 'Interview cuts', 'B-roll integration', 'Sound design'],
    process: ['Story structuring', 'Rough cut', 'Fine cut', 'Color & sound'],
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Pro Tools'],
    caseStudy: {
      problem: 'NGO needed impactful awareness documentary',
      solution: 'Created emotionally compelling narrative',
      result: 'Documentary featured in film festival'
    },
    idealFor: ['NGOs', 'Filmmakers', 'Journalists']
  },
  {
    id: 'educational-video',
    name: 'Educational Video Editing',
    kannada: 'ಶಿಕ್ಷಣ ವೀಡಿಯೋ ಎಡಿಟಿಂಗ್',
    category: 'video',
    icon: '📖',
    overview: 'Clear, engaging educational video editing optimized for learning and retention.',
    deliverables: ['Edited lessons', 'Graphics & overlays', 'Chapters', 'Subtitles'],
    process: ['Content review', 'Structure optimization', 'Visual enhancement', 'Accessibility'],
    tools: ['Camtasia', 'Premiere Pro', 'After Effects'],
    caseStudy: {
      problem: 'Online educator with low course completion',
      solution: 'Created engaging, well-paced educational videos',
      result: '80% course completion rate'
    },
    idealFor: ['Educators', 'Course Creators', 'Institutions']
  },
  // Digital Marketing
  {
    id: 'social-media-handling',
    name: 'Social Media Handling',
    kannada: 'ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ ಹ್ಯಾಂಡ್ಲಿಂಗ್',
    category: 'marketing',
    icon: '📱',
    overview: 'Complete social media account management including content posting and community engagement.',
    deliverables: ['Daily posting', 'Community management', 'Analytics reports', 'Growth strategy'],
    process: ['Account audit', 'Strategy creation', 'Content execution', 'Performance tracking'],
    tools: ['Meta Business Suite', 'Buffer', 'Hootsuite'],
    caseStudy: {
      problem: 'Restaurant with minimal social presence',
      solution: 'Implemented daily posting with engagement strategy',
      result: '10K followers in 3 months'
    },
    idealFor: ['Restaurants', 'Retail', 'Local Businesses']
  },
  {
    id: 'social-media-management',
    name: 'Social Media Management',
    kannada: 'ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್',
    category: 'marketing',
    icon: '📊',
    overview: 'Strategic social media management with content planning, creation, and performance optimization.',
    deliverables: ['Content calendar', 'Custom content', 'Paid strategy', 'Monthly reports'],
    process: ['Brand analysis', 'Content planning', 'Execution', 'Optimization'],
    tools: ['Sprout Social', 'Later', 'Canva'],
    caseStudy: {
      problem: 'E-commerce brand with low social ROI',
      solution: 'Created data-driven social strategy',
      result: '300% increase in social-driven sales'
    },
    idealFor: ['E-commerce', 'Brands', 'Agencies']
  },
  {
    id: 'ad-marketing',
    name: 'Ad Marketing',
    kannada: 'ಜಾಹೀರಾತು ಮಾರ್ಕೆಟಿಂಗ್',
    category: 'marketing',
    icon: '📣',
    overview: 'Performance-driven ad campaigns on Facebook, Instagram, Google, and YouTube.',
    deliverables: ['Ad creatives', 'Campaign setup', 'Audience targeting', 'Performance reports'],
    process: ['Objective setting', 'Audience research', 'Creative development', 'Optimization'],
    tools: ['Meta Ads', 'Google Ads', 'Analytics'],
    caseStudy: {
      problem: 'Coaching institute needing student enrollments',
      solution: 'Launched targeted lead generation campaigns',
      result: '500+ leads at ₹50 per lead'
    },
    idealFor: ['Education', 'E-commerce', 'Services']
  },
  {
    id: 'lead-generation',
    name: 'Lead Generation',
    kannada: 'ಲೀಡ್ ಜನರೇಷನ್',
    category: 'marketing',
    icon: '🎯',
    overview: 'Targeted lead generation strategies to bring qualified prospects to your business.',
    deliverables: ['Lead magnets', 'Landing pages', 'Email sequences', 'Qualified leads'],
    process: ['ICP definition', 'Funnel design', 'Traffic generation', 'Lead nurturing'],
    tools: ['HubSpot', 'Mailchimp', 'Google Ads'],
    caseStudy: {
      problem: 'B2B company struggling to find clients',
      solution: 'Built comprehensive lead generation funnel',
      result: '200+ qualified leads monthly'
    },
    idealFor: ['B2B', 'Services', 'Consultants']
  },
  {
    id: 'whatsapp-marketing',
    name: 'WhatsApp Marketing',
    kannada: 'ವಾಟ್ಸಪ್ ಮಾರ್ಕೆಟಿಂಗ್',
    category: 'marketing',
    icon: '💬',
    overview: 'Strategic WhatsApp marketing campaigns for direct customer engagement and sales.',
    deliverables: ['Broadcast campaigns', 'Automation setup', 'Template design', 'Analytics'],
    process: ['Audience segmentation', 'Content creation', 'Campaign execution', 'Performance tracking'],
    tools: ['WhatsApp Business', 'WATI', 'AiSensy'],
    caseStudy: {
      problem: 'Retail store with low repeat customers',
      solution: 'Implemented WhatsApp remarketing campaigns',
      result: '40% increase in repeat purchases'
    },
    idealFor: ['Retail', 'E-commerce', 'Local Businesses']
  },
  // SEO & Growth
  {
    id: 'seo-optimization',
    name: 'SEO Optimization',
    kannada: 'SEO ಆಪ್ಟಿಮೈಸೇಶನ್',
    category: 'seo',
    icon: '🔍',
    overview: 'Comprehensive SEO services to improve your website\'s search engine rankings.',
    deliverables: ['SEO audit', 'Keyword strategy', 'On-page optimization', 'Link building'],
    process: ['Technical audit', 'Keyword research', 'Content optimization', 'Backlink strategy'],
    tools: ['SEMrush', 'Ahrefs', 'Google Search Console'],
    caseStudy: {
      problem: 'Website with no organic traffic',
      solution: 'Implemented full SEO optimization strategy',
      result: '500% increase in organic traffic in 6 months'
    },
    idealFor: ['Businesses', 'E-commerce', 'Blogs']
  },
  {
    id: 'youtube-seo',
    name: 'YouTube SEO',
    kannada: 'ಯೂಟ್ಯೂಬ್ SEO',
    category: 'seo',
    icon: '📺',
    overview: 'Optimize your YouTube videos and channel for maximum visibility and growth.',
    deliverables: ['Keyword research', 'Title & description optimization', 'Tag strategy', 'Thumbnail optimization'],
    process: ['Channel audit', 'Keyword research', 'Metadata optimization', 'Performance tracking'],
    tools: ['TubeBuddy', 'VidIQ', 'YouTube Studio'],
    caseStudy: {
      problem: 'Educational channel stuck at 10K subscribers',
      solution: 'Implemented comprehensive YouTube SEO strategy',
      result: 'Reached 100K subscribers in 8 months'
    },
    idealFor: ['YouTubers', 'Educators', 'Businesses']
  },
  {
    id: 'growth-strategy',
    name: 'Growth Strategy Planning',
    kannada: 'ಗ್ರೋತ್ ಸ್ಟ್ರಾಟೆಜಿ ಪ್ಲ್ಯಾನಿಂಗ್',
    category: 'seo',
    icon: '📈',
    overview: 'Comprehensive growth strategies combining SEO, content, and marketing for sustainable business growth.',
    deliverables: ['Growth roadmap', 'KPI framework', 'Channel strategy', 'Quarterly reviews'],
    process: ['Business analysis', 'Market research', 'Strategy development', 'Implementation plan'],
    tools: ['Google Analytics', 'Notion', 'Custom dashboards'],
    caseStudy: {
      problem: 'Startup with stagnant growth',
      solution: 'Created multi-channel growth strategy',
      result: '3x revenue growth in 12 months'
    },
    idealFor: ['Startups', 'Growing Businesses', 'Entrepreneurs']
  },
  // Academy Services
  {
    id: 'educational-thumbnails',
    name: 'Educational Thumbnails',
    kannada: 'ಶಿಕ್ಷಣ ಥಂಬ್ನೈಲ್ ವಿನ್ಯಾಸ',
    category: 'academy',
    icon: '🎓',
    overview: 'Specialized thumbnail designs for educational content that improve click-through rates.',
    deliverables: ['Subject-specific designs', 'Consistent branding', 'Bulk packages', 'Quick turnaround'],
    process: ['Subject analysis', 'Brand alignment', 'Design creation', 'Batch delivery'],
    tools: ['Photoshop', 'Canva Pro', 'Illustrator'],
    caseStudy: {
      problem: 'Coaching channel with low video views',
      solution: 'Created subject-coded thumbnail system',
      result: '120% increase in video views'
    },
    idealFor: ['Educators', 'Coaching Institutes', 'Online Teachers']
  },
  {
    id: 'current-affairs-slides',
    name: 'Current Affairs Slides',
    kannada: 'ಕರಂಟ್ ಅಫೇರ್ಸ್ ಸ್ಲೈಡ್ಸ್',
    category: 'academy',
    icon: '📰',
    overview: 'Daily current affairs slides and graphics for educational channels and coaching institutes.',
    deliverables: ['Daily slides', 'News graphics', 'Summary cards', 'Monthly compilations'],
    process: ['News curation', 'Content structuring', 'Design creation', 'Timely delivery'],
    tools: ['Canva', 'PowerPoint', 'Photoshop'],
    caseStudy: {
      problem: 'UPSC coaching needed daily content',
      solution: 'Created systematic daily current affairs slides',
      result: 'Consistent daily engagement boost'
    },
    idealFor: ['UPSC Coaching', 'News Channels', 'Educators']
  },
  {
    id: 'test-result-creatives',
    name: 'Test Result Creatives',
    kannada: 'ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶ ಕ್ರಿಯೇಟಿವ್ಸ್',
    category: 'academy',
    icon: '🏆',
    overview: 'Celebration creatives for test results, toppers, and student achievements.',
    deliverables: ['Topper cards', 'Result announcements', 'Achievement posts', 'Story templates'],
    process: ['Data collection', 'Template creation', 'Quick customization', 'Multi-format delivery'],
    tools: ['Canva', 'Photoshop', 'Illustrator'],
    caseStudy: {
      problem: 'Institute needed quick result announcements',
      solution: 'Created rapid result creative system',
      result: 'Same-day result announcements with high engagement'
    },
    idealFor: ['Coaching Institutes', 'Schools', 'Colleges']
  },
  {
    id: 'course-promotion',
    name: 'Course Promotion Creatives',
    kannada: 'ಕೋರ್ಸ್ ಪ್ರೊಮೋಷನ್ ಕ್ರಿಯೇಟಿವ್ಸ್',
    category: 'academy',
    icon: '📢',
    overview: 'Promotional creatives for course launches, discounts, and enrollment drives.',
    deliverables: ['Launch creatives', 'Discount banners', 'Feature highlights', 'Testimonial cards'],
    process: ['Course analysis', 'USP identification', 'Creative development', 'Campaign assets'],
    tools: ['Photoshop', 'After Effects', 'Canva'],
    caseStudy: {
      problem: 'Online course with poor enrollment',
      solution: 'Created compelling course launch campaign',
      result: '500+ enrollments in launch week'
    },
    idealFor: ['Course Creators', 'Ed-tech', 'Coaching']
  },
  {
    id: 'marathon-class',
    name: 'Marathon Class Promotions',
    kannada: 'ಮ್ಯಾರಥಾನ್ ಕ್ಲಾಸ್ ಪ್ರೊಮೋಷನ್',
    category: 'academy',
    icon: '🏃',
    overview: 'Promotional materials for marathon classes, revision sessions, and crash courses.',
    deliverables: ['Event banners', 'Countdown posts', 'Live session graphics', 'Reminder creatives'],
    process: ['Event planning', 'Teaser creation', 'Launch campaign', 'Engagement posts'],
    tools: ['Canva', 'Photoshop', 'Premiere Pro'],
    caseStudy: {
      problem: 'Low attendance in marathon sessions',
      solution: 'Created FOMO-driven promotional campaign',
      result: '2x attendance in marathon sessions'
    },
    idealFor: ['Coaching Institutes', 'Educators', 'Ed-tech']
  },
  // Technical Services
  {
    id: 'studio-setup',
    name: 'Studio Setup (Teaching / Podcast)',
    kannada: 'ಸ್ಟುಡಿಯೋ ಸೆಟಪ್',
    category: 'technical',
    icon: '🎙️',
    overview: 'Complete studio setup consultation and implementation for teaching and podcast production.',
    deliverables: ['Equipment list', 'Setup guide', 'Acoustic treatment plan', 'On-site setup'],
    process: ['Needs assessment', 'Budget planning', 'Equipment sourcing', 'Installation & training'],
    tools: ['OBS', 'Streamlabs', 'Audio interfaces'],
    caseStudy: {
      problem: 'Educator needed professional home studio',
      solution: 'Designed and set up budget-friendly studio',
      result: 'Professional quality videos at home'
    },
    idealFor: ['Educators', 'Podcasters', 'Content Creators']
  },
  {
    id: 'custom-pc',
    name: 'Custom PC Build',
    kannada: 'ಕಸ್ಟಮ್ ಪಿಸಿ ಬಿಲ್ಡ್',
    category: 'technical',
    icon: '🖥️',
    overview: 'Custom PC building consultation for video editing, streaming, and content creation.',
    deliverables: ['Component selection', 'Build guide', 'Assembly service', 'Performance optimization'],
    process: ['Requirements analysis', 'Component research', 'Build execution', 'Software setup'],
    tools: ['PCPartPicker', 'Hardware benchmarks'],
    caseStudy: {
      problem: 'Video editor with slow rendering times',
      solution: 'Built optimized editing workstation',
      result: '5x faster rendering, improved productivity'
    },
    idealFor: ['Video Editors', 'Gamers', 'Streamers']
  },
  {
    id: 'app-page-setup',
    name: 'App / Page Setup',
    kannada: 'ಆಪ್ / ಪೇಜ್ ಸೆಟಪ್',
    category: 'technical',
    icon: '📲',
    overview: 'Complete setup and optimization of social media pages, business profiles, and apps.',
    deliverables: ['Profile optimization', 'Branding setup', 'Feature configuration', 'Training'],
    process: ['Platform assessment', 'Profile creation', 'Optimization', 'User training'],
    tools: ['Meta Business', 'Google My Business', 'Various platforms'],
    caseStudy: {
      problem: 'Business with incomplete online presence',
      solution: 'Set up and optimized all social profiles',
      result: 'Professional presence across platforms'
    },
    idealFor: ['New Businesses', 'Startups', 'Local Shops']
  },
  {
    id: 'content-filling',
    name: 'Content Filling',
    kannada: 'ಕಂಟೆಂಟ್ ಫಿಲ್ಲಿಂಗ್',
    category: 'technical',
    icon: '📝',
    overview: 'Content population services for websites, apps, and platforms with SEO-optimized content.',
    deliverables: ['Content upload', 'SEO optimization', 'Image optimization', 'Quality check'],
    process: ['Content audit', 'Format preparation', 'Upload execution', 'SEO optimization'],
    tools: ['CMS platforms', 'SEO tools', 'Image optimizers'],
    caseStudy: {
      problem: 'E-commerce site with 1000+ empty product pages',
      solution: 'Systematically filled all product content',
      result: 'Complete product catalog in 2 weeks'
    },
    idealFor: ['E-commerce', 'Websites', 'Platforms']
  },
  {
    id: 'technical-support',
    name: 'Technical Support',
    kannada: 'ಟೆಕ್ನಿಕಲ್ ಸಪೋರ್ಟ್',
    category: 'technical',
    icon: '🔧',
    overview: 'Ongoing technical support for digital tools, software, and online platforms.',
    deliverables: ['Issue resolution', 'Training sessions', 'Documentation', 'Ongoing support'],
    process: ['Issue diagnosis', 'Solution implementation', 'User training', 'Follow-up'],
    tools: ['Remote support tools', 'Documentation systems'],
    caseStudy: {
      problem: 'Team struggling with new software',
      solution: 'Provided comprehensive training and support',
      result: 'Team fully productive in 1 week'
    },
    idealFor: ['Businesses', 'Teams', 'Individuals']
  },
  // Content Services
  {
    id: 'content-writing',
    name: 'Content Writing',
    kannada: 'ಕಂಟೆಂಟ್ ರೈಟಿಂಗ್',
    category: 'content',
    icon: '✍️',
    overview: 'SEO-optimized content writing for blogs, websites, and marketing materials.',
    deliverables: ['Blog articles', 'Website copy', 'Marketing content', 'SEO optimization'],
    process: ['Topic research', 'Outline creation', 'Content writing', 'SEO optimization'],
    tools: ['Grammarly', 'SEMrush', 'Google Docs'],
    caseStudy: {
      problem: 'Website with no organic traffic',
      solution: 'Created 50+ SEO-optimized blog posts',
      result: '10x increase in organic traffic'
    },
    idealFor: ['Businesses', 'Blogs', 'Agencies']
  },
  {
    id: 'script-writing',
    name: 'Script Writing',
    kannada: 'ಸ್ಕ್ರಿಪ್ಟ್ ರೈಟಿಂಗ್',
    category: 'content',
    icon: '🎭',
    overview: 'Engaging video scripts for YouTube, ads, and promotional content.',
    deliverables: ['Video scripts', 'Ad scripts', 'Hooks & CTAs', 'Storyboards'],
    process: ['Brief understanding', 'Research', 'Script drafting', 'Revisions'],
    tools: ['Final Draft', 'Google Docs', 'Notion'],
    caseStudy: {
      problem: 'YouTuber with low viewer retention',
      solution: 'Created hook-driven scripts with better pacing',
      result: '50% improvement in watch time'
    },
    idealFor: ['YouTubers', 'Advertisers', 'Brands']
  },
  {
    id: 'idea-generation',
    name: 'Idea Generation',
    kannada: 'ಐಡಿಯಾ ಜನರೇಷನ್',
    category: 'content',
    icon: '💡',
    overview: 'Creative brainstorming and content idea generation for all platforms.',
    deliverables: ['Content calendar', 'Topic ideas', 'Trend analysis', 'Creative concepts'],
    process: ['Audience research', 'Trend analysis', 'Ideation sessions', 'Content planning'],
    tools: ['AnswerThePublic', 'BuzzSumo', 'Notion'],
    caseStudy: {
      problem: 'Creator running out of content ideas',
      solution: 'Developed 6-month content idea bank',
      result: 'Consistent posting with varied content'
    },
    idealFor: ['Creators', 'Brands', 'Marketing Teams']
  }
];
