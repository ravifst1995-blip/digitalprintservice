import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "Alexandra Stone",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Marcus Williams",
    role: "Chief Strategy Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Jennifer Lee",
    role: "Head of Creative",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "David Kumar",
    role: "Head of Performance",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#"
  }
];

export default function Team() {
  return (
    <section className="relative py-32 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet the Minds Behind
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Your Success
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            A team of seasoned experts passionate about driving digital excellence 
            and delivering measurable results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                <p className="text-slate-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}