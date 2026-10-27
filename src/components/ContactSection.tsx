import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    serviceType: preselectedService || 'Web Development',
    budgetRange: '₹50,000 - ₹1,50,000',
    timeline: '1-2 months',
    projectDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner / Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-brand-blue mb-4 uppercase tracking-wider">
            Start a Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            HAVE SOMETHING WORTH BUILDING?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tell us what you're planning. Let's explore how we can build it with practical architecture, thoughtful design, and disciplined engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 rounded-2xl bg-brand-navy text-white shadow-soft-lg space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Direct Enquiry Channels</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Connect with our team in Coimbatore directly. We review every project enquiry within 24 hours.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3.5 text-sm text-slate-200 hover:text-brand-blue-glow transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Official Email</span>
                    <span className="font-medium text-white">{COMPANY_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-3.5 text-sm text-slate-200 hover:text-brand-blue-glow transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Phone / WhatsApp</span>
                    <span className="font-medium text-white">{COMPANY_INFO.phone}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 text-sm text-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Engineering Headquarters</span>
                    <span className="font-medium text-white">{COMPANY_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Response Promise */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-2.5 text-xs text-emerald-400 font-mono">
                <Clock className="w-4 h-4" />
                <span>Guaranteed Response within 24 Hours</span>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 text-xs sm:text-sm text-slate-600">
              <h4 className="font-bold text-brand-navy">What happens after you send an enquiry?</h4>
              <ol className="space-y-2 list-decimal list-inside text-xs leading-relaxed text-slate-600">
                <li>We review your problem statement and technical parameters.</li>
                <li>We schedule a focused 20-minute video or phone discovery call.</li>
                <li>We deliver a clear milestone breakdown, budget estimate, and roadmap.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft-lg p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto border border-blue-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">Enquiry Dispatched Successfully</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. We have received your project details regarding <strong>{formData.serviceType}</strong> and will reach out to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-xs mx-auto text-xs font-mono text-slate-500">
                    Reference ID: ST-REQ-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          company: '',
                          serviceType: 'Web Development',
                          budgetRange: '₹50,000 - ₹1,50,000',
                          timeline: '1-2 months',
                          projectDetails: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-brand-navy text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Work / Personal Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company / Organization */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Company or Startup Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Technico Solutions"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                      />
                    </div>

                    {/* Service Required */}
                    <div>
                      <label htmlFor="serviceType" className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Primary Service Needed <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-brand-navy bg-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="Consulting & Technical Audit">Consulting & Technical Audit</option>
                        <option value="Other">Other / Custom Collaboration</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Budget Range */}
                    <div>
                      <label htmlFor="budgetRange" className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-brand-navy bg-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                      >
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Small sprint / audit)</option>
                        <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000 (Standard project)</option>
                        <option value="₹1,50,000 - ₹5,00,000">₹1,50,000 - ₹5,00,000 (Comprehensive system)</option>
                        <option value="₹5,00,000+">₹5,00,000+ (Enterprise engagement)</option>
                        <option value="To be discussed">To be discussed</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-xs font-semibold text-brand-navy mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-brand-navy bg-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                      >
                        <option value="Urgent (< 2 weeks)">Urgent (&lt; 2 weeks)</option>
                        <option value="1 month">1 month</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="Flexible">Flexible / Ongoing</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-semibold text-brand-navy mb-1.5">
                      Tell Us About Your Project & Goals <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      required
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Briefly describe what you're building, target users, any current technologies, and desired milestones..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-brand-navy placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-blue text-white font-semibold text-sm shadow-sm hover:bg-brand-blue-dark active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Details...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Discuss Your Project</span>
                        </>
                      )}
                    </button>
                    <span className="block sm:inline-block sm:ml-4 text-[11px] text-slate-400 font-mono mt-2 sm:mt-0">
                      No spam. Direct developer review.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
