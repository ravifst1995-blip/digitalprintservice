import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/home/Contact';




const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most projects see initial results within 30-60 days, with full optimization occurring over 3-6 months depending on scope."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "We have experience across all major industries including e-commerce, SaaS, healthcare, finance, and more."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing based on your needs and budget, with packages starting at $5,000/month."
  },
  {
    question: "How do you measure success?",
    answer: "We focus on ROI and business outcomes—leads, conversions, revenue—not just traffic or vanity metrics."
  }
];

export default function ContactPage() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-violet-300 text-sm font-medium mb-6">
            Contact Us
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's Start Your
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Growth Journey
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Get in touch for a free consultation and discover how we can help 
            transform your digital presence.
          </p>
        </motion.div>
      </section>
      
      {/* Contact Form Section */}
      <Contact />
      
  
      
      {/* FAQ Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about our services.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}