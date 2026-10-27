import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, Instagram, Quote, Sparkles } from 'lucide-react';
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
            Our Leadership & Team
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            THE PEOPLE BEHIND THE PROGRESS.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Meet the people helping shape our ideas, strengthen our collaborations and build meaningful digital solutions.
          </p>
        </div>

        {/* Vertically Stacked Cards Container (Founder First, Harini Second) */}
        <div className="max-w-2xl mx-auto space-y-12">
          {TEAM_MEMBERS.map((member, index) => {
            const isFounder = member.id === 'sudharshan-ps';

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
                className={`group relative bg-white rounded-3xl border ${
                  isFounder
                    ? 'border-brand-blue/40 shadow-soft-lg ring-1 ring-brand-blue/15'
                    : 'border-slate-200/90 shadow-soft-sm'
                } hover:border-brand-blue/60 hover:shadow-soft-lg transition-all duration-300 overflow-hidden flex flex-col`}
              >
                {/* 1. Photograph at the Top of Profile Card (Clean 4:5 or Portrait Ratio) */}
                <div className="relative w-full bg-slate-100 border-b border-slate-100 flex items-center justify-center overflow-hidden">
                  <div className="w-full max-w-md mx-auto aspect-[4/5] relative">
                    <img
                      src={member.image}
                      alt={member.altText}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Company Tagline & Identity Overlay Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/95 backdrop-blur-md text-brand-navy shadow-sm border border-slate-200">
                        {member.company} · {member.tagline}
                      </span>
                    </div>

                    {isFounder && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-blue text-white shadow-sm flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Executive Lead</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. Details Underneath Photograph */}
                <div className="p-7 sm:p-9 space-y-5">
                  
                  {/* Name & Designation */}
                  <div>
                    <span className="text-xs font-mono text-brand-blue font-bold tracking-widest uppercase block mb-1">
                      {member.designation}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                      {member.name}
                    </h3>
                  </div>

                  {/* Bio */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Founder / Team Quote */}
                  {member.quote && (
                    <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-brand-blue border-slate-200/80 flex items-start gap-3">
                      <Quote className="w-5 h-5 text-brand-blue shrink-0 mt-0.5 opacity-80" />
                      <p className="text-sm font-medium italic text-brand-navy">
                        "{member.quote}"
                      </p>
                    </div>
                  )}

                  {/* Highlights / Focus Areas */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                      Core Focus & Domain
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {member.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs border border-slate-200/70"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact & Verified Social Links */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    {isFounder ? (
                      <div className="flex flex-wrap items-center gap-3">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}?subject=Project%20Enquiry%20%E2%80%94%20SUDHARSHAN_TECH`}
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white transition-all text-xs font-semibold border border-blue-200/80"
                            title="Direct Email to Founder"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>{member.email}</span>
                          </a>
                        )}

                        {member.phone && (
                          <a
                            href={`tel:${member.phone.replace(/\s+/g, '')}`}
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all text-xs font-semibold border border-slate-200"
                            title="Direct Phone / WhatsApp"
                          >
                            <Phone className="w-3.5 h-3.5 text-brand-blue" />
                            <span>{member.phone}</span>
                          </a>
                        )}

                        {member.instagramUrl && (
                          <a
                            href={member.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 text-slate-700 hover:text-brand-blue hover:bg-slate-200 transition-all text-xs font-semibold border border-slate-200"
                            title="Company Instagram"
                          >
                            <Instagram className="w-3.5 h-3.5 text-pink-600" />
                            <span>@sudharshan_tech</span>
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>SUDHARSHAN_TECH Business & Partnerships</span>
                      </div>
                    )}

                    <div>
                      <button
                        onClick={onOpenContactModal}
                        className="text-xs font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors cursor-pointer"
                      >
                        Enquire to Collaborate →
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Culture / Collaboration Note */}
        <div className="mt-14 max-w-2xl mx-auto p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-soft-sm">
          <p className="text-sm text-slate-600 leading-relaxed">
            We partner with businesses to transform complex engineering ideas into clean, maintainable, and high-impact digital products. Every collaboration is backed by direct communication and technical accountability.
          </p>
        </div>

      </div>
    </section>
  );
};
