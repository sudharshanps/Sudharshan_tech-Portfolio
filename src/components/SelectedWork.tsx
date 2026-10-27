import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { Button } from './ui/Button';
import { Card3D } from './ui/Card3D';

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
    <section id="work" className="py-16 md:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold text-brand-navy mb-3 uppercase tracking-wider">
              Selected Work / Digital Systems
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
              Real Work. Verifiable Engineering.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We separate completed client deliveries from exploratory prototypes and academic research. Every project is documented with actual contributions and technological scope.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200 shrink-0">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'client', label: 'Client Work' },
              { id: 'ai', label: 'AI & Vision' },
              { id: 'prototypes', label: 'Prototypes' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-white text-brand-blue font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-brand-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="h-full"
              >
                <Card3D maxTilt={3.5} className="h-full">
                  <div className="h-full flex flex-col justify-between bg-white rounded-xl border border-slate-200 shadow-sm hover:border-brand-blue/50 hover:shadow-md transition-all duration-200 overflow-hidden">
                    
                    {/* Visual Header / Preview Banner (Compact) */}
                    <div className="relative h-36 bg-gradient-to-br from-slate-900 via-brand-navy to-slate-950 p-4 flex flex-col justify-between text-white border-b border-slate-800">
                      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
                      
                      {/* Category & Status Tags */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span
                          className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-semibold ${
                            project.isClientWork
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}
                        >
                          {project.categoryLabel}
                        </span>

                        <span className="text-[9px] font-mono text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded border border-slate-700/60">
                          {project.status.split('/')[0]}
                        </span>
                      </div>

                      {/* Visual Category Label */}
                      <div className="relative z-10 flex items-center gap-1.5 text-xs font-mono text-slate-300">
                        {project.isClientWork ? (
                          <ShieldCheck className="w-3.5 h-3.5 text-brand-blue-glow" />
                        ) : project.id.includes('ai') || project.id.includes('painting') ? (
                          <Eye className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Code2 className="w-3.5 h-3.5 text-yellow-400" />
                        )}
                        <span className="truncate text-[11px]">{project.subtitle}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="text-base font-bold text-brand-navy mb-1.5">
                          {project.title}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                          {project.challenge}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-[10px] border border-slate-200/60"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="px-1 py-0.5 rounded bg-slate-50 text-slate-400 font-mono text-[9px]">
                              +{project.techStack.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions Bar with Micro-Interactions */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <Button
                          onClick={() => onSelectProject(project)}
                          variant="ghost"
                          size="sm"
                          animation="nudge"
                          nudgeDirection="right"
                          contextualIcon="arrow"
                          ariaLabel={`View case details for ${project.title}`}
                          className="!px-2 text-brand-navy hover:text-brand-blue"
                        >
                          Case Details
                        </Button>

                        {project.liveUrl && (
                          <Button
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="ghost"
                            size="sm"
                            animation="nudge"
                            nudgeDirection="right"
                            contextualIcon="external"
                            className="text-brand-blue hover:text-brand-blue-dark !px-2"
                            ariaLabel={`Visit live site for ${project.title}`}
                          >
                            Live Site
                          </Button>
                        )}
                      </div>
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
