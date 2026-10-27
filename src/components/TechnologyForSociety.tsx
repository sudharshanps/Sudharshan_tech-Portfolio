import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartHandshake,
  Store,
  GraduationCap,
  ShieldCheck,
  Accessibility,
  Compass,
  Sparkles,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Users,
  Lightbulb,
} from 'lucide-react';
import {
  SOCIETY_DATA,
  COMMUNITY_PILLARS,
  COMMUNITY_PROCESS_STEPS,
  COMMUNITY_POLICY_NOTICE,
} from '../data/portfolioData';
import { Button } from './ui/Button';

interface TechnologyForSocietyProps {
  onCollaborate: () => void;
  onOpenSuggestModal: (supportType?: string) => void;
}

export const TechnologyForSociety: React.FC<TechnologyForSocietyProps> = ({
  onCollaborate,
  onOpenSuggestModal,
}) => {
  const getOfferingIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store':
        return <Store className="w-5 h-5 text-brand-blue" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-500" />;
      case 'Accessibility':
        return <Accessibility className="w-5 h-5 text-amber-600" />;
      case 'Compass':
      default:
        return <Compass className="w-5 h-5 text-brand-blue" />;
    }
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-brand-blue" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="society" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      {/* Decorative Technical Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[11px] font-mono font-semibold text-brand-blue mb-3.5 uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Community & Social Commitment</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-3">
            Technology for Everyone
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-4">
            <em>Using technology to create opportunities, solve real-world problems, and make digital solutions accessible to everyone.</em>
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            At <strong>SUDHARSHAN_TECH</strong>, we believe technology should not be limited to large corporations. We aim to use our engineering skills to support grassroots communities, empower students with real-world skills, help local shops grow online, and make digital tools accessible to everyone who needs them.
          </p>
        </div>

        {/* Hero Visual Banner (16:9 Connected Community) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="mb-14 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm"
        >
          <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
            <img
              src="/assets/technology-for-society.jpg"
              alt="Technology for Everyone — Community Collaboration, Students Learning, and Local Business Digital Enablement"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent pointer-events-none" />
            
            {/* Floating Banner Caption */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white pointer-events-none">
              <div className="max-w-xl">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-brand-blue text-white font-semibold inline-block mb-1.5 shadow-xs">
                  Human-Centered Technology
                </span>
                <h3 className="text-base sm:text-xl font-bold drop-shadow-md">
                  Technology Serving People, Not Replacing Them
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 drop-shadow-sm hidden sm:block">
                  Connecting students, neighborhood business owners, and community initiatives with practical software engineering.
                </p>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/60 backdrop-blur-md">
                <Users className="w-3.5 h-3.5 text-brand-blue-glow" />
                <span>Open for Grassroots Dialogue</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 6 What We Can Provide to Society Cards Grid */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs font-mono font-semibold text-brand-blue uppercase tracking-wider block mb-1">
                Practical Capabilities
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
                How We Can Support Communities & Grassroots Needs
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              6 Tailored Pathways for Social & Local Growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOCIETY_DATA.map((offering, idx) => (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs hover:border-brand-blue/40 hover:shadow-sm transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200">
                      {getOfferingIcon(offering.iconName)}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200/80 text-[10px] font-mono font-semibold text-slate-600">
                      {offering.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-brand-navy mb-2">
                    {offering.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {offering.description}
                  </p>

                  {/* Bullet Offerings List */}
                  <div className="space-y-2 mb-4 pt-3 border-t border-slate-100">
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-slate-400 font-medium block">
                      Key Exploratory Offerings:
                    </span>
                    <ul className="space-y-1.5">
                      {offering.offerings.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Disclaimer notice if present */}
                  {offering.disclaimer && (
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10.5px] text-slate-500 font-mono leading-relaxed mb-4">
                      {offering.disclaimer}
                    </div>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onOpenSuggestModal(offering.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors cursor-pointer group"
                  >
                    <span>Discuss This Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Impact Showcase: Small Steps. Meaningful Impact. */}
        <div className="mb-16 p-6 sm:p-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-semibold text-brand-blue uppercase tracking-wider block mb-1">
              Guiding Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
              Small Steps. Meaningful Impact.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We focus on honest, sustainable improvements over marketing claims. Here are the three pillars that shape our community orientation:
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {COMMUNITY_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-navy">{pillar.title}</h4>
                    <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
                      {pillar.tagline}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Subtle Visual Process Pipeline */}
          <div className="pt-8 border-t border-slate-100">
            <div className="mb-4">
              <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block">
                How We Approach Community Challenges
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {COMMUNITY_PROCESS_STEPS.map((proc) => (
                <div
                  key={proc.step}
                  className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200 relative group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-brand-blue bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Phase 0{proc.step}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-brand-navy mb-1">{proc.title}</h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two Prominent Calls to Action & Policy Disclosure */}
        <div className="p-8 sm:p-10 rounded-3xl bg-brand-navy text-white border border-slate-800 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-brand-blue-glow border border-blue-400/30 text-[11px] font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Something Helpful Together</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Have a Local Need or Educational Initiative?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Whether you run a neighborhood shop seeking your first website, a student group organizing a technology workshop, or an NGO addressing community challenges, we welcome open dialogue.
              </p>
            </div>

            {/* 2 Prominent Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                onClick={onCollaborate}
                variant="primary"
                size="md"
                contextualIcon="none"
                className="text-xs font-mono justify-center"
              >
                <span className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Collaborate With Us</span>
                </span>
              </Button>

              <Button
                onClick={() => onOpenSuggestModal()}
                variant="secondary"
                size="md"
                contextualIcon="none"
                className="text-xs font-mono justify-center bg-slate-800/80 text-white border-slate-700 hover:bg-slate-700 hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>Suggest a Community Problem</span>
                </span>
              </Button>
            </div>

            {/* Policy Disclosure */}
            <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 leading-relaxed">
              <span className="text-slate-300 font-semibold block mb-0.5">
                {COMMUNITY_POLICY_NOTICE.title}
              </span>
              {COMMUNITY_POLICY_NOTICE.message}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
