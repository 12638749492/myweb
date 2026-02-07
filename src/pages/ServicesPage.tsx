import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { services, serviceCategories, Service } from '../data/services';
import { X, ArrowRight, Check, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO, schemas } from '../components/SEO';

function ServiceModal({ service, onClose, isDark }: { service: Service; onClose: () => void; isDark: boolean }) {
  return (
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
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl ${
          isDark
            ? 'bg-gray-900 border border-gray-700'
            : 'bg-white'
        } shadow-2xl`}
      >
        {/* Header */}
        <div className={`sticky top-0 z-10 p-6 border-b ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
          >
            <X size={20} />
          </button>
          <div className="text-4xl mb-3">{service.icon}</div>
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {service.name}
          </h2>
          <p className={`text-sm ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
            {service.kannada}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Overview</h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{service.overview}</p>
          </div>

          {/* What We Deliver */}
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>What We Deliver</h3>
            <ul className="space-y-2">
              {service.deliverables.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check size={16} className={`mt-1 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Process</h3>
            <div className="space-y-3">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${
                    isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {service.tools.map((tool, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div className={`p-4 rounded-xl ${isDark ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20' : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100'}`}>
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Mini Case Study</h3>
            <div className="space-y-2">
              <div>
                <span className={`text-sm font-medium ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Problem:</span>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.caseStudy.problem}</p>
              </div>
              <div>
                <span className={`text-sm font-medium ${isDark ? 'text-green-400' : 'text-green-600'}`}>Solution:</span>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.caseStudy.solution}</p>
              </div>
              <div>
                <span className={`text-sm font-medium ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>Result:</span>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.caseStudy.result}</p>
              </div>
            </div>
          </div>

          {/* Ideal For */}
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ideal For</h3>
            <div className="flex flex-wrap gap-2">
              {service.idealFor.map((item, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDark ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 'bg-orange-100 text-orange-700'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="block w-full text-center px-6 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl text-white font-semibold hover:shadow-lg transition-all"
          >
            Contact Us for This Service
            <ArrowRight className="inline ml-2" size={18} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ServicesPage() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filteredServices = selectedCategory
    ? services.filter(s => s.category === selectedCategory)
    : services;

  const groupedServices = serviceCategories.map(category => ({
    ...category,
    services: filteredServices.filter(s => s.category === category.id)
  })).filter(g => g.services.length > 0);

  // Generate service schemas
  const serviceSchemas = serviceCategories.map(cat => 
    schemas.service({
      name: cat.name,
      description: `Professional ${cat.name} services by VisionCut - ${cat.kannada}`,
      url: `https://visioncut.com/services#${cat.id}`
    })
  );

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <SEO
        title="Our Services - Graphic Design, Video Editing, Digital Marketing & More"
        description="Explore VisionCut's comprehensive digital services: Graphic Design, Video Editing, Social Media Marketing, SEO, Academy Services, Technical Support, and Content Writing. Serving Karnataka, India."
        keywords="graphic design services, video editing, digital marketing, SEO services, social media management, YouTube thumbnails, logo design, Karnataka, India"
        url="https://visioncut.com/services"
        schema={[
          schemas.webPage({
            title: 'VisionCut Services',
            description: 'Comprehensive digital marketing and creative services',
            url: 'https://visioncut.com/services'
          }),
          schemas.breadcrumb([
            { name: 'Home', url: 'https://visioncut.com' },
            { name: 'Services', url: 'https://visioncut.com/services' }
          ]),
          ...serviceSchemas
        ]}
      />
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`} />
          <div className={`absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-pink-500' : 'bg-pink-300'}`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className={`text-4xl sm:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className={`mt-6 text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Comprehensive digital solutions to help your brand stand out and grow. Click on any service to learn more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className={`py-8 ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {groupedServices.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center space-x-3 mb-8">
                <span className="text-3xl">{group.icon}</span>
                <div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {group.name}
                  </h2>
                  <p className={`text-sm ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                    {group.kannada}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      isDark
                        ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50'
                        : 'bg-white border border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-lg'
                    }`}
                  >
                    {/* Desktop: Click to open modal */}
                    <div
                      className="hidden sm:block"
                      onClick={() => setSelectedService(service)}
                    >
                      <div className="text-3xl mb-4">{service.icon}</div>
                      <h3 className={`font-semibold mb-1 group-hover:text-purple-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {service.name}
                      </h3>
                      <p className={`text-sm mb-3 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        {service.kannada}
                      </p>
                      <p className={`text-sm line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {service.overview}
                      </p>
                      <div className={`mt-4 flex items-center text-sm font-medium ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                        Learn More
                        <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                      </div>
                    </div>

                    {/* Mobile: Accordion */}
                    <div className="sm:hidden">
                      <div
                        onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                        className="flex items-start justify-between"
                      >
                        <div>
                          <div className="text-3xl mb-2">{service.icon}</div>
                          <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {service.name}
                          </h3>
                          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            {service.kannada}
                          </p>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`}
                        />
                      </div>

                      <AnimatePresence>
                        {expandedService === service.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 space-y-4">
                              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {service.overview}
                              </p>
                              <div>
                                <p className={`text-xs font-medium mb-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                  What We Deliver:
                                </p>
                                <ul className="space-y-1">
                                  {service.deliverables.slice(0, 3).map((item, i) => (
                                    <li key={i} className={`text-sm flex items-start space-x-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                      <Check size={12} className="mt-1 text-green-500" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <Link
                                to="/contact"
                                className="block w-full text-center py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium"
                              >
                                Contact for This Service
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
            isDark={isDark}
          />
        )}
      </AnimatePresence>

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
              Can't Find What You're Looking For?
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              We offer custom solutions tailored to your specific needs. Let's discuss your requirements.
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
