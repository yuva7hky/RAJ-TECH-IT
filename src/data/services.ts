export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  iconName: string;
  badgeText: string;
  accentGlow: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    category: 'Digital Flagships',
    description: 'Ultra-fast, high-converting enterprise websites crafted with bespoke animations, 3D web graphics, and SEO architecture.',
    features: ['Custom React & Next.js Engine', 'Awwwards-Level Micro-Interactions', 'Core Web Vitals 99+ Score', 'Headless CMS Integration'],
    iconName: 'Globe',
    badgeText: 'High Conversion',
    accentGlow: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    category: 'Cloud SaaS Platforms',
    description: 'Scalable, secure, enterprise-grade SaaS web applications engineered for heavy data throughput and zero-downtime reliability.',
    features: ['Full-Stack Cloud Architecture', 'Real-time WebSocket Data', 'Role-Based Access & RBAC', 'Microservices API Gateway'],
    iconName: 'Layout',
    badgeText: 'Enterprise Grade',
    accentGlow: 'from-cyan-500/20 to-indigo-500/20',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    category: 'Autonomous Intelligence',
    description: 'Cutting-edge LLM integration, custom RAG pipelines, fine-tuned AI agents, and predictive analytics engines built to transform business ops.',
    features: ['Custom OpenAI & Claude RAG', 'Vector DB & Embeddings', 'Autonomous Business Agents', 'Predictive ML Pipelines'],
    iconName: 'Sparkles',
    badgeText: 'Next Gen AI',
    accentGlow: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    id: 'automation',
    title: 'Automation',
    category: 'Workflow Engineering',
    description: 'End-to-end business process automation, API orchestrations, and background job queues that save thousands of manual hours.',
    features: ['API & Webhook Orchestration', 'Data Extraction & Processing', 'Custom Zapier/Make Connectors', 'CI/CD Automated Pipelines'],
    iconName: 'Zap',
    badgeText: '10x Efficiency',
    accentGlow: 'from-blue-500/20 to-teal-500/20',
  },
  {
    id: 'ui-ux',
    title: 'UI UX Design',
    category: 'Product Experience',
    description: 'User-centric, hyper-polished UI/UX design systems, interactive prototypes, and motion design that captivate visitors.',
    features: ['Figma Design System Architecture', 'Interactive Motion Prototypes', 'User Journey & Empathy Mapping', 'Dark Mode & Glassmorphism Aesthetics'],
    iconName: 'Palette',
    badgeText: 'Pixel-Perfect',
    accentGlow: 'from-purple-500/20 to-cyan-500/20',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    category: '24/7 Reliability',
    description: 'Proactive 24/7 uptime monitoring, continuous security patching, cloud optimization, and dedicated SLA technical support.',
    features: ['99.99% Uptime Guarantee', 'Real-Time Threat Detection', 'Automated Daily Backups', 'Dedicated Engineer SLA'],
    iconName: 'ShieldCheck',
    badgeText: '24/7 SLA',
    accentGlow: 'from-cyan-500/20 to-blue-500/20',
  },
];
