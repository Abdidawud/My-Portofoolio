"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Work } from '../../types';

interface ExperienceProps {
  work: Work[];
}

export const Experience: React.FC<ExperienceProps> = ({ work }) => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-emerald-500 font-bold mb-4">Journey</h2>
          <h3 className="text-4xl font-bold text-white">Professional Experience</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-500/50 via-white/10 to-transparent" />

          <div className="space-y-16">
            {work.map((job, index) => (
              <motion.div
                key={job.company + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-0 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10" />

                <div className="w-full md:w-1/2">
                  <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all group ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider mb-4">
                      {job.years}
                    </span>
                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-500 transition-colors">
                      {job.title}
                    </h4>
                    <p className="text-emerald-500/80 font-medium mb-4">{job.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
