import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export function PrivacyPolicyPage() {
  const { isDark } = useTheme();

  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:
      
• Personal information (name, email address, phone number)
• Business information (company name, website)
• Communication preferences
• Information you provide in forms, surveys, or communications with us
• Technical data (IP address, browser type, device information) when you visit our website`
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send you technical notices, updates, and support messages
• Respond to your comments, questions, and customer service requests
• Communicate with you about products, services, offers, and events
• Monitor and analyze trends, usage, and activities
• Personalize and improve your experience`
    },
    {
      title: 'Cookies and Tracking Technologies',
      content: `We use cookies and similar tracking technologies to:

• Remember your preferences and settings
• Understand how you interact with our website
• Analyze website traffic and performance
• Deliver targeted advertising

You can control cookies through your browser settings. However, disabling cookies may affect your experience on our website.`
    },
    {
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest
• Regular security assessments
• Access controls and authentication
• Secure data storage practices

However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      title: 'Third-Party Services',
      content: `We may use third-party services that collect, monitor, and analyze information, including:

• Google Analytics for website analytics
• Social media platforms for sharing and engagement
• Payment processors for transactions
• Email marketing services for communications

These third parties have their own privacy policies governing their use of your information.`
    },
    {
      title: 'Your Rights',
      content: `You have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your personal information
• Opt-out of marketing communications
• Withdraw consent where processing is based on consent
• Lodge a complaint with a data protection authority

To exercise these rights, please contact us using the information below.`
    },
    {
      title: 'Children\'s Privacy',
      content: `Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.`
    },
    {
      title: 'Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.`
    },
    {
      title: 'Contact Us',
      content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us:

• Email: hello@visioncut.com
• Phone: +91 98765 43210
• Address: Karnataka, India

We will respond to your inquiry within a reasonable timeframe.`
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className={`text-4xl sm:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Privacy Policy
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
              VisionCut ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
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
