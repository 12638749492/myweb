import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { portfolioItems } from '../data/content';
import { Heart, ExternalLink, Instagram } from 'lucide-react';
import { SEO, schemas } from '../components/SEO';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'graphic', name: 'Graphic Design' },
  { id: 'video', name: 'Video Editing' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'seo', name: 'SEO' },
];

export function PortfolioPage() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <SEO
        title="Portfolio - Our Creative Work & Projects"
        description="Explore VisionCut's portfolio of creative work including graphic designs, video editing projects, marketing campaigns, and more. Follow @visioncut.2025 on Instagram."
        keywords="portfolio, creative work, graphic design examples, video editing samples, marketing projects, VisionCut work"
        url="https://visioncut.com/portfolio"
        schema={[
          schemas.webPage({
            title: 'VisionCut Portfolio',
            description: 'Our creative work and projects showcase',
            url: 'https://visioncut.com/portfolio'
          }),
          schemas.breadcrumb([
            { name: 'Home', url: 'https://visioncut.com' },
            { name: 'Portfolio', url: 'https://visioncut.com/portfolio' }
          ])
        ]}
      />
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-pink-500' : 'bg-pink-300'}`} />
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className={`text-4xl sm:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className={`mt-6 text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Explore our latest work and creative projects. Each piece represents our commitment to excellence.
            </p>
            <a
              href="https://instagram.com/visioncut.2025"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center mt-6 space-x-2 ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
            >
              <Instagram size={20} />
              <span>Follow @visioncut.2025</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className={`py-8 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setVisibleCount(9);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {visibleItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-square rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="flex items-center justify-between text-white mb-2">
                      <span className="flex items-center">
                        <Heart size={18} className="mr-2" />
                        {item.likes}
                      </span>
                      <ExternalLink size={18} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{item.caption}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredItems.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-12"
            >
              <button
                onClick={() => setVisibleCount(prev => prev + 9)}
                className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:shadow-lg transition-all"
              >
                Load More
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className={`py-20 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 sm:p-12 rounded-3xl ${
              isDark
                ? 'bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-orange-500/20 border border-pink-500/20'
                : 'bg-gradient-to-br from-pink-100 via-purple-50 to-orange-100'
            }`}
          >
            <Instagram size={48} className={`mx-auto mb-4 ${isDark ? 'text-pink-400' : 'text-pink-600'}`} />
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              See More on Instagram
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Follow us for daily updates, behind-the-scenes content, and more creative work.
            </p>
            <a
              href="https://instagram.com/visioncut.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full text-white font-semibold shadow-lg"
            >
              <Instagram className="mr-2" size={20} />
              Follow @visioncut.2025
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
