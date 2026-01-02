import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  { title: "Google Ads Search Certified", year: "2024" },
  { title: "Google Ads Display Certified", year: "2024" },
  { title: "Google Ads Mobile Certified", year: "2024" },
  { title: "Google Analytics Certified", year: "2024" },
  { title: "Google Digital  Garage", year: "2024" },
  { title: "Google Ads Fundamentals", year: "2024" }
];

export default function Certificates() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Google Awards & <span className="text-orange-500">Certificates</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Recognized and certified by Google for our expertise in Digital Print Service
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}