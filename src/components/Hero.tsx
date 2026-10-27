import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Cpu } from 'lucide-react';
import { COMPANY_INFO, STATS_HIGHLIGHTS } from '../data/portfolioData';
import { Button } from './ui/Button';

interface HeroProps {
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }) => {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('work');
    if (el) {
      const navOffset = 85;
      const elPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-36 md:pb-28 bg-white overflow-hidden">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* Subtle Electric Blue Ambient Gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-slate-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Location & Brand Status Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-brand-navy-muted mb-6 tracking-wide shadow-soft-sm">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span>INDEPENDENT TECHNOLOGY COMPANY · COIMBATORE, INDIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-navy leading-[1.08] mb-4">
              WE BUILD <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-600 to-indigo-700">
                WHAT'S NEXT.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-brand-navy-muted tracking-tight mb-4">
              Software. AI. Digital Experiences.
            </p>

            {/* Value Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              {COMPANY_INFO.mission} From high-performance web systems and computer vision models to bespoke software platforms, we engineer solutions built for real business impact.
            </p>

            {/* Action Buttons with Micro-Interactions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                onClick={onOpenContactModal}
                variant="primary"
                size="lg"
                animation="fly-through"
                contextualIcon="phone"
                ariaLabel="Start a Project with SUDHARSHAN_TECH"
              >
                Start a Project
              </Button>

              <Button
                href="#work"
                onClick={scrollToWork}
                variant="secondary"
                size="lg"
                animation="nudge"
                nudgeDirection="right"
                ariaLabel="Explore Our Selected Work"
              >
                Explore Our Work
              </Button>
            </div>

            {/* Trust / Capability Badges */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS_HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-brand-navy">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Digital System Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative mx-auto rounded-2xl bg-brand-navy border border-slate-800 shadow-soft-lg overflow-hidden text-white">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-brand-navy-deep border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">sudharshan_tech // core_engine.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Code / Architecture Display */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-2.5 text-slate-300">
                <div className="text-slate-500">// Sudharshan_Tech System Blueprint</div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">interface</span>
                  <span className="text-yellow-300">TechnologyDeliverable</span>
                  <span className="text-slate-400">{'{'}</span>
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-blue-300">webArchitecture</span>: <span className="text-emerald-300">'Modern React & Next.js'</span>;
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-blue-300">intelligence</span>: <span className="text-emerald-300">'Edge Computer Vision & AI'</span>;
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-blue-300">securityStandards</span>: <span className="text-emerald-300">'Hardened OWASP Verification'</span>;
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-blue-300">deploymentTarget</span>: <span className="text-emerald-300">'Cloud CI/CD & Automated Scale'</span>;
                </div>
                <div className="text-slate-400">{'}'}</div>

                <div className="pt-2 text-slate-500">// Real-time system pipeline status</div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-brand-blue-light" />
                      Vision / AI Model Latency
                    </span>
                    <span className="text-emerald-400 font-semibold">&lt; 38ms</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-blue h-full w-4/5 rounded-full" />
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-brand-blue-light" />
                      Client Work Integrity
                    </span>
                    <span className="text-blue-400 font-semibold">100% Production Verified</span>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Tagline: Code. Create. Elevate.</span>
                  </span>
                  <span className="text-slate-500">Coimbatore Hub</span>
                </div>
              </div>

              {/* Bottom bar with logo brandmark */}
              <div className="px-5 py-3 bg-brand-navy-deep border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  SUDHARSHAN_TECH © 2026
                </span>
                <div className="h-6 w-auto flex items-center">
                  <img
                    src={COMPANY_INFO.officialLogoUrl}
                    alt="SUDHARSHAN_TECH logo"
                    className="h-full w-auto object-contain brightness-110"
                  />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
