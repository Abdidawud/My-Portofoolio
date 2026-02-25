"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-emerald-500 font-bold mb-4">Feedback</h2>
          <h3 className="text-4xl font-bold text-white">Client Testimonials</h3>
        </div>

        <div className="relative h-[400px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center"
            >
              <Quote className="text-emerald-500/20 w-16 h-16 mb-6" />
              <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
                "{testimonials[index].text}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-white">{testimonials[index].user}</h4>
                <p className="text-sm text-emerald-500 font-medium">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === i ? 'w-8 bg-emerald-500' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
