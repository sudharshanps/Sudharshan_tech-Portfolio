import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Code, ShieldCheck, Tag, Layers, Activity, Milestone } from 'lucide-react';
import { Project } from '../types';
import { Button } from './ui/Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onStartInquiry: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onStartInquiry }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-slate-100 bg-slate-50/70">
            <div className="space-y-1 pr-6">
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                    project.isClientWork
                      ? 'bg-blue-100 text-brand-blue border border-blue-200'
                      : 'bg-slate-200/80 text-slate-700'
                  }`}
                >
                  {project.categoryLabel}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Status: <strong className="text-brand-navy">{project.status}</strong>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy">{project.title}</h3>
              <p className="text-sm text-slate-600">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-brand-navy hover:bg-slate-200/60 transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
            
            {/* Project Image Preview / Hero Banner */}
            {project.image ? (
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] sm:aspect-[2/1] bg-slate-950 shadow-sm">
                <img
                  src={project.image}
                  alt={`${project.title} Interface Preview`}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-slate-700/60 shadow-sm">
                  High-Resolution Interface Preview
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] sm:aspect-[2.4/1] bg-gradient-to-br from-slate-900 via-brand-navy to-slate-950 p-6 flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />
                <Layers className="w-8 h-8 text-brand-blue-glow mb-2" />
                <h5 className="text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider">
                  Civic Tech Architecture & System Blueprint
                </h5>
                <p className="text-[11px] sm:text-xs text-slate-400 max-w-md mt-1 font-mono leading-relaxed">
                  SUDHARSHAN_TECH social innovation initiative connecting eligible citizens and MSMEs to public welfare grants.
                </p>
              </div>
            )}

            {/* Project Pulse & Verified Live State */}
            <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-sm space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-blue-glow" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
                    Project Pulse & Engineering Status
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400">Last Verified:</span>
                  <span className="text-xs font-mono text-slate-200">{project.lastUpdated}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase ${
                      project.pulseStage === 'Deployed'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                        : project.pulseStage === 'Prototype'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                        : project.pulseStage === 'Research'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                    }`}
                  >
                    ● {project.pulseStage}
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed font-mono">
                <strong className="text-white">Active Status: </strong>
                {project.pulseNote}
              </div>

              {project.nextMilestone && (
                <div className="flex items-start gap-1.5 text-xs text-slate-400 pt-1 border-t border-slate-800/80 font-mono">
                  <Milestone className="w-3.5 h-3.5 text-brand-blue-glow shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-300">Next Milestone: </strong>
                    {project.nextMilestone}
                  </span>
                </div>
              )}
            </div>

            {/* Highlights banner */}
            {project.metricsOrHighlight && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-brand-blue text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{project.metricsOrHighlight}</span>
              </div>
            )}

            {/* Challenge & Objective */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1.5 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-brand-blue" />
                  The Challenge
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{project.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1.5 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Our Objective
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{project.objective}</p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                Engineered Solution
              </h4>
              <p className="text-sm leading-relaxed text-slate-700">{project.solution}</p>
            </div>

            {/* Core Features */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                Key System Capabilities
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contribution */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                SUDHARSHAN_TECH Contribution
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">{project.teamContribution}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-brand-blue" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono text-xs border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
                >
                  <span>Visit Live Client Site</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-500">
                  Verified Technical Project / Internal Prototype
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-brand-navy transition-colors cursor-pointer"
              >
                Close
              </button>
              <Button
                onClick={() => {
                  onClose();
                  onStartInquiry();
                }}
                variant="primary"
                size="sm"
                animation="nudge"
                nudgeDirection="right"
                contextualIcon="arrow"
                ariaLabel="Discuss project"
              >
                Discuss Similar Project
              </Button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
