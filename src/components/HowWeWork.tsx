import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Palette, Terminal, ShieldAlert, Rocket, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const HowWeWork: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-5 h-5 text-brand-blue" />;
      case '02':
        return <Compass className="w-5 h-5 text-brand-blue" />;
      case '03':
        return <Palette className="w-5 h-5 text-brand-blue" />;
      case '04':
        return <Terminal className="w-5 h-5 text-brand-blue" />;
      case '05':
        return <ShieldAlert className="w-5 h-5 text-brand-blue" />;
      case '06':
        return <Rocket className="w-5 h-5 text-brand-blue" />;
      default:
        return <CheckCircle className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-brand-slate-soft border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-brand-blue mb-4 uppercase tracking-wider">
            Execution Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            How We Work: Transparent & Disciplined
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From initial requirements discovery to cloud handover, our six-phase engineering pipeline ensures clear milestones, zero surprises, and verifiable software deliverables.
          </p>
        </div>

        {/* Process Step Grid (6 steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-soft-sm hover:border-brand-blue/50 hover:shadow-soft-lg transition-all duration-300"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-brand-blue/80 tracking-tighter">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                    {getStepIcon(item.step)}
                  </div>
                </div>

                {/* Title & Headline */}
                <h3 className="text-xl font-bold text-brand-navy mb-1">
                  {item.title}
                </h3>
                <span className="text-xs font-mono text-brand-blue font-medium block mb-3">
                  {item.headline}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Concrete Deliverable */}
              <div className="pt-4 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-0.5">
                  Phase Deliverable:
                </span>
                <span className="text-xs font-medium text-brand-navy flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  {item.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
