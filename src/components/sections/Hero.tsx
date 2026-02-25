"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, ArrowRight, Download } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { MainData } from '../../types';

interface HeroProps {
  data: MainData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const [displayText, setDisplayText] = useState('');
  const occupation = data.occupation;
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(occupation.substring(0, i));
      i++;
      if (i > occupation.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [occupation]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold tracking-widest uppercase mb-6"
        >
          Available for new opportunities
        </motion.span>
        
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
          {data.name.split(' ')[0]}
          <span className="text-emerald-500">.</span>
          <br />
          {data.name.split(' ')[1]}
        </h1>
        
        <div className="h-8 mb-8">
          <p className="text-xl md:text-2xl text-gray-400 font-mono">
            {displayText}
            <span className="animate-pulse text-emerald-500">|</span>
          </p>
        </div>
        
        <p className="max-w-xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
          {data.description}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          <MagneticButton>
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-full flex items-center gap-2 transition-all group">
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </MagneticButton>
          
          <MagneticButton>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = data.resumedownload;
                link.download = 'Abdi_Dawud_Resume.pdf';
                link.click();
              }}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 flex items-center gap-2 transition-all"
            >
              Download CV
              <Download size={20} />
            </button>
          </MagneticButton>
        </div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8"
      >
        {data.social.map((item) => {
          const Icon = item.name === 'github' ? Github : item.name === 'linkedin' ? Linkedin : Instagram;
          return (
            <MagneticButton key={item.name}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-500 transition-colors"
              >
                <Icon size={24} />
              </a>
            </MagneticButton>
          );
        })}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 right-12 hidden md:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 rotate-90 origin-right translate-x-4">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
      </motion.div>
    </section>
  );
};
