"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group h-[400px] w-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden cursor-pointer backdrop-blur-sm"
    >
      <div
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0 p-6 flex flex-col justify-end"
      >
        {/* Image Background */}
        <div className="absolute inset-0 z-[-1]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] uppercase tracking-wider font-semibold mb-3">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-3 mb-6 group-hover:text-gray-300 transition-colors">
            {project.description}
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-emerald-500 transition-colors text-sm font-medium"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              <Github size={16} />
              Source
            </a>
          </div>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-[-2px] bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl" />
      </div>
    </motion.div>
  );
};
