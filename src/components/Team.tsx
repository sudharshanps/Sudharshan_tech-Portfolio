import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, TrendingUp, Mail } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/portfolioData';

interface TeamProps {
  onOpenContactModal: () => void;
}

export const Team: React.FC<TeamProps> = ({ onOpenContactModal }) => {
  return (
    <section id="team" className="py-20 md:py-28 bg-brand-slate-soft border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-brand-blue mb-4 uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-brand-blue" />
            Meet Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            THE PEOPLE BEHIND THE PROGRESS.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Meet the people helping shape our ideas, strengthen our collaborations and build meaningful digital solutions.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => {
            const isSpotlight = member.isSpotlight;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`group relative flex flex-col sm:flex-row bg-white rounded-2xl border ${
                  isSpotlight
                    ? 'border-brand-blue/30 shadow-soft-lg ring-1 ring-brand-blue/10'
                    : 'border-slate-200/90 shadow-soft-sm'
                } hover:border-brand-blue/60 hover:shadow-soft-lg transition-all duration-300 overflow-hidden`}
              >
                {/* Photo Column */}
                <div className="sm:w-2/5 relative bg-slate-100 overflow-hidden shrink-0">
                  <div className="aspect-[4/5] sm:h-full w-full relative">
                    <img
                      src={member.image}
                      alt={member.altText}
                      className={`w-full h-full ${
                        member.id === 'harini-r'
                          ? 'object-cover object-top transition-transform duration-500 group-hover:scale-105'
                          : 'object-contain p-6 bg-slate-900 transition-transform duration-500 group-hover:scale-105'
                      }`}
                      loading="lazy"
                    />

                    {/* Subtle Overlay Badge on Image */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-white/90 backdrop-blur-md text-brand-navy shadow-sm border border-slate-200/60">
                        {member.company}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Tagline & Status */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-brand-blue font-semibold tracking-wider uppercase">
                        {member.tagline}
                      </span>
                      {isSpotlight && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-blue-50 text-brand-blue border border-blue-100">
                          <TrendingUp className="w-3 h-3" />
                          Growth & Outreach
                        </span>
                      )}
                    </div>

                    {/* Member Name */}
                    <h3 className="text-2xl font-bold text-brand-navy tracking-tight mb-1 group-hover:text-brand-blue transition-colors">
                      {member.name}
                    </h3>

                    {/* Role Title */}
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-3.5 leading-snug">
                      {member.role}
                    </p>

                    {/* Short Description / Bio */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4">
                      {member.description}
                    </p>

                    {/* Key Contributions / Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                        Focus Areas:
                      </span>
                      {member.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3 h-3 text-brand-blue shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Connect / Collaboration note */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono text-[11px]">Coimbatore, IN</span>
                    <button
                      onClick={onOpenContactModal}
                      className="inline-flex items-center gap-1 font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Collaborate</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Culture / Philosophy Note */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-soft-sm">
          <p className="text-sm text-slate-600 leading-relaxed">
            At SUDHARSHAN_TECH, every team member directly contributes to client outcomes, market growth, and technical standards. We foster transparent communication, continuous learning, and dependable delivery.
          </p>
        </div>

      </div>
    </section>
  );
};
