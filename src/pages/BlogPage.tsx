import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { blogs, blogCategories } from '../data/content';
import { Search, Clock, Eye, Calendar } from 'lucide-react';
import { SEO, schemas } from '../components/SEO';

export function BlogPage() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <SEO
        title="Blog - Digital Marketing Tips, Design Insights & Growth Strategies"
        description="Read the latest articles on digital marketing, graphic design, video editing, SEO, and social media strategies from VisionCut's expert team."
        keywords="digital marketing blog, design tips, SEO strategies, social media marketing, video editing tips, YouTube growth, Karnataka"
        url="https://visioncut.com/blog"
        schema={[
          schemas.webPage({
            title: 'VisionCut Blog',
            description: 'Digital marketing insights and creative tips',
            url: 'https://visioncut.com/blog'
          }),
          schemas.breadcrumb([
            { name: 'Home', url: 'https://visioncut.com' },
            { name: 'Blog', url: 'https://visioncut.com/blog' }
          ])
        ]}
      />
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-orange-500' : 'bg-orange-300'}`} />
          <div className={`absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className={`text-4xl sm:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className={`mt-6 text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Insights, tips, and strategies to help you grow your digital presence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className={`py-8 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="max-w-md mx-auto mb-6">
            <div className={`relative rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full py-3 pl-12 pr-4 bg-transparent outline-none ${isDark ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-400'}`}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {blogCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                    <h2 className={`text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {blog.title}
                    </h2>
                    <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {blog.excerpt}
                    </p>
                    <div className={`flex items-center space-x-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {blog.readTime} min
                      </span>
                      <span className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        {blog.views}
                      </span>
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(blog.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center mt-4 space-x-3">
                      <img
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {blog.author.name}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                No articles found. Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
