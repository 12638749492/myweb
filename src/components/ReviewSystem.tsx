import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Star, Quote, CheckCircle, Shield, Award, Users, ThumbsUp, X, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews as reviewsData } from '../data/content';

interface ReviewFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  rating: number;
  review: string;
  consent: boolean;
}

// Trust Badges Component
export function TrustBadges() {
  const { isDark } = useTheme();

  const badges = [
    { icon: <Shield size={24} />, label: '100% Secure', sublabel: 'Data Protected' },
    { icon: <Award size={24} />, label: '5+ Years', sublabel: 'Experience' },
    { icon: <Users size={24} />, label: '500+', sublabel: 'Happy Clients' },
    { icon: <ThumbsUp size={24} />, label: '4.9/5', sublabel: 'Average Rating' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`flex flex-col items-center p-4 rounded-xl text-center ${
            isDark
              ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50'
              : 'bg-white border border-gray-200 shadow-sm'
          }`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
            isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
          }`}>
            {badge.icon}
          </div>
          <p className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{badge.label}</p>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{badge.sublabel}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Review Card Component
export function ReviewCard({ review, index = 0 }: { review: typeof reviewsData[0]; index?: number }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative p-6 rounded-2xl h-full ${
        isDark
          ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50'
          : 'bg-white border border-gray-200 shadow-sm'
      }`}
    >
      {/* Quote Icon */}
      <Quote className={`absolute top-4 right-4 ${isDark ? 'text-purple-500/20' : 'text-purple-100'}`} size={40} />
      
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : isDark ? 'text-gray-600' : 'text-gray-300'}
          />
        ))}
        <span className={`ml-2 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {review.rating}.0
        </span>
      </div>

      {/* Review Text */}
      <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        "{review.review}"
      </p>

      {/* Service Badge */}
      <div className="mb-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          isDark ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-purple-100 text-purple-600'
        }`}>
          {review.service}
        </span>
      </div>

      {/* Reviewer Info */}
      <div className="flex items-center space-x-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/20"
        />
        <div>
          <p className={`font-semibold flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {review.name}
            <CheckCircle size={14} className="ml-1 text-green-500" />
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {review.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Reviews Carousel Component
export function ReviewsCarousel() {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredReviews = reviewsData.filter(r => r.featured);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <ReviewCard review={featuredReviews[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          className={`p-2 rounded-full transition-colors ${
            isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {featuredReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-purple-500 w-6'
                  : isDark ? 'bg-gray-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className={`p-2 rounded-full transition-colors ${
            isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

// Reviews Grid Component
export function ReviewsGrid({ limit }: { limit?: number }) {
  const displayReviews = limit ? reviewsData.slice(0, limit) : reviewsData;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayReviews.map((review, index) => (
        <ReviewCard key={review.id} review={review} index={index} />
      ))}
    </div>
  );
}

// Aggregate Rating Display
export function AggregateRatingDisplay() {
  const { isDark } = useTheme();
  const avgRating = reviewsData.reduce((acc, r) => acc + r.rating, 0) / reviewsData.length;
  const totalReviews = reviewsData.length;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`p-6 rounded-2xl text-center ${
        isDark
          ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20'
          : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100'
      }`}
    >
      <div className="flex items-center justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={28}
            className={i < Math.round(avgRating) ? 'text-yellow-400 fill-yellow-400' : isDark ? 'text-gray-600' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {avgRating.toFixed(1)} / 5.0
      </p>
      <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        Based on {totalReviews} reviews
      </p>
    </motion.div>
  );
}

// Review Submission Form
export function ReviewSubmissionForm({ onClose }: { onClose?: () => void }) {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    rating: 5,
    review: '',
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const services = [
    'Graphic Design',
    'Video Editing',
    'Digital Marketing',
    'SEO & Growth',
    'Academy Services',
    'Technical Services',
    'Content Services'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Review submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`p-8 rounded-2xl text-center ${
          isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
        }`}
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Thank You for Your Review!
        </h3>
        <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Your review has been submitted for approval. We appreciate your feedback!
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
          >
            Close
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 sm:p-8 rounded-2xl ${
        isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200 shadow-lg'
      }`}
    >
      {onClose && (
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
        >
          <X size={20} />
        </button>
      )}

      <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Share Your Experience
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Rating */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Your Rating *
          </label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setFormData({ ...formData, rating: star })}
                className="p-1 transition-transform hover:scale-110"
              >
                <Star
                  size={28}
                  className={
                    (hoveredRating || formData.rating) >= star
                      ? 'text-yellow-400 fill-yellow-400'
                      : isDark ? 'text-gray-600' : 'text-gray-300'
                  }
                />
              </button>
            ))}
            <span className={`ml-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {formData.rating} of 5
            </span>
          </div>
        </div>

        {/* Name & Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
              } outline-none`}
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
              } outline-none`}
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Company & Service */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Company/Business
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
              } outline-none`}
              placeholder="Your Company"
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Service Used *
            </label>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
              } outline-none`}
            >
              <option value="">Select a service</option>
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Review Text */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Your Review *
          </label>
          <textarea
            required
            rows={4}
            value={formData.review}
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
              isDark
                ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500'
                : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
            } outline-none`}
            placeholder="Tell us about your experience working with VisionCut..."
          />
        </div>

        {/* Consent */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="consent"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
          />
          <label htmlFor="consent" className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            I consent to VisionCut displaying my review on their website. I confirm this review is genuine and based on my experience.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl text-white font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
        >
          <span>Submit Review</span>
          <Send size={18} />
        </button>
      </form>
    </motion.div>
  );
}

// Modal wrapper for review form
export function ReviewFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto"
          >
            <ReviewSubmissionForm onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Stats Summary Component
export function ReviewStatsSummary() {
  const { isDark } = useTheme();
  const avgRating = reviewsData.reduce((acc, r) => acc + r.rating, 0) / reviewsData.length;

  return (
    <div className={`p-6 rounded-2xl ${
      isDark
        ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50'
        : 'bg-white border border-gray-200 shadow-sm'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Customer Reviews</h3>
        <div className="flex items-center">
          <Star size={20} className="text-yellow-400 fill-yellow-400" />
          <span className={`ml-1 font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {avgRating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Rating Breakdown */}
      {[5, 4, 3, 2, 1].map((rating) => {
        const count = reviewsData.filter(r => r.rating === rating).length;
        const percentage = (count / reviewsData.length) * 100;

        return (
          <div key={rating} className="flex items-center space-x-3 mb-2">
            <span className={`w-8 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{rating}★</span>
            <div className={`flex-1 h-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className={`w-8 text-sm text-right ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {count}
            </span>
          </div>
        );
      })}

      <p className={`text-sm mt-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {reviewsData.length} total reviews
      </p>
    </div>
  );
}
