import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, Instagram, Quote, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/portfolioData';
import { Button } from './ui/Button';

interface TeamProps {
  onOpenContactModal: () => void;
}

export const Team: React.FC<TeamProps> = ({ onOpenContactModal }: TeamProps) => {
  return (
    <section id="team" className="py-16 md:py-20 bg-brand-slate-soft border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Compact and Proportional */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono font-semibold text-brand-blue mb-3 uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-brand-blue" />
            Leadership & Team
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
            THE PEOPLE BEHIND THE PROGRESS.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Meet the people helping shape our ideas, strengthen our collaborations and build meaningful digital solutions.
          </p>
        </div>

        {/* Vertically Stacked Compact Team Cards (Founder First, Harini Second) */}
        <div className="space-y-6">
          {TEAM_MEMBERS.map((member, index) => {
            const isFounder = member.id === 'sudharshan-ps';

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                className="group relative bg-white rounded-xl border border-slate-200 shadow-sm hover:border-brand-blue/40 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col sm:flex-row items-stretch"
              >
                {/* 1. Compact Portrait Photograph (170-190px wide on desktop) */}
                <div className="w-full sm:w-44 md:w-48 bg-slate-100 shrink-0 relative overflow-hidden sm:border-r border-b sm:border-b-0 border-slate-200/80">
                  <div className="aspect-[4/5] sm:h-full w-full relative">
                    <img
                      src={member.image}
                      alt={member.altText}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Subtle Tagline Badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/95 backdrop-blur-md text-brand-navy shadow-sm border border-slate-200">
                        {member.tagline}
                      </span>
                    </div>

                    {isFounder && (
                      <div className="absolute top-2.5 right-2.5 sm:hidden">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-brand-blue text-white shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Founder</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. Compact Profile Details on the Right */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Top Row: Name & Designation */}
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                      <div>
                        <span className="text-[11px] font-mono font-bold text-brand-blue uppercase tracking-wider block">
                          {member.designation}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
                          {member.name}
                        </h3>
                      </div>

                      {isFounder && (
                        <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-blue-50 text-brand-blue border border-blue-200">
                          <Sparkles className="w-3 h-3" />
                          <span>Executive Lead</span>
                        </span>
                      )}
                    </div>

                    {/* Short Biography */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {member.description}
                    </p>

                    {/* Quote */}
                    {member.quote && (
                      <div className="p-2.5 rounded-lg bg-slate-50 border-l-2 border-brand-blue text-xs text-brand-navy font-medium italic mb-3 flex items-start gap-2">
                        <Quote className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5 opacity-80" />
                        <span>"{member.quote}"</span>
                      </div>
                    )}

                    {/* Focus Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] border border-slate-200/60"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row: Verified Working Contact & Social Links */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    {isFounder ? (
                      <div className="flex flex-wrap items-center gap-2">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}?subject=Project%20Enquiry%20%E2%80%94%20SUDHARSHAN_TECH`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors text-xs font-medium border border-blue-200/80"
                            title="Direct Email to Founder"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>{member.email}</span>
                          </a>
                        )}

                        {member.phone && (
                          <a
                            href={`tel:${member.phone.replace(/\s+/g, '')}`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-xs font-medium border border-slate-200"
                            title="Call / WhatsApp"
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
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:text-pink-600 hover:bg-slate-200 transition-colors text-xs font-medium border border-slate-200"
                            title="Company Instagram"
                          >
                            <Instagram className="w-3.5 h-3.5 text-pink-600" />
                            <span>@sudharshan_tech</span>
                          </a>
                        )}
                      </div>
                    ) : (
                      <span className="text-xs text-slate-500 font-mono">
                        SUDHARSHAN_TECH Business Development
                      </span>
                    )}

                    <div>
                      <Button
                        onClick={onOpenContactModal}
                        variant="ghost"
                        size="sm"
                        animation="nudge"
                        nudgeDirection="right"
                        contextualIcon="arrow"
                        ariaLabel="Enquire to collaborate with SUDHARSHAN_TECH"
                        className="!px-2 text-brand-blue hover:text-brand-blue-dark"
                      >
                        Enquire to Collaborate
                      </Button>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Culture / Philosophy Note - Compact */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm text-xs text-slate-600 leading-relaxed">
          We partner with businesses to transform complex engineering ideas into clean, maintainable, and high-impact digital products. Every collaboration is backed by direct communication with our leadership.
        </div>

      </div>
    </section>
  );
};
