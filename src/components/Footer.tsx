import React from 'react';
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Activity,
  GitCommit,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/portfolioData';

interface FooterProps {
  onNavigate?: (view: 'home' | 'status' | 'changelog' | 'not-found') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, view: 'status' | 'changelog') => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <footer className="bg-brand-navy-deep text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-auto bg-white p-1 rounded-xl">
                <img
                  src={COMPANY_INFO.officialLogoUrl}
                  alt="SUDHARSHAN_TECH Official Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs font-mono text-brand-blue-glow font-semibold tracking-wider uppercase">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Independent technology company founded by Sudharshan.P.S and based in Coimbatore, India. Engineering reliable web systems, AI automation, and bespoke software solutions.
            </p>

            {/* Verified Social & Direct Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 transition-colors"
                aria-label="SUDHARSHAN_TECH Instagram"
                title="Official Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Project%20Enquiry%20%E2%80%94%20SUDHARSHAN_TECH`}
                className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-blue transition-colors"
                aria-label="Email Founder"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors"
                aria-label="Call Founder"
                title="Direct Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Engineering Telemetry & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Engineering & Systems
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, 'status')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Live System Status (/status)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, 'changelog')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <GitCommit className="w-3.5 h-3.5 text-brand-blue-glow" />
                  <span>Engineering Changelog (/changelog)</span>
                </button>
              </li>
              <li>
                <a href="#audit" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Website Health Snapshot</span>
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-white transition-colors">
                  Verified Tech Stack
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Security & Integrity Standards
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Technical Articles & Insights
                </a>
              </li>
              <li>
                <a href="#society" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
                  <span>Technology for Everyone</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Founder & Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-blue-glow shrink-0 mt-0.5" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-blue-glow shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Project%20Enquiry%20%E2%80%94%20SUDHARSHAN_TECH`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand-blue-glow shrink-0 mt-0.5" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} SUDHARSHAN_TECH. All rights reserved. Founded by Sudharshan.P.S.</span>
            <span className="hidden md:inline">•</span>
            <button
              onClick={(e) => handleLinkClick(e, 'status')}
              className="text-slate-400 hover:text-white hover:underline cursor-pointer"
            >
              System Status: 100% Operational
            </button>
          </div>

          <div className="flex items-center gap-6">
            <span>Engineering Practical Solutions</span>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-150 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
