import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Code, ShieldCheck, Tag } from 'lucide-react';
import { Project } from '../types';
import { Button } from './ui/Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onStartInquiry: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onStartInquiry }) => {
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
                animation="fly-through"
                contextualIcon="phone"
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
