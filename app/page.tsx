import React from 'react';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { portfolioData } from '@/data/portfolioData';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] selection:bg-emerald-500/30 selection:text-emerald-500">
      <LoadingScreen />
      <CustomCursor />
      <BackgroundGrid />
      
      <Navbar />
      
      <main>
        <Hero data={portfolioData.main} />
        <About data={portfolioData.main} stats={portfolioData.stats} />
        <Skills skills={portfolioData.resume.skills} />
        <Experience work={portfolioData.resume.work} />
        <Projects projects={portfolioData.portfolio.projects} />
        <Testimonials testimonials={portfolioData.testimonials} />
        <Contact data={portfolioData.main} />
      </main>
      
      <Footer data={portfolioData.main} />
    </div>
  );
}
