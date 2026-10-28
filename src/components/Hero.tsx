import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, STATS_HIGHLIGHTS } from '../data/portfolioData';
import { Button } from './ui/Button';
import { Hero3DVisual } from './Hero3DVisual';

interface HeroProps {
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }: HeroProps) => {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('work');
    if (el) {
      const navOffset = 70;
      const elPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-white border-b border-slate-200/70 overflow-hidden">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* Subtle Electric Blue Ambient Gradient */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-slate-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Location & Brand Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono font-medium text-brand-navy mb-5 tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span>INDEPENDENT TECHNOLOGY COMPANY · COIMBATORE, INDIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy leading-[1.1] mb-3">
              WE BUILD <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-600 to-indigo-700">
                WHAT'S NEXT.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-semibold text-brand-navy-muted tracking-tight mb-3">
              Software. AI. Digital Experiences.
            </p>

            {/* Value Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed mb-6">
              {COMPANY_INFO.mission} We turn business needs and ideas into thoughtfully engineered web systems, computer vision algorithms, and custom software platforms.
            </p>

            {/* Action Buttons with Exact Icon-Nudge Hover Micro-Interactions */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button
                onClick={onOpenContactModal}
                variant="primary"
                size="md"
                animation="nudge"
                nudgeDirection="right"
                contextualIcon="arrow"
                ariaLabel="Start a project with SUDHARSHAN_TECH"
              >
                Start a Project
              </Button>

              <Button
                href="#work"
                onClick={scrollToWork}
                variant="secondary"
                size="md"
                animation="nudge"
                nudgeDirection="right"
                contextualIcon="arrow"
                ariaLabel="Explore Our Selected Work"
              >
                Explore Our Work
              </Button>
            </div>

            {/* Trust / Capability Badges */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS_HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-brand-navy">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Technology Experience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 w-full flex items-center justify-center"
          >
            <Hero3DVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
