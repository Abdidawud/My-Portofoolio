"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { MainData } from '../../types';

interface ContactProps {
  data: MainData;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-emerald-500 font-bold mb-4">Contact</h2>
            <h3 className="text-5xl font-bold text-white mb-8 leading-tight">
              Let’s Build Something <span className="text-emerald-500">Great Together.</span>
            </h3>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              {data.contactmessage} I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email Me</p>
                  <p className="text-white font-medium">{data.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Location</p>
                  <p className="text-white font-medium">{data.address.city}, {data.address.state}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <MagneticButton className="w-full">
                <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all group">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
