import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { serviceCategories } from '../data/services';
import { blogs, reviews, portfolioItems, stats } from '../data/content';
import { ArrowRight, Heart, ExternalLink } from 'lucide-react';
import { SEO, schemas } from '../components/SEO';
import { TrustBadges, ReviewsCarousel, AggregateRatingDisplay } from '../components/ReviewSystem';

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();

  return (
    <div ref={ref} className="text-center">
      <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {isInView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {value}{suffix}
          </motion.span>
        ) : (
          '0'
        )}
      </div>
      <p className={`mt-1 text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{label}</p>
    </div>
  );
}

export function HomePage() {
  const { isDark } = useTheme();
  const controls = useAnimation();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Calculate aggregate rating for schema
  const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  useEffect(() => {
    if (isHeroInView) {
      controls.start('visible');
    }
  }, [isHeroInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // SEO schemas for homepage
  const homeSchemas = [
    schemas.organization(),
    schemas.localBusiness(),
    schemas.aggregateRating(avgRating, reviews.length),
    schemas.webPage({
      title: 'VisionCut - Creative Digital Marketing Agency',
      description: 'Creative Digital Marketing Agency in Karnataka, India. We Design. We Market. We Grow Brands.',
      url: 'https://visioncut.com'
    })
  ];

  return (
    <div className={isDark ? 'bg-gray-950' : 'bg-white'}>
      <SEO
        title="Creative Digital Marketing Agency in Karnataka, India"
        description="VisionCut is a creative digital marketing agency in Karnataka, India. We offer graphic design, video editing, SEO, social media marketing, and more. We Design. We Market. We Grow Brands."
        keywords="digital marketing agency, graphic design, video editing, SEO, social media marketing, Karnataka, India, VisionCut, YouTube thumbnails, logo design"
        url="https://visioncut.com"
        schema={homeSchemas}
      />
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`} />
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-pink-500' : 'bg-pink-300'}`} />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10 ${isDark ? 'bg-orange-500' : 'bg-orange-200'}`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className={`inline-flex items-center px-4 py-2 rounded-full mb-6 ${isDark ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-purple-100 border border-purple-200'}`}
            >
              <span className={`text-sm font-medium ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                🚀 Creative Digital Marketing Agency in Karnataka
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              We{' '}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Design.
              </span>
              <br />
              We{' '}
              <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Market.
              </span>
              <br />
              We{' '}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
                Grow Brands.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`mt-6 text-lg sm:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              VisionCut is a creative digital marketing agency helping businesses, creators, startups, and educational institutions grow their digital presence with stunning designs and strategic marketing.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/services"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  View Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Link>
              <Link
                to="/contact"
                className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 ${
                  isDark
                    ? 'border-gray-700 text-white hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-6 h-10 rounded-full border-2 ${isDark ? 'border-gray-700' : 'border-gray-300'} flex items-start justify-center p-2`}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className={`py-20 sm:py-32 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our Services
            </h2>
            <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Comprehensive digital solutions for your brand
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative p-6 rounded-2xl ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50'
                    : 'bg-white border border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-lg'
                } transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.name}
                </h3>
                <p className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {category.kannada}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className={`inline-flex items-center text-sm font-semibold ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
            >
              View All Services
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedCounter value={stat.number} suffix={stat.suffix} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Showcase */}
      <section className={`py-20 sm:py-32 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our Work
            </h2>
            <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Follow us on Instagram @visioncut.2025
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioItems.slice(0, 6).map((item, index) => (
              <motion.a
                key={item.id}
                href={item.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-square rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center space-x-4 text-white">
                      <span className="flex items-center">
                        <Heart size={16} className="mr-1" />
                        {item.likes}
                      </span>
                      <ExternalLink size={16} />
                    </div>
                    <p className="text-white text-sm mt-2 line-clamp-2">{item.caption}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              to="/portfolio"
              className={`inline-flex items-center text-sm font-semibold ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
            >
              View Full Portfolio
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 sm:py-32 ${isDark ? 'bg-gray-900/30' : 'bg-purple-50/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              What Our Clients Say
            </h2>
            <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Trusted by businesses across Karnataka
            </p>
          </motion.div>

          {/* Aggregate Rating */}
          <div className="max-w-md mx-auto mb-12">
            <AggregateRatingDisplay />
          </div>

          {/* Reviews Carousel */}
          <ReviewsCarousel />

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/about#testimonials"
              className={`inline-flex items-center text-sm font-semibold ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
            >
              View All Reviews
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className={`py-20 sm:py-32 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Latest from Our Blog
            </h2>
            <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Tips, insights, and strategies for digital growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${blog.slug}`} className="group block">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                    <img
                      src={blog.featuredImage}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                      isDark ? 'bg-purple-500/80 text-white' : 'bg-purple-600 text-white'
                    }`}>
                      {blog.category}
                    </div>
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 group-hover:text-purple-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {blog.title}
                  </h3>
                  <p className={`text-sm mb-3 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {blog.excerpt}
                  </p>
                  <div className={`flex items-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span>{blog.readTime} min read</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/blog"
              className={`inline-flex items-center text-sm font-semibold ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
            >
              View All Posts
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 sm:p-12 rounded-3xl ${
              isDark
                ? 'bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-orange-500/20 border border-purple-500/20'
                : 'bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100'
            }`}
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to Grow Your Brand?
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's create something amazing together. Get in touch with us today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              Let's Talk
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
