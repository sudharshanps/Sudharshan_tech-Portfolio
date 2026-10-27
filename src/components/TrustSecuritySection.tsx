import React from 'react';
import { ShieldCheck, Lock, Eye, AlertOctagon, Activity, FileCheck } from 'lucide-react';
import { SECURITY_PRACTICES } from '../data/portfolioData';

export const TrustSecuritySection: React.FC = () => {
  const icons = [Lock, Eye, AlertOctagon, ShieldCheck, Activity, FileCheck];

  return (
    <section id="security" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-semibold text-emerald-800 mb-3 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Practical Engineering Integrity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
            Trust Built on Verifiable Security Practices.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We do not make unsupported claims or invent generic compliance logos. Instead, we implement concrete security standards on every codebase we deliver.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECURITY_PRACTICES.map((item, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={item.title}
                className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Enforced Across All Deliverables</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
