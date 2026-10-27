import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, Send, AlertTriangle } from 'lucide-react';
import { Button } from './ui/Button';

interface ScheduleMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleMeetingModal: React.FC<ScheduleMeetingModalProps> = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState('New Project Architecture & Feasibility');
  const [selectedTimezone, setSelectedTimezone] = useState('Asia/Kolkata (IST, UTC+5:30)');
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM — 11:45 AM');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  React.useEffect(() => {
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

    if (!fullName.trim() || !email.trim()) {
      setFormError('Please enter your full name and email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    const bookingDetails = `[SCHEDULED CONSULTATION REQUEST]
Topic: ${selectedTopic}
Timezone: ${selectedTimezone}
Preferred Slot: ${selectedSlot}
Attendee: ${fullName} <${email}> ${phone ? `| Phone: ${phone}` : ''}
Notes: ${notes || 'Standard 30-minute technical discovery session'}`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          serviceType: 'Consultation Booking',
          projectDetails: bookingDetails,
        }),
      });

      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setReferenceId(data.referenceId || `ST-MTG-${Date.now().toString(36).toUpperCase()}`);
        setIsConfirmed(true);
      } else {
        setFormError(
          data?.error ||
            `Booking request could not be completed (status ${res.status}). Please try again or reach out directly.`
        );
      }
    } catch {
      setFormError(
        'Unable to connect to the scheduling service. Please check your internet connection or email directly at sudharshanthemagnet@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setFormError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm"
        />

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
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy">Schedule a Technical Discovery Session</h3>
                <p className="text-xs text-slate-500 font-mono">
                  Direct consultation with Founder Sudharshan.P.S
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-brand-navy hover:bg-slate-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-700 flex-1">
            {isConfirmed ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-1">
                    Consultation Request Confirmed
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, {fullName}. Your session request has been registered under reference{' '}
                    <strong className="text-brand-navy font-mono">{referenceId}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto text-xs font-mono space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Discussion:</span>
                    <span className="font-semibold text-brand-navy">{selectedTopic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Timezone:</span>
                    <span>{selectedTimezone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Preferred Slot:</span>
                    <span className="text-brand-blue font-bold">{selectedSlot}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  A calendar invite and direct Google Meet link will be forwarded to{' '}
                  <strong className="text-brand-navy">{email}</strong> within a few hours.
                </p>

                <div className="pt-2">
                  <Button onClick={handleReset} variant="primary" size="sm" className="text-xs font-mono">
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                    Discussion Topic
                  </label>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono focus:border-brand-blue focus:bg-white focus:outline-none"
                  >
                    <option>New Project Architecture & Feasibility</option>
                    <option>Modern Web Application (React / TypeScript)</option>
                    <option>Computer Vision & AI Model Deployment</option>
                    <option>Security Code Hardening & Audit Review</option>
                    <option>Custom Software & Relational Data Systems</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                      Timezone
                    </label>
                    <select
                      value={selectedTimezone}
                      onChange={(e) => setSelectedTimezone(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono focus:border-brand-blue focus:bg-white focus:outline-none"
                    >
                      <option>Asia/Kolkata (IST, UTC+5:30)</option>
                      <option>Europe/London (GMT/BST, UTC+1)</option>
                      <option>America/New_York (EST, UTC-5)</option>
                      <option>America/Los_Angeles (PST, UTC-8)</option>
                      <option>Asia/Singapore (SGT, UTC+8)</option>
                      <option>Asia/Dubai (GST, UTC+4)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={selectedSlot}
                      onChange={(e) => setSelectedSlot(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono focus:border-brand-blue focus:bg-white focus:outline-none"
                    >
                      <option>10:00 AM — 10:45 AM</option>
                      <option>11:00 AM — 11:45 AM</option>
                      <option>02:30 PM — 03:15 PM</option>
                      <option>04:00 PM — 04:45 PM</option>
                      <option>06:30 PM — 07:15 PM</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Anand Kumar"
                      className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono focus:border-brand-blue focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono focus:border-brand-blue focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono focus:border-brand-blue focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                    Project Context or Specific Questions
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Briefly describe what you would like to discuss..."
                    className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono focus:border-brand-blue focus:bg-white focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    className="w-full justify-center text-xs font-mono"
                  >
                    {isSubmitting ? (
                      <span>Reserving Consultation Slot...</span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <Send className="w-3.5 h-3.5" />
                        <span>Confirm 30-Minute Technical Session</span>
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
