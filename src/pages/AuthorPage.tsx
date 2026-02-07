import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { authors, blogs } from '../data/content';
import { Instagram, Twitter, Linkedin, ArrowLeft, Clock, Eye, Calendar } from 'lucide-react';

export function AuthorPage() {
  const { id } = useParams();
  const { isDark } = useTheme();

  const author = authors.find(a => a.id === id);
  const authorBlogs = blogs.filter(b => b.author.id === id);

  if (!author) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Author Not Found
          </h1>
          <Link to="/blog" className="text-purple-500 hover:text-purple-600">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`} />
          <div className={`absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-pink-500' : 'bg-pink-300'}`} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/blog"
              className={`inline-flex items-center mb-8 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={author.avatar}
                alt={author.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-purple-500/20"
              />
              <div className="text-center sm:text-left">
                <h1 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {author.name}
                </h1>
                <p className={`mt-4 text-lg max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {author.bio}
                </p>

                {/* Expertise */}
                <div className="flex flex-wrap gap-2 mt-6 justify-center sm:justify-start">
                  {author.expertise.map(exp => (
                    <span
                      key={exp}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-purple-100 text-purple-600'
                      }`}
                    >
                      {exp}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6 justify-center sm:justify-start">
                  {author.social.instagram && (
                    <a
                      href={`https://instagram.com/${author.social.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-colors ${
                        isDark
                          ? 'bg-gray-800 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400'
                          : 'bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600'
                      }`}
                    >
                      <Instagram size={20} />
                    </a>
                  )}
                  {author.social.twitter && (
                    <a
                      href={`https://twitter.com/${author.social.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-colors ${
                        isDark
                          ? 'bg-gray-800 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400'
                          : 'bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600'
                      }`}
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {author.social.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${author.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-colors ${
                        isDark
                          ? 'bg-gray-800 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400'
                          : 'bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600'
                      }`}
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author's Articles */}
      <section className={`py-16 sm:py-24 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Articles by {author.name}
            </h2>
            <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {authorBlogs.length} article{authorBlogs.length !== 1 ? 's' : ''} published
            </p>
          </motion.div>

          {authorBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${blog.slug}`} className="group block">
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
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
                    <h3 className={`text-lg font-semibold mb-2 group-hover:text-purple-500 transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {blog.title}
                    </h3>
                    <p className={`text-sm mb-3 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className={`text-center py-16 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No articles published yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
