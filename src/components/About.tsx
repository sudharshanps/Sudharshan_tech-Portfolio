import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Target, Sparkles, Terminal } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';
import { Card3D } from './ui/Card3D';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Story & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold text-brand-navy uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-brand-blue" />
              Company & Philosophy
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              BUILT FROM COIMBATORE. <br />
              <span className="text-brand-blue">THINKING BEYOND IT.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>SUDHARSHAN_TECH</strong> is an independent technology engineering company established in Coimbatore, Tamil Nadu. Founded by Sudharshan.P.S, we operate on a core principle: technology delivers its highest value when engineered with purpose, restrained design, and technical rigor.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Instead of chasing speculative hype or unverified claims, we partner directly with founders and businesses to turn complex needs into resilient, scalable digital systems.
            </p>

            {/* Core Values / Pillars - Compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-brand-navy text-xs mb-1">
                  <Target className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Practical Utility</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Solutions that resolve operational bottlenecks and generate measurable business value.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-brand-navy text-xs mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Thoughtful Design</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Interface design that connects human intention with reliable computational architecture.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-brand-navy text-xs mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Responsible Engineering</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Clean, maintainable codebases with verified testing and complete operational ownership.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-brand-navy text-xs mb-1">
                  <Terminal className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Transparent Delivery</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Direct communication with developers who actually build your project, ensuring rapid clarity.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Brand Card with 3D Depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <Card3D maxTilt={4}>
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 to-white p-6 border border-slate-200 shadow-sm text-center">
                
                {/* Official Logo Display */}
                <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <img
                    src={COMPANY_INFO.officialLogoUrl}
                    alt="SUDHARSHAN_TECH Official Company Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-extrabold text-brand-navy tracking-tight mb-0.5">
                  SUDHARSHAN_TECH
                </h3>
                <p className="text-[11px] font-mono text-brand-blue font-bold uppercase tracking-widest mb-3">
                  CODE. CREATE. ELEVATE.
                </p>

                <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto mb-4">
                  Independent technology company headquartered in Coimbatore, India. Engineering software, AI, and digital experiences with integrity.
                </p>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-center gap-6 text-[11px] text-slate-500 font-mono">
                  <div>
                    <span className="block font-bold text-brand-navy">Coimbatore</span>
                    <span>Tamil Nadu</span>
                  </div>
                  <div className="w-px h-5 bg-slate-200" />
                  <div>
                    <span className="block font-bold text-brand-navy">Global</span>
                    <span>Standards</span>
                  </div>
                </div>

              </div>
            </Card3D>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
