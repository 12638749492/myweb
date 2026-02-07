import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export function TermsPage() {
  const { isDark } = useTheme();

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using VisionCut's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and clients of our services.`
    },
    {
      title: 'Services Overview',
      content: `VisionCut provides digital marketing and creative services including but not limited to:

• Graphic Design (thumbnails, social media posts, logos, etc.)
• Video Editing (professional editing, reels, motion graphics)
• Digital Marketing (social media management, ad campaigns)
• SEO & Growth Services
• Academy Services (educational content creation)
• Technical Services (studio setup, PC builds)
• Content Services (writing, scripts, ideation)

The specific deliverables for each project will be outlined in individual project agreements.`
    },
    {
      title: 'User Responsibilities',
      content: `As a client or user of our services, you agree to:

• Provide accurate and complete information
• Respond to communications in a timely manner
• Provide necessary materials, assets, and approvals
• Use our services only for lawful purposes
• Respect intellectual property rights
• Not misrepresent your identity or affiliation
• Pay for services as agreed upon`
    },
    {
      title: 'Payments and Refunds',
      content: `Payment terms:

• Payment terms will be specified in individual project agreements
• We may require advance payment or deposits for certain projects
• Invoices are due within the timeframe specified
• Late payments may incur additional charges

Refund policy:

• Refunds are considered on a case-by-case basis
• Work completed before cancellation is non-refundable
• Deposits may be non-refundable depending on work commenced
• Refund requests must be made within 7 days of delivery`
    },
    {
      title: 'Intellectual Property',
      content: `Ownership and usage rights:

• Upon full payment, clients receive agreed-upon usage rights
• VisionCut retains the right to display work in portfolios
• Source files may be provided based on agreement
• Pre-existing templates and assets remain VisionCut's property
• Client-provided materials remain client's property

You may not claim ownership of our methodologies, processes, or proprietary techniques.`
    },
    {
      title: 'Limitation of Liability',
      content: `VisionCut shall not be liable for:

• Indirect, incidental, or consequential damages
• Loss of profits, data, or business opportunities
• Damages arising from third-party services or platforms
• Results of marketing campaigns (as outcomes depend on multiple factors)
• Delays caused by client non-responsiveness

Our total liability is limited to the amount paid for the specific service in question.`
    },
    {
      title: 'Service Modifications',
      content: `We reserve the right to:

• Modify or discontinue services at any time
• Update pricing for future projects
• Change service terms with reasonable notice
• Refuse service to anyone for any reason

Existing project agreements will be honored according to their terms.`
    },
    {
      title: 'Termination',
      content: `Either party may terminate a project agreement:

• With written notice as specified in the project agreement
• Immediately upon material breach by the other party
• Upon mutual agreement

Upon termination:
• Client pays for work completed
• VisionCut delivers completed work
• Confidential information is returned or destroyed`
    },
    {
      title: 'Governing Law',
      content: `These Terms of Service are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Karnataka, India.

We encourage resolving disputes through direct communication before pursuing legal action.`
    },
    {
      title: 'Contact Information',
      content: `For questions about these Terms of Service, please contact us:

• Email: hello@visioncut.com
• Phone: +91 98765 43210
• Address: Karnataka, India

We aim to respond to all inquiries within 2-3 business days.`
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-pink-500' : 'bg-pink-300'}`} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className={`text-4xl sm:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Terms of Service
            </h1>
            <p className={`mt-6 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Last updated: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900/50 border border-gray-800' : 'bg-gray-50'}`}
          >
            <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Welcome to VisionCut. These Terms of Service ("Terms") govern your use of our website and services. Please read these terms carefully before using our services.
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {section.title}
                  </h2>
                  <div className={`whitespace-pre-line ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
