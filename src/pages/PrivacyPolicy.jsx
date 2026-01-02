import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const sections = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: `We collect information that you provide directly to us, including:
    
    • Personal information such as name, email address, phone number, and company details when you fill out forms or contact us
    • Payment and billing information when you purchase our services
    • Communications with us, including emails, chat messages, and support requests
    • Information about your use of our website through cookies and similar technologies
    
    We may also collect information from third-party sources such as social media platforms and marketing partners, with your consent.`
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: `We use the information we collect for the following purposes:
    
    • To provide, maintain, and improve our services
    • To process transactions and send related information
    • To communicate with you about our services, including marketing communications (with your consent)
    • To respond to your inquiries and provide customer support
    • To analyze usage patterns and optimize our website performance
    • To detect, prevent, and address technical issues and fraudulent activities
    • To comply with legal obligations and protect our rights
    
    We process your personal data only when we have a valid legal basis to do so.`
  },
  {
    icon: Shield,
    title: "Data Protection & Security",
    content: `We take the security of your personal information seriously and implement appropriate technical and organizational measures:
    
    • Industry-standard encryption for data transmission (SSL/TLS)
    • Secure servers and databases with restricted access
    • Regular security audits and vulnerability assessments
    • Employee training on data protection and privacy
    • Access controls and authentication mechanisms
    
    While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but continuously work to improve our security measures.`
  },
  {
    icon: Eye,
    title: "Sharing Your Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
    
    • With service providers who assist us in operating our business (e.g., hosting, analytics, payment processing)
    • With professional advisors such as lawyers, accountants, and auditors
    • To comply with legal obligations, court orders, or government requests
    • To protect our rights, property, or safety, or that of others
    • In connection with a business transaction such as a merger or acquisition
    
    All third parties we work with are contractually obligated to protect your data and use it only for specified purposes.`
  },
  {
    title: "Cookies and Tracking Technologies",
    content: `We use cookies and similar tracking technologies to collect information about your browsing activities:
    
    • Essential cookies: Required for the website to function properly
    • Analytics cookies: Help us understand how visitors use our website
    • Marketing cookies: Used to deliver relevant advertisements
    
    You can control cookie settings through your browser preferences. Please note that disabling certain cookies may affect website functionality.`
  },
  {
    title: "Your Rights and Choices",
    content: `Depending on your location, you may have certain rights regarding your personal information:
    
    • Access: Request a copy of the personal information we hold about you
    • Correction: Request correction of inaccurate or incomplete information
    • Deletion: Request deletion of your personal information
    • Objection: Object to the processing of your information
    • Portability: Request transfer of your information to another service
    • Withdrawal of consent: Withdraw consent for marketing communications
    
    To exercise these rights, please contact us at Info@digitalprintservice.org.`
  },
  {
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When determining retention periods, we consider:
    
    • The nature and sensitivity of the information
    • Potential risks from unauthorized use or disclosure
    • Legal and regulatory requirements
    • Our legitimate business needs
    
    When we no longer need your information, we securely delete or anonymize it.`
  },
  {
    title: "Children's Privacy",
    content: `Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.`
  },
  {
    title: "International Data Transfers",
    content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information, including:
    
    • Standard contractual clauses approved by relevant authorities
    • Privacy Shield certification (where applicable)
    • Other legally approved transfer mechanisms
    
    By using our services, you consent to the transfer of your information as described in this policy.`
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
    
    • Posting the updated policy on our website
    • Updating the "Last Updated" date
    • Sending you an email notification (for significant changes)
    
    We encourage you to review this policy periodically to stay informed about how we protect your information.`
  },
  {
    title: "Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
    
    Email: Info@digitalprintservice.org
    Phone: ++44 333 006 3919 / +44 333-006-5558
    Address: 27 Old Gloucester St, London WC1B 5AA, United Kingdom`
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
            <Shield className="w-10 h-10 text-violet-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-4">
            Your privacy is important to us. This policy outlines how we collect, 
            use, and protect your personal information.
          </p>
          <p className="text-slate-400">
            Last Updated: January 1, 2025
          </p>
        </motion.div>
      </section>
      
      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
             Digital Print Service ("we," "us," or "our") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Please read this privacy policy carefully. By accessing or using our services, 
              you agree to the terms of this Privacy Policy. If you do not agree with the 
              terms, please do not access or use our services.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Policy Sections */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all"
            >
              {section.icon && (
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-100 to-blue-100 mb-4">
                  <section.icon className="w-6 h-6 text-violet-600" />
                </div>
              )}
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <div className="bg-slate-50 rounded-3xl p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              We're here to help. Contact our privacy team for any questions or concerns.
            </p>
            <a
              href="mailto:Info@digitalprintservice.org"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-medium rounded-full transition-all"
            >
              Contact Privacy Team
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}