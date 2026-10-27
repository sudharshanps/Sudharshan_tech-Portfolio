import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Palette, Terminal, ShieldAlert, Rocket, CheckCircle, Activity } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const HowWeWork: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-4 h-4 text-brand-blue" />;
      case '02':
        return <Compass className="w-4 h-4 text-brand-blue" />;
      case '03':
        return <Palette className="w-4 h-4 text-brand-blue" />;
      case '04':
        return <Terminal className="w-4 h-4 text-brand-blue" />;
      case '05':
        return <ShieldAlert className="w-4 h-4 text-brand-blue" />;
      case '06':
        return <Rocket className="w-4 h-4 text-brand-blue" />;
      case '07':
        return <Activity className="w-4 h-4 text-brand-blue" />;
      default:
        return <CheckCircle className="w-4 h-4 text-brand-blue" />;
    }
  };

  return (
    <section id="process" className="py-16 md:py-20 bg-brand-slate-soft border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono font-semibold text-brand-blue mb-3 uppercase tracking-wider">
            Execution Framework
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
            How We Work: Transparent & Disciplined
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            From initial requirements discovery to cloud handover and ongoing telemetry, our 7-stage engineering pipeline ensures clear milestones, zero surprises, and verifiable deliverables.
          </p>
        </div>

        {/* Process Step Grid (6 compact steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCESS_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="relative flex flex-col justify-between bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-brand-blue/50 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xl font-black text-brand-blue tracking-tighter">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                    {getStepIcon(item.step)}
                  </div>
                </div>

                {/* Title & Headline */}
                <h3 className="text-base font-bold text-brand-navy mb-0.5">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono text-brand-blue font-medium block mb-2">
                  {item.headline}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Concrete Deliverable */}
              <div className="pt-3 border-t border-slate-100 bg-slate-50 -mx-5 -mb-5 p-3 rounded-b-xl">
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-0.5">
                  Phase Deliverable:
                </span>
                <span className="text-[11px] font-medium text-brand-navy flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
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
