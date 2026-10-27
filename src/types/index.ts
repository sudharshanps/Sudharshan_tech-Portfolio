export type ProjectCategory = 'client' | 'prototype' | 'academic' | 'concept';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  isClientWork: boolean;
  status: string;
  challenge: string;
  objective: string;
  solution: string;
  features: string[];
  techStack: string[];
  teamContribution: string;
  liveUrl?: string;
  metricsOrHighlight?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  badge: string;
  shortDesc: string;
  problem: string;
  deliverables: string[];
  technologies: string[];
  howToStart: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  company: string;
  tagline: string;
  description: string;
  image: string;
  altText: string;
  isSpotlight?: boolean;
  highlights: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  headline: string;
  description: string;
  deliverable: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  company: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  projectDetails: string;
}
