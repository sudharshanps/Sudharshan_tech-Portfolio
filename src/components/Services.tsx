import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Code, 
  Cpu, 
  Layout, 
  Cloud, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-brand-blue" />;
      case 'Code':
        return <Code className="w-6 h-6 text-brand-blue" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-brand-blue" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-brand-blue" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-brand-blue" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-blue" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-blue" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-brand-slate-soft border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-mono font-semibold text-brand-blue mb-4 uppercase tracking-wider">
            Engineered Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            Services Built for Tangible Business Needs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We don't sell bloated retainers or speculative tech. We engineer targeted digital solutions that solve operational bottlenecks, delight end-users, and scale reliably.
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-soft-sm hover:border-brand-blue/50 hover:shadow-soft-lg transition-all duration-300"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-200">
                      {React.cloneElement(getServiceIcon(service.iconName), {
                        className: 'w-6 h-6 transition-colors duration-200 group-hover:text-white',
                      })}
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Problem & Deliverables Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-5">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block mb-1">
                      Problem We Solve:
                    </span>
                    <p className="text-xs text-slate-700 leading-normal">
                      {service.problem}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block mb-1">
                      What We Deliver:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable How To Get Started */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-2 pb-4 border-t border-slate-100 text-xs text-slate-600 space-y-3"
                    >
                      <div>
                        <span className="font-semibold text-brand-navy block mb-1">How We Get Started:</span>
                        <p className="leading-relaxed bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 text-slate-700">
                          {service.howToStart}
                        </p>
                      </div>

                      <div>
                        <span className="font-semibold text-brand-navy block mb-1.5">Core Technologies:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Card Bottom CTA & Toggle */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-brand-navy transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Less Details' : 'View Scope'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className="group/enq inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/enq:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
