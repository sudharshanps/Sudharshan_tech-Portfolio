import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { HowWeWork } from './components/HowWeWork';
import { About } from './components/About';
import { Team } from './components/Team';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Web Development');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

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

  return (
    <div className="min-h-screen bg-white text-brand-navy flex flex-col">
      {/* Premium Animated Navigation */}
      <Navbar onOpenContactModal={() => handleOpenContactModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01 — Hero */}
        <Hero onOpenContactModal={() => handleOpenContactModal()} />

        {/* 02 — Selected Work */}
        <SelectedWork onSelectProject={(project) => setActiveProjectModal(project)} />

        {/* 03 — Services */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 04 — How We Work */}
        <HowWeWork />

        {/* 05 — About Us */}
        <About />

        {/* 06 — Meet Our Team (Featuring Harini R) */}
        <Team onOpenContactModal={() => handleOpenContactModal()} />

        {/* 07 — Contact CTA & Project Enquiry Form */}
        <ContactSection preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Deep Dive Modal */}
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
    </div>
  );
};

export default App;
