import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Code, 
  Cpu, 
  Layout, 
  Cloud, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { Button } from './ui/Button';
import { Card3D } from './ui/Card3D';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }: ServicesProps) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-brand-blue" />;
      case 'Code':
        return <Code className="w-5 h-5 text-brand-blue" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-brand-blue" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-brand-blue" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-brand-blue" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-brand-blue" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-blue" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-brand-slate-soft border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono font-semibold text-brand-blue mb-3 uppercase tracking-wider">
            Engineered Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
            Services Built for Business Needs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We engineer targeted digital solutions that solve operational bottlenecks, delight end-users, and scale reliably.
          </p>
        </div>

        {/* Services Grid (6 compact 3D tilt cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_DATA.map((service, index) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="h-full"
              >
                <Card3D maxTilt={3.5} className="h-full">
                  <div className="h-full flex flex-col justify-between bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-brand-blue/50 hover:shadow-md transition-all duration-200">
                    <div>
                      {/* Top Row: Icon & Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100 text-brand-blue">
                          {getServiceIcon(service.iconName)}
                        </div>
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/70">
                          {service.badge}
                        </span>
                      </div>

                      {/* Title & Short Description */}
                      <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-1.5">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>

                      {/* Problem Solved */}
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 mb-4 text-xs">
                        <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block mb-0.5">
                          Problem We Solve:
                        </span>
                        <p className="text-slate-700 leading-normal">
                          {service.problem}
                        </p>
                      </div>

                      {/* Key Deliverables */}
                      <div className="space-y-1.5 mb-4">
                        <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block mb-0.5">
                          What We Deliver:
                        </span>
                        {service.deliverables.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Expandable Details */}
                      {isExpanded && (
                        <div className="pt-2 pb-3 border-t border-slate-100 text-xs text-slate-600 space-y-2.5">
                          <div>
                            <span className="font-semibold text-brand-navy block mb-1">How We Get Started:</span>
                            <p className="leading-relaxed bg-blue-50/50 p-2 rounded border border-blue-100 text-slate-700 text-[11px]">
                              {service.howToStart}
                            </p>
                          </div>

                          <div>
                            <span className="font-semibold text-brand-navy block mb-1">Core Technologies:</span>
                            <div className="flex flex-wrap gap-1">
                              {service.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Bottom CTA & Toggle */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-brand-navy transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? 'Less Details' : 'View Scope'}</span>
                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>

                      <Button
                        onClick={() => onSelectServiceForInquiry(service.title)}
                        variant="ghost"
                        size="sm"
                        animation="nudge"
                        nudgeDirection="right"
                        contextualIcon="arrow"
                        ariaLabel={`Enquire about ${service.title}`}
                        className="!px-2 text-brand-blue hover:text-brand-blue-dark"
                      >
                        Enquire
                      </Button>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
