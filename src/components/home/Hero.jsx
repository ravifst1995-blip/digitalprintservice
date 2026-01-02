import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

const slides = [
  {
    title: "Rank Your Website On 1st Page of Google Search",
    description: "If your ultimate business goal is to generate numerous leads quickly, you've come to the right place. We are a leading Digital Marketing Agency rendering success-proven business solutions worldwide.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    title: "Rated As Number #1 Digital Marketing Agency",
    description: "Did you try every potential aspect but couldn't make it for your business? It's high time you think of the one-time investment with us. We're a certified and exceedingly experienced Digital Marketing agency.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
  },
  {
    title: "Grow Your Business With Expert SEO & Marketing",
    description: "Transform your online presence with data-driven strategies. We help businesses achieve top rankings on search engines and drive targeted traffic that converts.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-gradient-to-br from-slate-50 to-orange-50 overflow-hidden">
      {/* Decorative Dotted Arrows */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="text-orange-400">
          <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)"/>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="currentColor" />
            </marker>
          </defs>
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-10 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="text-orange-400 rotate-180">
          <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead2)"/>
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
              <polygon points="0 0, 10 5, 0 10" fill="currentColor" />
            </marker>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <Link to={createPageUrl("About")}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all group uppercase font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src={slides[currentSlide].image}
                alt="Digital Marketing"
                className="w-full h-[400px] md:h-[500px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-orange-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-8 bg-orange-500' 
                    : 'w-2 bg-slate-300 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-orange-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>
      
      {/* Floating Call Button */}
      <a 
        href="tel:+919910075663"
        className="fixed left-6 bottom-6 w-14 h-14 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="absolute left-16 bg-slate-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Give Us a Call
        </span>
      </a>
    </section>
  );
}