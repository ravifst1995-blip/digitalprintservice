import React from 'react';
import { motion } from 'framer-motion';
import { Users, FolderCheck, TrendingUp, Award } from 'lucide-react';

const stats = [
  { 
    icon: Users,
    value: "489+", 
    label: "Active Clients",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: FolderCheck,
    value: "1059+", 
    label: "Projects Done",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: TrendingUp,
    value: "99%", 
    label: "Success Rate",
    color: "from-orange-500 to-yellow-500"
  },
  { 
    icon: Award,
    value: "90+", 
    label: "Awards",
    color: "from-purple-500 to-pink-500"
  }
];

export default function Stats() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Arrows */}
      <div className="absolute top-10 left-10 w-16 h-16 text-orange-200 opacity-50">
        <svg viewBox="0 0 100 100">
          <path d="M20,80 L80,20 M80,20 L60,20 M80,20 L80,40" stroke="currentColor" strokeWidth="4" fill="none"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-16 h-16 text-orange-200 opacity-50">
        <svg viewBox="0 0 100 100">
          <path d="M80,20 L20,80 M20,80 L40,80 M20,80 L20,60" stroke="currentColor" strokeWidth="4" fill="none"/>
        </svg>
      </div>
    </section>
  );
}