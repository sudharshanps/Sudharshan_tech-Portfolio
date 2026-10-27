import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Target, Sparkles, Terminal } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-brand-navy uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-brand-blue" />
              Company & Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              BUILT FROM COIMBATORE. <br />
              <span className="text-brand-blue">THINKING BEYOND IT.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong>SUDHARSHAN_TECH</strong> is an independent technology engineering company established in Coimbatore, Tamil Nadu. We were founded on a singular conviction: technology delivers its highest value when it is built with purpose, restraint, and obsessive technical rigor.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Instead of rushing speculative AI hype or over-promising unverified software, we partner directly with founders, enterprises, and innovators to turn complex business needs into fast, resilient, and beautifully designed digital systems.
            </p>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-brand-navy text-sm mb-1.5">
                  <Target className="w-4 h-4 text-brand-blue" />
                  <span>Practical Utility</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  We focus on solutions that solve acute operational problems and generate measurable business ROI.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-brand-navy text-sm mb-1.5">
                  <Sparkles className="w-4 h-4 text-brand-blue" />
                  <span>Thoughtful Design</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Interface design is never decoration — it is the bridge between human intention and computational power.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-brand-navy text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  <span>Responsible Engineering</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Clean, well-documented code that your internal engineers can inspect, extend, and deploy with confidence.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-brand-navy text-sm mb-1.5">
                  <Terminal className="w-4 h-4 text-brand-blue" />
                  <span>Transparent Delivery</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Direct communication with developers who actually build your project, ensuring rapid feedback and clarity.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Brand Card with Official Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 to-white p-8 border border-slate-200/90 shadow-soft-lg text-center">
              
              {/* Official Logo Display */}
              <div className="relative w-44 h-44 mx-auto mb-6 flex items-center justify-center p-3 bg-white rounded-2xl border border-slate-200 shadow-soft-sm">
                <img
                  src={COMPANY_INFO.officialLogoUrl}
                  alt="SUDHARSHAN_TECH Official Company Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-black text-brand-navy tracking-tight mb-1">
                SUDHARSHAN_TECH
              </h3>
              <p className="text-xs font-mono text-brand-blue font-semibold uppercase tracking-widest mb-4">
                CODE. CREATE. ELEVATE.
              </p>

              <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto mb-6">
                Independent technology company headquartered in Coimbatore, India. Engineering software, AI, and digital experiences with integrity.
              </p>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-center gap-6 text-xs text-slate-500 font-mono">
                <div>
                  <span className="block font-bold text-brand-navy">Coimbatore</span>
                  <span>Tamil Nadu</span>
                </div>
                <div className="w-px h-6 bg-slate-200" />
                <div>
                  <span className="block font-bold text-brand-navy">Global</span>
                  <span>Standards</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
