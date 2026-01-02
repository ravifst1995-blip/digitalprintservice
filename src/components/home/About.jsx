import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

export default function About() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=600&fit=crop"
                alt="Google Partner"
                className="w-full rounded-3xl shadow-2xl"
              />
              {/* Google Partner Badge Overlay */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl">
                <Award className="w-12 h-12 text-orange-500 mb-2" />
                <p className="text-sm font-semibold text-slate-900">Google Premier</p>
                <p className="text-xs text-slate-600">Partner</p>
              </div>
            </div>
            
            {/* Decorative Circle */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-200 rounded-full -z-10 opacity-50" />
          </motion.div>
          
          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Boost Your Business With{' '}
              <span className="text-orange-500">Digital Print Service</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Digital Print Service is already pleased to have you here! As you're here to meet your 
              coveted marketing goals and expand your online business, we hereby commit you to cater 
              the best among the rest of the solutions.
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With high innovation, smart approaches and multi-task skills, Digital Print Service
              is always the optimal choice to make for your marketing & advertising needs. We believe 
              in facilitating business roles in diverse aspects to help business owners and entrepreneurs 
              achieve organisational milestones.
            </p>
            
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Welcome to Digital Print Service® || Google SME Premier Partner
              </h3>
              <p className="text-slate-700">
                We have been serving in business marketing & promotions for more than a decade and 
                encompass a team of truly skilled & professional experts with 360-degree Digital Print solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to={createPageUrl("About")}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 rounded-full uppercase font-semibold"
                >
                  Learn More
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 rounded-full uppercase font-semibold"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}