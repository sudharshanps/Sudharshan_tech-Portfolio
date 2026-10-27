export type ProjectCategory = 'client' | 'prototype' | 'academic' | 'concept';

export type PulseStage =
  | 'Planning'
  | 'In Development'
  | 'Testing'
  | 'Deployed'
  | 'Maintenance'
  | 'Prototype'
  | 'Research';

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
  image?: string;
  imageFit?: 'cover' | 'contain';
  // Project Pulse fields
  pulseStage: PulseStage;
  lastUpdated: string;
  pulseNote: string;
  nextMilestone?: string;
  repoOrDemoUrl?: string;
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
  designation: string;
  role: string;
  company: string;
  tagline: string;
  description: string;
  quote?: string;
  image: string;
  altText: string;
  isSpotlight?: boolean;
  highlights: string[];
  email?: string;
  phone?: string;
  instagramUrl?: string;
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
  company?: string;
  email: string;
  phone?: string;
  serviceType: string;
  budgetRange?: string;
  timeline?: string;
  projectDetails: string;
  estimatorBrief?: string;
}

export type ChangelogCategory = 'Release' | 'Feature' | 'Improvement' | 'Fix' | 'Maintenance';

export interface ChangelogEntry {
  id: string;
  date: string;
  projectName: string;
  category: ChangelogCategory;
  title: string;
  description: string;
  verifiedStatus: string;
  keyChanges: string[];
  commitHash?: string;
}

export type ServiceStatus = 'operational' | 'degraded' | 'outage' | 'unknown';

export interface ObservationPoint {
  timestamp: string;
  status: ServiceStatus;
  latencyMs: number;
  httpCode?: number;
}

export interface MonitoredService {
  id: string;
  name: string;
  type: 'api' | 'website' | 'edge-service' | 'cdn';
  url: string;
  status: ServiceStatus;
  latencyMs: number;
  httpCode: number;
  lastChecked: string;
  lastSuccessCheck: string;
  uptime24h: number;
  uptime7d: number;
  history24h: ObservationPoint[];
}

export interface IncidentUpdate {
  timestamp: string;
  message: string;
  status: string;
}

export interface Incident {
  id: string;
  title: string;
  serviceId: string;
  severity: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
  impact: string;
  updates: IncidentUpdate[];
}

export interface SystemStatusResponse {
  overallStatus: ServiceStatus;
  services: MonitoredService[];
  incidents: Incident[];
  lastCheckTimestamp: string;
  averageLatencyMs: number;
  uptimePercentage: number;
  monitoringIntervalSec: number;
}

export interface AuditCheck {
  id: string;
  category: 'security' | 'performance' | 'metadata' | 'mobile';
  title: string;
  passed: boolean;
  score: number;
  observation: string;
  recommendation?: string;
}

export interface AuditReport {
  targetUrl: string;
  timestamp: string;
  responseLatencyMs: number;
  httpStatus: number;
  overallScore: number;
  checks: AuditCheck[];
  disclaimer: string;
}

export interface EstimatorScope {
  serviceType: string;
  coreGoal: string;
  features: string[];
  timeline: string;
  budgetRange: string;
  indicativeTimeline: string;
  recommendedTech: string[];
  suggestedArchitecture: string;
}

export interface SocietyOffering {
  id: string;
  category: string;
  title: string;
  iconName: string;
  badge: string;
  description: string;
  offerings: string[];
  disclaimer?: string;
}

export interface CommunityPillar {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface CommunityWorkflowStep {
  step: number;
  title: string;
  description: string;
}
