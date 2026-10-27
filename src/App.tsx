import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { WebsiteAuditSection } from './components/WebsiteAuditSection';
import { TechStackSection } from './components/TechStackSection';
import { HowWeWork } from './components/HowWeWork';
import { TrustSecuritySection } from './components/TrustSecuritySection';
import { BlogSection } from './components/BlogSection';
import { About } from './components/About';
import { Team } from './components/Team';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { SmartEstimatorModal } from './components/SmartEstimatorModal';
import { ScheduleMeetingModal } from './components/ScheduleMeetingModal';
import { AIAssistantWidget } from './components/AIAssistantWidget';
import { StatusPage } from './components/StatusPage';
import { ChangelogPage } from './components/ChangelogPage';
import { Project } from './types';

type CurrentView = 'home' | 'status' | 'changelog';

export const App: React.FC = () => {
  // Client router initialization
  const [currentView, setCurrentView] = useState<CurrentView>(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('/status') || hash.includes('status')) return 'status';
    if (path.includes('/changelog') || hash.includes('changelog')) return 'changelog';
    return 'home';
  });

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEstimatorModalOpen, setIsEstimatorModalOpen] = useState(false);
  const [isSchedulerModalOpen, setIsSchedulerModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Web Development');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Sync with browser history popstate
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('/status') || hash.includes('status')) {
        setCurrentView('status');
      } else if (path.includes('/changelog') || hash.includes('changelog')) {
        setCurrentView('changelog');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: CurrentView) => {
    setCurrentView(view);
    const targetUrl = view === 'home' ? '/' : `/${view}`;
    window.history.pushState({ view }, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsContactModalOpen(true);
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const navOffset = 80;
      const elPos = contactEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elPos - navOffset,
        behavior: 'smooth',
      });
    } else {
      setIsContactModalOpen(true);
    }
  };

  const handleTransferEstimatorBrief = (
    _briefText: string,
    serviceName: string,
    _budget: string,
    _timeline: string
  ) => {
    setSelectedService(serviceName);
    handleSelectServiceForInquiry(serviceName);
  };

  const handleStartInquiryWithAudit = (url: string, score: number) => {
    setSelectedService('Cybersecurity & Code Hardening');
    handleSelectServiceForInquiry(`Website Remediation for ${url} (Score: ${score}/100)`);
  };

  // Render Status Center view
  if (currentView === 'status') {
    return (
      <div className="min-h-screen bg-slate-50 text-brand-navy flex flex-col">
        <Navbar
          onOpenContactModal={() => handleOpenContactModal()}
          onNavigate={navigateTo}
          currentView={currentView}
        />
        <main className="flex-1">
          <StatusPage onBack={() => navigateTo('home')} />
        </main>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  // Render Changelog view
  if (currentView === 'changelog') {
    return (
      <div className="min-h-screen bg-slate-50 text-brand-navy flex flex-col">
        <Navbar
          onOpenContactModal={() => handleOpenContactModal()}
          onNavigate={navigateTo}
          currentView={currentView}
        />
        <main className="flex-1">
          <ChangelogPage onBack={() => navigateTo('home')} />
        </main>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  // Render Main Corporate Portfolio
  return (
    <div className="min-h-screen bg-white text-brand-navy flex flex-col">
      {/* Premium Animated Navigation */}
      <Navbar
        onOpenContactModal={() => handleOpenContactModal()}
        onNavigate={navigateTo}
        currentView={currentView}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01 — Hero */}
        <Hero onOpenContactModal={() => handleOpenContactModal()} />

        {/* 02 — Selected Work with Project Pulse */}
        <SelectedWork onSelectProject={(project) => setActiveProjectModal(project)} />

        {/* 03 — Services */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 04 — Website Health & Security Audit Lead Diagnostic */}
        <WebsiteAuditSection onStartInquiryWithAudit={handleStartInquiryWithAudit} />

        {/* 05 — Disciplined Architecture & Tech Stack Showcase */}
        <TechStackSection />

        {/* 06 — How We Work (7-Step Process Timeline) */}
        <HowWeWork />

        {/* 07 — Practical Security & Integrity Standards */}
        <TrustSecuritySection />

        {/* 08 — Engineering Insights & Writing */}
        <BlogSection />

        {/* 09 — About Us */}
        <About />

        {/* 10 — Meet Our Team (Founder Sudharshan & Harini R) */}
        <Team onOpenContactModal={() => handleOpenContactModal()} />

        {/* 11 — Contact CTA & Project Enquiry Form */}
        <ContactSection
          preselectedService={selectedService}
          onOpenEstimator={() => setIsEstimatorModalOpen(true)}
          onOpenScheduler={() => setIsSchedulerModalOpen(true)}
        />
      </main>

      {/* Footer with Telemetry & Engineering Links */}
      <Footer onNavigate={navigateTo} />

      {/* Case Study Deep Dive Modal with Project Pulse */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onStartInquiry={() => handleOpenContactModal(activeProjectModal?.title)}
      />

      {/* Quick Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        preselectedService={selectedService}
      />

      {/* Smart Project Estimator Multi-Step Modal */}
      <SmartEstimatorModal
        isOpen={isEstimatorModalOpen}
        onClose={() => setIsEstimatorModalOpen(false)}
        onTransferToInquiry={handleTransferEstimatorBrief}
      />

      {/* Schedule Meeting Discovery Session Modal */}
      <ScheduleMeetingModal
        isOpen={isSchedulerModalOpen}
        onClose={() => setIsSchedulerModalOpen(false)}
      />

      {/* Grounded AI Service Assistant Floating Widget */}
      <AIAssistantWidget onOpenEnquiry={() => handleOpenContactModal()} />
    </div>
  );
};

export default App;
