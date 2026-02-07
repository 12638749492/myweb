import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { blogs } from '../data/content';
import { Clock, Eye, Calendar, ArrowLeft, Share2, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SEO, schemas } from '../components/SEO';

export function BlogDetailPage() {
  const { slug } = useParams();
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);
  
  const blog = blogs.find(b => b.slug === slug);
  const relatedBlogs = blogs.filter(b => b.id !== blog?.id).slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <SEO
          title="Article Not Found"
          description="The article you're looking for could not be found."
        />
        <div className="text-center">
          <h1 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Article Not Found
          </h1>
          <Link
            to="/blog"
            className="text-purple-500 hover:text-purple-600"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const blogUrl = `https://visioncut.com/blog/${blog.slug}`;

  // Blog SEO schema
  const blogSchema = schemas.blogPosting({
    title: blog.title,
    description: blog.excerpt,
    image: blog.featuredImage,
    authorName: blog.author.name,
    publishedDate: blog.publishedAt,
    url: blogUrl
  });
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate table of contents from content
  const headings = blog.content.match(/^## .+$/gm) || [];
  const toc = headings.map(h => ({
    text: h.replace('## ', ''),
    id: h.replace('## ', '').toLowerCase().replace(/\s+/g, '-')
  }));

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <SEO
        title={blog.title}
        description={blog.excerpt}
        keywords={blog.tags.join(', ')}
        image={blog.featuredImage}
        url={blogUrl}
        type="article"
        author={blog.author.name}
        publishedTime={blog.publishedAt}
        schema={[
          blogSchema,
          schemas.breadcrumb([
            { name: 'Home', url: 'https://visioncut.com' },
            { name: 'Blog', url: 'https://visioncut.com/blog' },
            { name: blog.title, url: blogUrl }
          ])
        ]}
      />
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/blog"
              className={`inline-flex items-center mb-6 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>

            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
              isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
            }`}>
              {blog.category}
            </span>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {blog.title}
            </h1>

            <div className={`flex flex-wrap items-center gap-4 mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex items-center space-x-3">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <Link
                  to={`/author/${blog.author.id}`}
                  className="hover:text-purple-500 transition-colors"
                >
                  {blog.author.name}
                </Link>
              </div>
              <span className="flex items-center">
                <Clock size={16} className="mr-1" />
                {blog.readTime} min read
              </span>
              <span className="flex items-center">
                <Eye size={16} className="mr-1" />
                {blog.views} views
              </span>
              <span className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {new Date(blog.publishedAt).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-video rounded-2xl overflow-hidden"
        >
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents - Sidebar */}
          {toc.length > 0 && (
            <aside className="lg:w-64 flex-shrink-0">
              <div className={`sticky top-24 p-4 rounded-xl ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50'}`}>
                <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Table of Contents
                </h3>
                <ul className="space-y-2">
                  {toc.map((item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.id}`}
                        className={`text-sm ${isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          {/* Main Content */}
          <article className="flex-1 min-w-0">
            {/* Article Content */}
            <div className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}>
              {blog.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className={`text-3xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  const text = paragraph.replace('## ', '');
                  const id = text.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <h2 key={index} id={id} className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {text}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className={`text-xl font-semibold mt-6 mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className={`ml-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                if (paragraph.match(/^\d+\. /)) {
                  return (
                    <li key={index} className={`ml-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {paragraph.replace(/^\d+\. /, '')}
                    </li>
                  );
                }
                if (paragraph.trim() === '') {
                  return <br key={index} />;
                }
                return (
                  <p key={index} className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50'}`}>
              <h3 className={`text-lg font-semibold mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Share2 size={18} className="mr-2" />
                Share this article
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(blog.title + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-full bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={16} className="mr-2" />
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  𝕏 Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-full bg-blue-700 text-white text-sm font-medium hover:bg-blue-800 transition-colors"
                >
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </a>
                <button
                  onClick={handleCopyLink}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    copied
                      ? 'bg-green-500 text-white'
                      : isDark
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <LinkIcon size={16} className="mr-2" />
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>

            {/* Author Box */}
            <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50'}`}>
              <div className="flex items-start space-x-4">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <Link
                    to={`/author/${blog.author.id}`}
                    className={`text-lg font-semibold hover:text-purple-500 ${isDark ? 'text-white' : 'text-gray-900'}`}
                  >
                    {blog.author.name}
                  </Link>
                  <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {blog.author.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {blog.author.expertise.map(exp => (
                      <span
                        key={exp}
                        className={`px-2 py-1 rounded text-xs ${
                          isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-100 text-purple-600'
                        }`}
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className={`mt-8 p-8 rounded-xl text-center ${
              isDark
                ? 'bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-orange-500/20 border border-purple-500/20'
                : 'bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100'
            }`}>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Need Help With Your Digital Marketing?
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Let VisionCut help you grow your brand with expert strategies.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full text-white font-semibold"
              >
                Contact Us Today
              </Link>
            </div>
          </article>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16">
            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedBlogs.map(relatedBlog => (
                <Link key={relatedBlog.id} to={`/blog/${relatedBlog.slug}`} className="group block">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={relatedBlog.featuredImage}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className={`font-semibold group-hover:text-purple-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {relatedBlog.title}
                  </h3>
                  <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {relatedBlog.readTime} min read
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
