import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { toast } from "sonner";

const services = [
  "SEO Optimization",
  "PPC Advertising",
  "Social Media Marketing",
  "Content Marketing",
  "Web Development",
  "Analytics & Reporting"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-violet-300 text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Scale
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                Your Digital Print Service Presence?
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              Let's discuss how we can help you achieve your marketing goals. 
              Get a free consultation and custom strategy tailored to your business.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email us</div>
                  <div className="text-white font-medium">Info@digitalprintservice.org</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Call us</div>
                  <div className="text-white font-medium">+44 333 006 3919 / +44 333-006-5558</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Visit us</div>
                  <div className="text-white font-medium">27 Old Gloucester St, London WC1B 5AA, United Kingdom</div>
                </div>
              </div>
            </div>
            
            {/* Trust Points */}
            <div className="space-y-3">
              {["Free strategy consultation", "No long-term contracts", "Results in 30 days or less"].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Your Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Smith"
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-violet-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@company.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-violet-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Your Company"
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-violet-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Service Interested</label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mb-5">
                <label className="block text-sm text-slate-400 mb-2">Monthly Budget</label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k+">$50,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm text-slate-400 mb-2">Tell us about your project</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="What are your goals? What challenges are you facing?"
                  rows={4}
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-violet-500 resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white py-6 text-lg rounded-xl group"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}