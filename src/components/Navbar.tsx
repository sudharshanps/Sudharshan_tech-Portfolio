import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Activity, GitCommit } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';
import { Button } from './ui/Button';

interface NavbarProps {
  onOpenContactModal: () => void;
  onNavigate: (view: 'home' | 'status' | 'changelog' | 'not-found') => void;
  currentView: 'home' | 'status' | 'changelog' | 'not-found';
}

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Our Work', href: '#work' },
  { name: 'Audit', href: '#audit' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContactModal,
  onNavigate,
  currentView,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const sectionId = NAV_LINKS[i].href.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const navOffset = 70;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navOffset,
            behavior: 'smooth',
          });
        }
      }, 50);
      return;
    }

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-2'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          
          {/* Logo container: official uploaded logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg p-1 -ml-1"
            aria-label="SUDHARSHAN_TECH Home"
          >
            <div className="relative h-9 sm:h-10 w-auto flex items-center">
              <img
                src={COMPANY_INFO.officialLogoUrl}
                alt="SUDHARSHAN_TECH Official Logo"
                className="h-full w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = currentView === 'home' && activeSection === sectionId;
              const isHovered = hoveredLink === link.href;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-2.5 xl:px-3 py-1.5 text-xs font-medium transition-colors duration-200 rounded-md focus-visible:ring-2 focus-visible:ring-brand-blue ${
                    isActive
                      ? 'text-brand-blue font-semibold'
                      : 'text-slate-600 hover:text-brand-blue'
                  }`}
                >
                  {link.name}

                  {/* Active/Hover Animated Underline */}
                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-blue rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster: Live Status Pill, Changelog, and Start a Project */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Live Status Pill with Pulsing Health Indicator */}
            <button
              onClick={() => onNavigate('status')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-mono transition-all cursor-pointer ${
                currentView === 'status'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
              title="View Live System Health & Telemetry"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Status</span>
            </button>

            {/* Changelog Link */}
            <button
              onClick={() => onNavigate('changelog')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-mono transition-all cursor-pointer ${
                currentView === 'changelog'
                  ? 'bg-blue-50 text-brand-blue border-blue-300 font-bold'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
              title="View Engineering Changelog & Releases"
            >
              <GitCommit className="w-3 h-3 text-brand-blue" />
              <span>Changelog</span>
            </button>

            {/* Start a Project CTA Button with 4px Icon-Nudge */}
            <Button
              onClick={onOpenContactModal}
              variant="primary"
              size="sm"
              animation="nudge"
              nudgeDirection="right"
              contextualIcon="arrow"
              ariaLabel="Start a project with SUDHARSHAN_TECH"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-1.5 rounded-lg text-brand-navy hover:text-brand-blue hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-brand-navy" />
              ) : (
                <Menu className="w-5 h-5 text-brand-navy" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-2 pb-5 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col space-y-1 pt-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = currentView === 'home' && activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-brand-blue font-semibold'
                        : 'text-brand-navy hover:bg-slate-50 hover:text-brand-blue'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />}
                  </a>
                );
              })}

              <div className="grid grid-cols-2 gap-2 pt-2 pb-1 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('status');
                  }}
                  className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700"
                >
                  <Activity className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Live Status</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('changelog');
                  }}
                  className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700"
                >
                  <GitCommit className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Changelog</span>
                </button>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactModal();
                  }}
                  variant="primary"
                  size="md"
                  animation="nudge"
                  nudgeDirection="right"
                  contextualIcon="arrow"
                  className="w-full"
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
