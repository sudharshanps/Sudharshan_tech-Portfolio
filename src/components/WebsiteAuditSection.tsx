import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { AuditReport } from '../types';
import { Button } from './ui/Button';
import { getApiUrl } from '../utils/api';

interface WebsiteAuditSectionProps {
  onStartInquiryWithAudit?: (url: string, score: number) => void;
}

export const WebsiteAuditSection: React.FC<WebsiteAuditSectionProps> = ({
  onStartInquiryWithAudit,
}) => {
  const [urlInput, setUrlInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [auditResult, setAuditResult] = useState<AuditReport | null>(null);

  const handleRunAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    let target = urlInput.trim();
    if (!target) {
      setErrorMessage('Please enter a website URL.');
      return;
    }

    if (!target.startsWith('http://') && !target.startsWith('https://')) {
      target = `https://${target}`;
      setUrlInput(target);
    }

    setIsLoading(true);

    try {
      const response = await fetch(getApiUrl('/api/audit'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetUrl: target }),
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        setErrorMessage(data.error || 'Audit analysis failed. Please verify the URL.');
      } else {
        setAuditResult(data);
      }
    } catch {
      // Local fallback simulation if server is unreachable
      setErrorMessage(
        'Unable to reach audit engine. Ensure the backend server is running on port 5000.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="audit" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-mono font-semibold text-brand-blue mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Lead Diagnostic</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
            Instant Website Health & Security Snapshot
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Run an automated preliminary assessment of your domain’s transport encryption, security headers, mobile viewport readiness, and latency.
          </p>
        </div>

        {/* Audit Form Box */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm mb-8">
          <form onSubmit={handleRunAudit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://yourcompany.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                contextualIcon="none"
                disabled={isLoading}
                className="shrink-0 text-xs font-mono"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 animate-spin" />
                    <span>Analyzing Endpoint...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Run Technical Audit</span>
                  </span>
                )}
              </Button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>* SSRF-Protected: Resolves DNS and blocks private subnets.</span>
              <span>Evaluates: HTTPS · HSTS · Clickjacking · Viewport · Latency</span>
            </div>
          </form>

          {errorMessage && (
            <div className="mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        {/* Audit Report Results Card */}
        {auditResult && (
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            {/* Report Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Audited Target
                </span>
                <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                  <span>{auditResult.targetUrl}</span>
                  <a
                    href={auditResult.targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-brand-blue text-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Response: HTTP {auditResult.httpStatus} · Latency: {auditResult.responseLatencyMs}ms
                </span>
              </div>

              {/* Overall Score Badge */}
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Health Score</span>
                  <span className="text-xs font-mono text-slate-500">out of 100</span>
                </div>
                <div
                  className={`text-2xl font-extrabold font-mono px-3 py-1 rounded-lg ${
                    auditResult.overallScore >= 80
                      ? 'bg-emerald-100 text-emerald-800'
                      : auditResult.overallScore >= 50
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {auditResult.overallScore}
                </div>
              </div>
            </div>

            {/* Diagnostic Checks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {auditResult.checks.map((check) => (
                <div
                  key={check.id}
                  className={`p-4 rounded-xl border ${
                    check.passed
                      ? 'bg-emerald-50/40 border-emerald-200/80'
                      : 'bg-amber-50/40 border-amber-200/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      {check.passed ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      )}
                      <h4 className="text-xs font-bold text-brand-navy">{check.title}</h4>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-white/80 px-1.5 py-0.5 rounded border border-slate-200">
                      +{check.score} pts
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-2">{check.observation}</p>

                  {check.recommendation && (
                    <div className="text-[11px] font-mono text-amber-800 bg-amber-100/60 p-2 rounded-lg border border-amber-200/60">
                      <strong>Remediation: </strong>
                      {check.recommendation}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Disclaimer & Action Banner */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                <HelpCircle className="w-3.5 h-3.5 inline text-slate-400 mr-1" />
                {auditResult.disclaimer}
              </p>

              {onStartInquiryWithAudit && (
                <Button
                  onClick={() =>
                    onStartInquiryWithAudit(auditResult.targetUrl, auditResult.overallScore)
                  }
                  variant="primary"
                  size="sm"
                  className="shrink-0 text-xs font-mono"
                >
                  <span>Discuss Remediation</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
