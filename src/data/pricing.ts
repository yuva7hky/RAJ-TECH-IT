export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceRange: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  glowGradient: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Essential',
    priceRange: '₹3,000 – ₹5,000',
    period: 'One-Time Project',
    description: 'Perfect for startups, personal brands & small businesses needing a high-impact digital presence.',
    features: [
      'High-Converting Landing Page',
      'Fully Responsive (Mobile & Desktop)',
      'Basic SEO & Meta Setup',
      'Contact Form & Lead Capture',
      '1 Week Post-Launch Support',
      'Ultra-Fast Loading (Core Web Vitals)',
    ],
    ctaText: 'Choose Starter',
    glowGradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 'business',
    name: 'Business',
    badge: 'Most Popular',
    priceRange: '₹8,000 – ₹15,000',
    period: 'One-Time Project',
    description: 'Comprehensive web solutions for growing companies needing custom features and CMS integration.',
    popular: true,
    features: [
      'Multi-Page Website (Up to 6 Pages)',
      'Custom Glassmorphism UI & Motion',
      'CMS / Dynamic Content Setup',
      'Advanced SEO & Analytics Integration',
      'Database & Auth Setup (Firebase/Supabase)',
      '1 Month Dedicated Technical Support',
      'Speed & Performance 95+ Audit',
    ],
    ctaText: 'Start Business Plan',
    glowGradient: 'from-cyan-500/30 via-blue-600/20 to-indigo-500/10',
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: 'Full Platform',
    priceRange: '₹18,000 – ₹30,000',
    period: 'One-Time Project',
    description: 'Advanced custom web applications, SaaS platforms, complex workflows & custom API integrations.',
    features: [
      'Full-Stack Custom Web Application',
      'React / Next.js & Node.js Engine',
      'Payment Gateway Integration (Stripe/Razorpay)',
      'Custom Dashboard & Admin Panel',
      'AI Integration (OpenAI API / RAG)',
      '2 Months Priority SLA Support',
      '60 FPS Complex GSAP / Framer Animations',
    ],
    ctaText: 'Build Professional',
    glowGradient: 'from-indigo-500/30 via-purple-600/20 to-cyan-500/10',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Custom Architecture',
    priceRange: 'Custom Quote',
    period: 'Tailored Solution',
    description: 'End-to-end software engineering, mobile apps, microservices & enterprise infrastructure.',
    features: [
      'Dedicated Engineering Lead & Team',
      'Cross-Platform Web & Mobile App (Flutter)',
      'Microservices Cloud Architecture (Docker/AWS)',
      'Custom LLM Models & Autonomous AI Agents',
      '24/7 SLA Technical Maintenance',
      'Security & Penetration Audit Compliance',
    ],
    ctaText: 'Contact Enterprise Lead',
    glowGradient: 'from-purple-500/30 via-cyan-500/20 to-blue-600/10',
  },
];
