import React, { useState } from 'react';
import { Layers, CheckCircle2, Code2, Cpu, ShieldCheck, Server } from 'lucide-react';
import { TECH_STACK_CATEGORIES } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [Code2, Server, Cpu, ShieldCheck];

  return (
    <section id="tech-stack" className="py-16 md:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold text-brand-navy mb-3 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-brand-blue" />
              <span>Verified Engineering Stack</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
              Disciplined Architecture. Zero Speculative Bloat.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every library, database engine, and runtime we use is chosen for type safety, sub-50ms latency, and long-term maintainability.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200 shrink-0">
            {TECH_STACK_CATEGORIES.map((cat, idx) => {
              const IconComp = icons[idx % icons.length];
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-md transition-all cursor-pointer ${
                    activeTab === idx
                      ? 'bg-white text-brand-blue font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-brand-navy'
                  }`}
                >
                  <IconComp className="w-3 h-3" />
                  <span>{cat.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Details Grid */}
        <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs">
          <div className="mb-6 pb-4 border-b border-slate-200/80">
            <h3 className="text-base font-bold text-brand-navy mb-1">
              {TECH_STACK_CATEGORIES[activeTab].category}
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              {TECH_STACK_CATEGORIES[activeTab].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_STACK_CATEGORIES[activeTab].items.map((item) => (
              <div
                key={item.name}
                className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-brand-blue/50 hover:shadow-xs transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    {item.name}
                  </h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <p className="text-xs text-slate-600 mb-3">{item.role}</p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10.5px] font-mono text-slate-400">
                  <span>Verified In:</span>
                  <span className="text-slate-700 font-semibold">{item.verifiedIn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
