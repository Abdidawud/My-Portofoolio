"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCard } from '../ui/ProjectCard';
import { Project } from '../../types';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-emerald-500 font-bold mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold text-white">Featured Projects</h3>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat
                    ? 'bg-emerald-500 text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
