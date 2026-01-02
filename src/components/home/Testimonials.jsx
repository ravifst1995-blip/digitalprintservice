import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    content: "Digital Print Service transformed our entire digital presence. Their SEO strategy alone increased our organic traffic by 340% in just 6 months. They're not just an agency—they're true partners in our growth.",
    rating: 5,
    company: "TechFlow"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, HealthPlus",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    content: "The team's expertise in healthcare marketing is unmatched. They understand compliance requirements while still delivering creative campaigns that resonate with patients. Highly recommended!",
    rating: 5,
    company: "HealthPlus"
  },
  {
    name: "Emma Rodriguez",
    role: "Founder, LuxeStyle",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    content: "Our ROAS went from 2x to 12x within three months of working with Digital Print Service. Their data-driven approach and creative excellence make them stand out from every other agency we've worked with.",
    rating: 5,
    company: "LuxeStyle"
  },
  {
    name: "David Park",
    role: "VP Growth, FinanceHub",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    content: "From app store optimization to performance marketing, Digital Print Service delivered exceptional results. They helped us achieve 2 million downloads and a 4.8-star rating. Truly exceptional work.",
    rating: 5,
    company: "FinanceHub"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden" id="testimonials">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-100/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              What Our Clients
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Don't just take our word for it. Here's what industry leaders 
              have to say about partnering with Digital Print Service.
            </p>
            
            {/* Navigation */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full w-12 h-12 border-slate-300 hover:bg-slate-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full w-12 h-12 border-slate-300 hover:bg-slate-100"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
              <span className="text-slate-500 ml-4">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </motion.div>
          
          {/* Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50"
              >
                <Quote className="w-12 h-12 text-violet-200 mb-6" />
                
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-slate-500 text-sm">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-200 to-blue-200 rounded-full -z-10 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-100 to-violet-100 rounded-3xl -z-10" />
          </div>
        </div>
        
        {/* Logo Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-slate-200"
        >
          <p className="text-center text-sm text-slate-500 mb-8">
            Trusted by 500+ companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {['Stripe', 'Shopify', 'Zendesk', 'Slack', 'Notion', 'Linear'].map((brand) => (
              <span key={brand} className="text-xl font-semibold text-slate-400">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}