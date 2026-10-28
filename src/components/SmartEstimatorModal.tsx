import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calculator,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Code,
  Sparkles,
  Send,
} from 'lucide-react';
import { ESTIMATOR_SERVICES } from '../data/portfolioData';
import { Button } from './ui/Button';

interface SmartEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTransferToInquiry: (briefText: string, serviceName: string, budget: string, timeline: string) => void;
}

export const SmartEstimatorModal: React.FC<SmartEstimatorModalProps> = ({
  isOpen,
  onClose,
  onTransferToInquiry,
}: SmartEstimatorModalProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('web-dev');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'f-responsive',
    'f-seo',
    'f-catalog',
  ]);
  const [timeline, setTimeline] = useState<string>('Standard (4–6 Weeks)');
  const [budgetTier, setBudgetTier] = useState<string>('Standard Commercial Scope');

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentService =
    ESTIMATOR_SERVICES.find((s) => s.id === selectedServiceId) || ESTIMATOR_SERVICES[0];

  const handleToggleFeature = (featId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featId) ? prev.filter((id) => id !== featId) : [...prev, featId]
    );
  };

  const handleFinishAndTransfer = () => {
    const chosenFeatureNames = currentService.features
      .filter((f) => selectedFeatures.includes(f.id))
      .map((f) => f.name);

    const generatedBrief = `[SMART ESTIMATOR BRIEF]
Service: ${currentService.name}
Selected Core Features (${chosenFeatureNames.length}):
${chosenFeatureNames.map((n) => `• ${n}`).join('\n')}
Timeline Target: ${timeline}
Budget Expectation: ${budgetTier}
Recommended Stack: ${currentService.recommendedStack.join(', ')}`;

    onTransferToInquiry(generatedBrief, currentService.name, budgetTier, timeline);
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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center border border-blue-200">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy">Smart Project Estimator</h3>
                <p className="text-xs text-slate-500 font-mono">
                  Step {currentStep} of 4 — Scoping & Architectural Sizing
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-brand-navy hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close estimator"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress Bar */}
          <div className="w-full bg-slate-100 h-1">
            <div
              className="bg-brand-blue h-1 transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 flex-1">
            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-bold text-brand-navy mb-1">
                    Select Your Primary Technical Need
                  </h4>
                  <p className="text-xs text-slate-500">
                    Choose the core digital capability required for your project.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ESTIMATOR_SERVICES.map((srv) => {
                    const isSelected = selectedServiceId === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => {
                          setSelectedServiceId(srv.id);
                          // Default select first 3 features
                          setSelectedFeatures(srv.features.slice(0, 3).map((f) => f.id));
                        }}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-blue-50/70 border-brand-blue ring-1 ring-brand-blue shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-semibold text-brand-blue uppercase">
                            {srv.baseTimeline}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-blue" />}
                        </div>
                        <h5 className="text-sm font-bold text-brand-navy mb-1.5">{srv.name}</h5>
                        <div className="flex flex-wrap gap-1">
                          {srv.recommendedStack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-600 border border-slate-200/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Choose Features */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-bold text-brand-navy mb-1">
                    Configure Desired Features & Scope
                  </h4>
                  <p className="text-xs text-slate-500">
                    Select the key system capabilities you need for {currentService.name}.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {currentService.features.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);
                    return (
                      <div
                        key={feat.id}
                        onClick={() => handleToggleFeature(feat.id)}
                        className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-blue-50/50 border-brand-blue/70 shadow-2xs'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                              isChecked
                                ? 'bg-brand-blue border-brand-blue text-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span className="text-xs font-medium text-brand-navy">{feat.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {feat.complexity}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Timeline & Budget */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-bold text-brand-navy mb-1">
                    Timeline & Target Horizon
                  </h4>
                  <p className="text-xs text-slate-500">
                    When does this system need to be deployed to production?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Rapid Sprint (2–3 Weeks)',
                    'Standard (4–6 Weeks)',
                    'Multi-Phase (2–3 Months)',
                    'Exploratory / Flexible',
                  ].map((t) => (
                    <div
                      key={t}
                      onClick={() => setTimeline(t)}
                      className={`p-3.5 rounded-xl border cursor-pointer text-xs font-mono font-medium transition-all ${
                        timeline === t
                          ? 'bg-blue-50/70 border-brand-blue text-brand-blue font-bold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {t}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h5 className="text-sm font-bold text-brand-navy mb-1">
                    Indicative Budget Planning
                  </h5>
                  <p className="text-xs text-slate-500 mb-3">
                    Select your expected project scale for transparent proposal alignment.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Entry Proof-of-Concept',
                      'Standard Commercial Scope',
                      'Comprehensive Platform',
                      'Enterprise Bespoke Architecture',
                    ].map((b) => (
                      <div
                        key={b}
                        onClick={() => setBudgetTier(b)}
                        className={`p-3 rounded-xl border cursor-pointer text-xs font-mono transition-all ${
                          budgetTier === b
                            ? 'bg-blue-50/70 border-brand-blue text-brand-blue font-bold shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Summary Brief Breakdown */}
            {currentStep === 4 && (
              <div className="space-y-5">
                <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-blue-glow" />
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
                        Generated Project Brief Summary
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      Ready for Proposal
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">
                      Selected Service
                    </span>
                    <h5 className="text-sm font-bold text-white">{currentService.name}</h5>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                      Scoped Capabilities ({selectedFeatures.length})
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentService.features
                        .filter((f) => selectedFeatures.includes(f.id))
                        .map((f) => (
                          <span
                            key={f.id}
                            className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700"
                          >
                            ✓ {f.name}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Target Horizon:</span>
                      <strong className="text-blue-300">{timeline}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Budget Tier:</span>
                      <strong className="text-emerald-300">{budgetTier}</strong>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-brand-blue-glow" />
                    <span>Recommended Stack: {currentService.recommendedStack.join(' · ')}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-brand-navy leading-relaxed">
                  <strong>What happens next?</strong> Clicking below transfers this structured scope directly into our project enquiry form. Founder Sudharshan.P.S will personally evaluate requirements and respond with an itemized milestone plan.
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
            <div>
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep((p) => p - 1)}
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-600 hover:text-brand-navy px-3 py-1.5 rounded-lg border border-slate-200 bg-white cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              {currentStep < 4 ? (
                <Button
                  onClick={() => setCurrentStep((p) => p + 1)}
                  variant="primary"
                  size="sm"
                  className="text-xs font-mono"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              ) : (
                <Button
                  onClick={handleFinishAndTransfer}
                  variant="primary"
                  size="sm"
                  contextualIcon="none"
                  className="text-xs font-mono"
                >
                  <Send className="w-3.5 h-3.5 mr-1.5" />
                  <span>Transfer Brief to Enquiry Form</span>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
