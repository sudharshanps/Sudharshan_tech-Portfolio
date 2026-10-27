import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, ShieldCheck, Code2, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'client' | 'ai' | 'prototypes'>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'client') return project.isClientWork;
    if (filter === 'ai') return project.id === 'ai-invigilation' || project.id === 'air-painting';
    if (filter === 'prototypes') return !project.isClientWork;
    return true;
  });

  return (
    <section id="work" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-brand-navy mb-4 uppercase tracking-wider">
              Selected Work / Digital Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-3">
              Real Work. Verifiable Engineering.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We separate completed client deliveries from exploratory prototypes and academic research. Every project is documented with actual contributions and technological scope.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'client', label: 'Client Work' },
              { id: 'ai', label: 'AI & Vision' },
              { id: 'prototypes', label: 'Prototypes' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-white text-brand-blue font-semibold shadow-soft-sm'
                    : 'text-slate-600 hover:text-brand-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group relative flex flex-col justify-between bg-white rounded-3xl border border-slate-200 shadow-soft-sm hover:border-brand-blue/50 hover:shadow-soft-lg transition-all duration-300 overflow-hidden"
              >
                {/* Visual Header / Preview Banner */}
                <div className="relative h-44 bg-gradient-to-br from-slate-900 via-brand-navy to-slate-950 p-5 flex flex-col justify-between text-white border-b border-slate-800">
                  <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
                  
                  {/* Category & Status Tags */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold ${
                        project.isClientWork
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {project.categoryLabel}
                    </span>

                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
                      {project.status.split('/')[0]}
                    </span>
                  </div>

                  {/* Visual Preview Graphic representation */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-1">
                      {project.isClientWork ? (
                        <ShieldCheck className="w-4 h-4 text-brand-blue-glow" />
                      ) : project.id.includes('ai') || project.id.includes('painting') ? (
                        <Eye className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Code2 className="w-4 h-4 text-yellow-400" />
                      )}
                      <span className="truncate">{project.subtitle}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {project.challenge}
                    </p>

                    {/* Features preview */}
                    <div className="space-y-1.5 mb-5">
                      {project.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-500">
                          <span className="w-1 h-1 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-[11px] border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-400 font-mono text-[10px]">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar with Micro-Interactions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy hover:text-brand-blue transition-colors cursor-pointer"
                    >
                      <span>Case Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/btn:translate-x-1" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
                        title="Open client website"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
