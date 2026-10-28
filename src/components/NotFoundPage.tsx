import React from 'react';
import { motion } from 'framer-motion';
import { Home, Activity, GitCommit, ShieldAlert } from 'lucide-react';
import { Button } from './ui/Button';

interface NotFoundPageProps {
  onBack: () => void;
  onNavigateStatus: () => void;
  onNavigateChangelog: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onBack,
  onNavigateStatus,
  onNavigateChangelog,
}: NotFoundPageProps) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center space-y-6"
      >
        <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mx-auto border border-blue-200 shadow-2xs">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold text-brand-blue uppercase tracking-wider block">
            HTTP Status 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
            Endpoint Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The route or resource you requested is not indexed within the SUDHARSHAN_TECH infrastructure.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={onBack}
            variant="primary"
            size="md"
            contextualIcon="none"
            className="w-full sm:w-auto"
          >
            <span className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Return to Headquarters</span>
            </span>
          </Button>
        </div>

        <div className="pt-6 border-t border-slate-100 space-y-2 text-xs font-mono text-slate-500">
          <p>Verified Systems Navigation:</p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={onNavigateStatus}
              className="text-brand-blue hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-500" />
              <span>Live Status</span>
            </button>
            <span>•</span>
            <button
              onClick={onNavigateChangelog}
              className="text-brand-blue hover:underline flex items-center gap-1 cursor-pointer"
            >
              <GitCommit className="w-3.5 h-3.5" />
              <span>Changelog</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
