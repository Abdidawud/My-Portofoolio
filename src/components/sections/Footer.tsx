import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { MainData } from '../../types';

interface FooterProps {
  data: MainData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">
            Abdi<span className="text-emerald-500">.</span>Dawud
          </h3>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          {data.social.map((item) => {
            const Icon = item.name === 'github' ? Github : item.name === 'linkedin' ? Linkedin : Instagram;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-500 transition-colors"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
        
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Abdi
        </div>
      </div>
    </footer>
  );
};
