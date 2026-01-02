import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layout,
  Code,
  ShoppingCart,
  Share2,
  Search,
  Mail,
  Megaphone,
  Smartphone,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: "Website Designing",
    description: "Obtain our professional web designing services to create an impressive business page and medium to interact with your customers.",
    subServices: [
      "Static Website Designing",
      "Dynamic Website Designing",
      "Ecommerce Website Designing",
      "Business Website Design",
      "MLM Website Designing"
    ]
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Build a robust online presence of your brand with our flawless website development services using advanced technologies.",
    subServices: [
      "PHP Website Development",
      "Ecommerce Development",
      "Custom Website Development",
      "Payment Gateway Integration"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete e-commerce solutions to help you sell online effectively with secure payment gateways and user-friendly interfaces.",
    subServices: [
      "Online Store Setup",
      "Shopping Cart Integration",
      "Product Management",
      "Secure Payment Gateway"
    ]
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Rank your website on the 1st page of Google with our proven SEO strategies and techniques for maximum visibility.",
    subServices: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Local SEO"
    ]
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence across all major social media platforms with engaging content and targeted campaigns.",
    subServices: [
      "Facebook Marketing",
      "Instagram Marketing",
      "LinkedIn Marketing",
      "Twitter Marketing"
    ]
  },
  {
    icon: Megaphone,
    title: "PPC Advertising",
    description: "Drive immediate traffic to your website with our expertly managed Pay-Per-Click advertising campaigns.",
    subServices: [
      "Google Ads",
      "Facebook Ads",
      "Display Advertising",
      "Remarketing Campaigns"
    ]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Connect with your audience directly through personalized email campaigns that convert prospects into customers.",
    subServices: [
      "Email Campaign Design",
      "Newsletter Services",
      "Automation Setup",
      "Analytics & Tracking"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Create powerful mobile applications for iOS and Android that provide seamless user experiences.",
    subServices: [
      "iOS App Development",
      "Android App Development",
      "Hybrid App Development",
      "App Maintenance"
    ]
  }
];

export default function Services() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Top-Of-The-Line <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive digital marketing and development solutions to grow your business online
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group cursor-pointer border border-transparent hover:border-orange-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-4">
                {service.subServices.slice(0, 3).map((sub, i) => (
                  <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-orange-500" />
                    {sub}
                  </li>
                ))}
              </ul>
              
              <button className="text-orange-600 font-semibold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}