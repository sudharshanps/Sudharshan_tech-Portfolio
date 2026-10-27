import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Eye, Layers } from 'lucide-react';
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
                  <div className="group h-full flex flex-col justify-between bg-white rounded-xl border border-slate-200 shadow-sm hover:border-brand-blue/50 hover:shadow-md transition-all duration-200 overflow-hidden">
                    
                    {/* Visual Header / Project Screenshot (16:9 Ratio with Subtle Hover Zoom) */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-200/80">
                      {project.image ? (
                        <>
                          <img
                            src={project.image}
                            alt={`${project.title} Preview`}
                            className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                          {/* Subtle overlay gradient ensuring badge and label contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-black/35 pointer-events-none" />
                        </>
                      ) : (
                        /* Branded fallback technical graphic for un-imaged projects (NIDHI SETU) */
                        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-brand-navy to-slate-950 flex flex-col justify-between p-4 relative overflow-hidden">
                          <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />
                          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-brand-blue/10 blur-xl pointer-events-none" />
                          <div className="relative z-10" />
                          <div className="relative z-10 flex items-center justify-center my-auto">
                            <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs">
                              <Layers className="w-6 h-6 text-brand-blue-glow mb-1.5" />
                              <span className="text-[11px] font-mono font-semibold text-slate-200 uppercase tracking-wider">
                                Civic Tech Architecture
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">
                                Scheme Intelligence & Grant Discovery
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Category & Status Badges (Floating on Top Corners) */}
                      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
                        <span
                          className={`text-[9.5px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-semibold backdrop-blur-md shadow-sm ${
                            project.isClientWork
                              ? 'bg-blue-600/90 text-white border border-blue-400/50'
                              : 'bg-slate-900/85 text-slate-200 border border-slate-700/70'
                          }`}
                        >
                          {project.categoryLabel}
                        </span>

                        <span className="text-[9.5px] font-mono text-slate-200 bg-slate-900/85 px-2 py-0.5 rounded backdrop-blur-md border border-slate-700/70 shadow-sm">
                          {project.status.split('/')[0]}
                        </span>
                      </div>

                      {/* Subtitle / Category Label (Floating at Bottom of Preview) */}
                      <div className="absolute bottom-2.5 left-3 right-3 z-20 flex items-center gap-1.5 text-[11px] font-mono text-white/90 drop-shadow-md pointer-events-none">
                        {project.isClientWork ? (
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        ) : project.id.includes('ai') || project.id.includes('painting') ? (
                          <Eye className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        ) : (
                          <Code2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                        )}
                        <span className="truncate">{project.subtitle}</span>
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
