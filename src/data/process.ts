export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  iconName: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discover',
    subtitle: 'Discovery & Vision Mapping',
    description: 'We analyze your core vision, business objectives, target audience, and market landscape to build a crystal-clear technical roadmap.',
    deliverables: ['Scope of Work Document', 'Product Requirements (PRD)', 'Tech Architecture Outline'],
    duration: 'Phase 1',
    iconName: 'Compass',
  },
  {
    stepNumber: '02',
    title: 'Research',
    subtitle: 'Competitor & UX Benchmarking',
    description: 'Deep UX research, competitor analysis, user journey mapping, and technical feasibility studies to ensure market dominance.',
    deliverables: ['User Persona Map', 'Competitor Benchmark Report', 'Feature Prioritization Matrix'],
    duration: 'Phase 2',
    iconName: 'Search',
  },
  {
    stepNumber: '03',
    title: 'UI Design',
    subtitle: 'Crafting Visual Excellence',
    description: 'Bespoke UI design in Figma with interactive motion prototypes, custom glassmorphic components, and cohesive luxury design systems.',
    deliverables: ['Figma Design System', 'High-Fidelity Mockups', 'Clickable Motion Prototype'],
    duration: 'Phase 3',
    iconName: 'Palette',
  },
  {
    stepNumber: '04',
    title: 'Development',
    subtitle: 'Agile Full-Stack Engineering',
    description: 'Senior engineers build your software using React, Next.js, Node.js, and Python. Sprint reviews keep you informed at every milestone.',
    deliverables: ['Production React Front-end', 'Scalable Backend APIs', 'CI/CD Pipeline Setup'],
    duration: 'Phase 4',
    iconName: 'Code2',
  },
  {
    stepNumber: '05',
    title: 'Testing',
    subtitle: 'QA Audit & Performance Tuning',
    description: 'Rigorous automated unit testing, end-to-end user flows, security vulnerability scans, and 60 FPS performance optimization.',
    deliverables: ['QA Audit Clearance', 'Lighthouse 95+ Score', 'Cross-Device Validation'],
    duration: 'Phase 5',
    iconName: 'ShieldCheck',
  },
  {
    stepNumber: '06',
    title: 'Deployment',
    subtitle: 'Zero-Downtime Production Launch',
    description: 'Smooth release to cloud infrastructure (Vercel/AWS/Netlify) with real-time performance monitoring, SSL setup, and CDN caching.',
    deliverables: ['Live Production URL', 'SSL & DNS Certificate', 'Cloud Infrastructure Handover'],
    duration: 'Phase 6',
    iconName: 'Rocket',
  },
  {
    stepNumber: '07',
    title: 'Support',
    subtitle: 'Continuous Evolution & 24/7 SLA',
    description: 'Dedicated ongoing maintenance, feature updates, continuous performance monitoring, and rapid SLA technical assistance.',
    deliverables: ['24/7 Monitoring', 'Monthly Feature Updates', 'Dedicated SLA Engineering'],
    duration: 'Ongoing',
    iconName: 'LifeBuoy',
  },
];
