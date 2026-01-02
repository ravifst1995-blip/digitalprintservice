import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Zap, Target, TrendingUp } from 'lucide-react';
import About from '../components/home/About';
import Team from '../components/home/Team';
import Testimonials from '../components/home/Testimonials';

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by your ROI and business growth, not vanity metrics."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We treat your business as our own."
  },
  {
    icon: TrendingUp,
    title: "Innovation First",
    description: "We stay ahead of trends to give you a competitive advantage."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning strategies backed by industry certifications and expertise."
  }
];

export default function AboutPage() {
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
            About Digital Print Service
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transforming Brands Through
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Since 2012, we've been helping businesses grow through innovative digital 
            marketing strategies that deliver measurable results.
          </p>
        </motion.div>
      </section>
      
      {/* Main About Section */}
      <About />
      
      {/* Our Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Drives Us
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              Our core values guide everything we do, from client relationships 
              to campaign execution.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-violet-100 to-blue-100 mb-4">
                  <value.icon className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "150+", label: "Team Members" },
              { value: "12", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <Team />
      
      {/* Testimonials */}
      <Testimonials />
    </>
  );
}