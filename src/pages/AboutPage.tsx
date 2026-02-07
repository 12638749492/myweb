import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { reviews } from '../data/content';
import { Target, Eye, Heart, Sparkles, ArrowRight, MessageSquarePlus } from 'lucide-react';
import { SEO, schemas } from '../components/SEO';
import { ReviewCard, ReviewFormModal, ReviewStatsSummary } from '../components/ReviewSystem';

export function AboutPage() {
  const { isDark } = useTheme();
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Calculate aggregate rating for schema
  const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  const values = [
    {
      icon: <Sparkles size={24} />,
      title: 'Creativity',
      description: 'We bring fresh, innovative ideas to every project, ensuring your brand stands out.'
    },
    {
      icon: <Target size={24} />,
      title: 'Results-Driven',
      description: 'Our strategies are focused on delivering measurable outcomes and real growth.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand your goals.'
    },
    {
      icon: <Eye size={24} />,
      title: 'Transparency',
      description: 'Open communication and honest reporting are at the core of how we work.'
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <SEO
        title="About VisionCut - Our Story, Vision & Mission"
        description="Learn about VisionCut, a creative digital marketing agency in Karnataka, India. Discover our story, vision, mission, core values, and meet the team behind the brand."
        keywords="about VisionCut, digital marketing agency Karnataka, creative agency India, our story, team"
        url="https://visioncut.com/about"
        schema={[
          schemas.organization(),
          schemas.aggregateRating(avgRating, reviews.length),
          schemas.webPage({
            title: 'About VisionCut',
            description: 'Our story, vision, mission and values',
            url: 'https://visioncut.com/about'
          }),
          schemas.breadcrumb([
            { name: 'Home', url: 'https://visioncut.com' },
            { name: 'About Us', url: 'https://visioncut.com/about' }
          ])
        ]}
      />
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`} />
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-pink-500' : 'bg-pink-300'}`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className={`text-4xl sm:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">VisionCut</span>
            </h1>
            <p className={`mt-6 text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              We are a creative digital marketing agency based in Karnataka, India, dedicated to helping businesses, creators, startups, and educational institutions grow their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Our Story
              </h2>
              <div className={`space-y-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <p>
                  VisionCut was born from a passion for creativity and a deep understanding of the digital landscape. We recognized that many businesses, especially in Karnataka, needed a partner who could truly understand their vision and translate it into compelling digital experiences.
                </p>
                <p>
                  What started as a small team of creative enthusiasts has grown into a full-service digital marketing agency. We've helped hundreds of clients across various industries achieve their digital goals.
                </p>
                <p>
                  Today, we continue to push the boundaries of creativity while staying grounded in data-driven strategies that deliver real results.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`aspect-square rounded-2xl overflow-hidden ${isDark ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-purple-100 to-pink-100'}`}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="VisionCut Team"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className={`absolute -bottom-6 -left-6 p-6 rounded-xl ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-xl'}`}>
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>5+</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl ${
                isDark
                  ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20'
                  : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                <Eye size={24} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Our Vision
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                To be the most trusted creative partner for businesses and creators across India, empowering them to build powerful digital presences that drive real growth and meaningful connections.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`p-8 rounded-2xl ${
                isDark
                  ? 'bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20'
                  : 'bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                <Target size={24} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Our Mission
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                To deliver exceptional creative solutions and strategic marketing services that help our clients stand out, connect with their audience, and achieve sustainable growth in the digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`py-20 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our Core Values
            </h2>
            <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl text-center ${
                  isDark
                    ? 'bg-gray-800/50 border border-gray-700/50'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                }`}>
                  {value.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {value.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Client Testimonials
            </h2>
            <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              What our clients say about working with us
            </p>
          </motion.div>

          {/* Reviews Stats Summary */}
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <div className="lg:col-span-1">
              <ReviewStatsSummary />
            </div>
            <div className="lg:col-span-3">
              <div className={`h-full p-6 rounded-2xl flex flex-col items-center justify-center text-center ${
                isDark
                  ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20'
                  : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100'
              }`}>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Share Your Experience
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Had a great experience with VisionCut? We'd love to hear from you!
                </p>
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg transition-all"
                >
                  <MessageSquarePlus size={18} className="mr-2" />
                  Write a Review
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Review Form Modal */}
      <ReviewFormModal isOpen={showReviewForm} onClose={() => setShowReviewForm(false)} />

      {/* CTA */}
      <section className={`py-20 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
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
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to Work Together?
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's create something amazing for your brand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full text-white font-semibold shadow-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
