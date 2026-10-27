import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HeartHandshake, CheckCircle2, AlertTriangle, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { getApiUrl } from '../utils/api';

interface SuggestCommunityProblemModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSupportType?: string;
}

export const SuggestCommunityProblemModal: React.FC<SuggestCommunityProblemModalProps> = ({
  isOpen,
  onClose,
  initialSupportType = 'Civic / Community Problem to Solve',
}) => {
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [supportType, setSupportType] = useState(initialSupportType);
  const [problemDescription, setProblemDescription] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [gotcha, setGotcha] = useState(''); // Honeypot spam trap
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Sync initial support type if passed
  useEffect(() => {
    if (initialSupportType) {
      setSupportType(initialSupportType);
    }
  }, [initialSupportType]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Honeypot check
    if (gotcha) {
      console.warn('Spam detected.');
      return;
    }

    // Client-side validation
    if (!fullName.trim() || !email.trim() || !problemDescription.trim()) {
      setFormError('Please fill in your name, email, and the problem description.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    const fullBrief = `[COMMUNITY PROBLEM / SOCIAL PROPOSAL]
Category: ${supportType}
Organization / Group: ${organization.trim() || 'Individual Citizen / Local Community'}
Problem Statement:
${problemDescription.trim()}

Additional Details:
${additionalDetails.trim() || 'None specified.'}`;

    try {
      const res = await fetch(getApiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          company: organization.trim() || 'Community Initiative',
          serviceType: 'Community Problem Suggestion',
          budgetRange: 'Community / Pro Bono Review',
          projectDetails: fullBrief,
          _gotcha: gotcha,
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setReferenceId(data.referenceId || null);
        setIsConfirmed(true);
      } else {
        setFormError(
          data?.error ||
            `Submission failed with status ${res.status}. Please check your inputs or email directly.`
        );
      }
    } catch {
      setFormError(
        'Unable to connect to the server. Please verify your connection or email directly at sudharshanthemagnet@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setReferenceId(null);
    setFullName('');
    setOrganization('');
    setEmail('');
    setProblemDescription('');
    setAdditionalDetails('');
    setGotcha('');
    setFormError(null);
    onClose();
  };

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
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center border border-blue-200">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy">
                  Suggest a Community Problem
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  SUDHARSHAN_TECH — Technology for Everyone
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-brand-navy hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form / Confirmation View */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-sm text-slate-700 flex-1">
            {isConfirmed ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-1">
                    Community Suggestion Received
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{fullName}</strong>. Your community problem statement regarding{' '}
                    <strong>{supportType}</strong> has been registered on our server.
                  </p>
                </div>

                {referenceId && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 max-w-xs mx-auto text-xs font-mono text-slate-700">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider mb-0.5">
                      Verified Tracking Reference
                    </span>
                    <span className="font-bold text-brand-blue">{referenceId}</span>
                  </div>
                )}

                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-left max-w-md mx-auto text-xs text-slate-600 space-y-1.5">
                  <span className="font-bold text-brand-navy flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Next Review Step:</span>
                  </span>
                  <p className="leading-relaxed">
                    Founder Sudharshan.P.S reviews community submissions to assess feasibility, technical architecture, and available resources. If a viable collaborative path or mentored initiative can be explored, we will reach out to <strong>{email}</strong>.
                  </p>
                </div>

                <div className="pt-2">
                  <Button onClick={handleReset} variant="primary" size="sm" className="text-xs font-mono">
                    Close & Return
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  value={gotcha}
                  onChange={(e) => setGotcha(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {formError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <p className="text-xs text-slate-600 leading-relaxed">
                  Have a grassroots challenge where practical software, digital literacy, or an accessible website could help? Share the details below.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Anandha Kumar"
                      className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                      Contact Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@community.org"
                      className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                      Organization / Group <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Coimbatore Farmers Forum / College Club"
                      className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                      Type of Support Needed
                    </label>
                    <select
                      value={supportType}
                      onChange={(e) => setSupportType(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono focus:border-brand-blue focus:bg-white focus:outline-none"
                    >
                      <option>Digital Support for Local Business</option>
                      <option>Student Technology & Mentorship</option>
                      <option>Community Digital Safety & Awareness</option>
                      <option>NGO / Non-Profit Digital Platform</option>
                      <option>Accessible Software Remediation</option>
                      <option>Civic / Community Problem to Solve</option>
                      <option>Other Community Cause</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                    What Community Problem Needs Solving? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={problemDescription}
                    onChange={(e) => setProblemDescription(e.target.value)}
                    placeholder="Describe the real-world bottleneck or digital challenge you are facing..."
                    className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                    Additional Context / Ideas <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={additionalDetails}
                    onChange={(e) => setAdditionalDetails(e.target.value)}
                    placeholder="Existing tools used, timeline expectations, or links..."
                    className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-brand-blue focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Honest Disclosure Banner */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 font-mono leading-relaxed">
                  <span className="font-semibold text-brand-navy block mb-0.5">Community Review Policy:</span>
                  Submitting a proposal initiates an open feasibility review and does not guarantee free services, funding, or implementation. We explore feasible, resource-efficient solutions for verified community needs.
                </div>

                <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                  <Button
                    type="button"
                    onClick={onClose}
                    variant="ghost"
                    size="sm"
                    className="text-xs font-mono text-slate-600 hover:text-brand-navy"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    disabled={isSubmitting}
                    contextualIcon="none"
                    className="text-xs font-mono"
                  >
                    {isSubmitting ? (
                      <span>Sending Proposal...</span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Community Idea</span>
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
