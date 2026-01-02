import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const categories = ["All", "E-Commerce", "SaaS", "Healthcare", "Finance"];

const projects = [
  {
    title: "TechFlow SaaS",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    metric: "+340%",
    metricLabel: "Lead Generation",
    description: "Complete digital transformation with SEO, PPC, and conversion optimization."
  },
  {
    title: "HealthPlus Clinic",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    metric: "+520%",
    metricLabel: "Patient Bookings",
    description: "Local SEO and reputation management driving record appointments."
  },
  {
    title: "LuxeStyle Fashion",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    metric: "12x",
    metricLabel: "ROAS Achieved",
    description: "Multi-channel campaign delivering exceptional return on ad spend."
  },
  {
    title: "FinanceHub App",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    metric: "2M+",
    metricLabel: "App Downloads",
    description: "App store optimization and performance marketing success story."
  },
  {
    title: "GreenMart Organic",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
    metric: "+280%",
    metricLabel: "Revenue Growth",
    description: "End-to-end e-commerce strategy from brand to basket."
  },
  {
    title: "CloudSecure Pro",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    metric: "-65%",
    metricLabel: "Cost Per Lead",
    description: "B2B lead generation with account-based marketing precision."
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="relative py-32 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Case Studies That
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Speak Results
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Real campaigns, real metrics, real growth. Explore how we've transformed 
            businesses across industries.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Metric Badge */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-white font-semibold">{project.metric}</span>
                  </div>
                  
                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white/80 text-sm mb-3">{project.description}</p>
                    <div className="flex items-center text-white font-medium">
                      View Case Study
                      <ArrowUpRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm text-violet-600 font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold text-slate-900 mt-1">{project.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{project.metricLabel}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="rounded-full px-8">
            View All Projects
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}