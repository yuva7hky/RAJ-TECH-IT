export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'EdTech' | 'E-Commerce' | 'Portfolio' | 'AI & SaaS' | 'Web Applications';
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  liveUrl: string;
  githubUrl?: string;
  gradient: string;
  codeSnippet: string;
  previewImage?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'speakflow',
    title: 'SpeakFlow',
    subtitle: 'AI-Powered English Learning & Speech Mastery Platform',
    category: 'EdTech',
    description: 'Interactive English learning platform featuring story-based lessons, Watch & Repeat mode and real-time speaking practice with instant AI feedback.',
    tags: ['React', 'Web Speech API', 'Tailwind CSS', 'Node.js', 'Framer Motion'],
    metrics: [
      { label: 'Fluency Growth', value: '+85%' },
      { label: 'Active Learners', value: '12,000+' },
      { label: 'Latency', value: '< 150ms' },
    ],
    liveUrl: 'https://speakflowfinal-status.netlify.app/',
    gradient: 'from-blue-600/30 via-cyan-500/20 to-indigo-600/10',
    codeSnippet: `const session = await SpeakFlow.startLesson({
  mode: 'Watch & Repeat',
  storyId: 'story_fluency_v2',
  aiSpeechEngine: true
});
session.onVoiceInput((score) => renderRealtimeFeedback(score));`,
  },
  {
    id: 'luxara',
    title: 'Luxara',
    subtitle: 'High-Fashion E-Commerce & Luxury Shopping Experience',
    category: 'E-Commerce',
    description: 'Premium fashion e-commerce platform with elegant shopping experience, fluid cart interactions, high-resolution visual catalogue, and fast checkout.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Stripe'],
    metrics: [
      { label: 'Conversion', value: '4.8%' },
      { label: 'Page Load', value: '0.6s' },
      { label: 'AOV Boost', value: '+32%' },
    ],
    liveUrl: 'https://madhava-ecommerce-website.netlify.app/',
    gradient: 'from-purple-600/30 via-pink-500/20 to-slate-900/10',
    codeSnippet: `const cart = new LuxaraCart({ currency: 'INR' });
cart.addItem({ id: 'lux_jacket_01', variant: 'Midnight Silk' });
await LuxaraCheckout.processFastPay({ oneClick: true });`,
  },
  {
    id: 'vs-tech',
    title: 'VS Tech',
    subtitle: 'Modern Engineering Showcase & Digital Portfolio',
    category: 'Portfolio',
    description: 'Modern freelancer portfolio website showcasing responsive web development, fluid typography, dark mode glassmorphic aesthetics, and high-performance interactive sections.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vite'],
    metrics: [
      { label: 'FPS Score', value: '60 FPS' },
      { label: 'Lighthouse', value: '99/100' },
      { label: 'Client Inquiries', value: '3.4x' },
    ],
    liveUrl: 'https://vs-tech-freelancer.vercel.app',
    gradient: 'from-cyan-600/30 via-emerald-500/20 to-blue-600/10',
    codeSnippet: `const portfolio = new VSTechPortfolio({
  theme: 'Cinematic Glass',
  responsive: true,
  animations: 'GSAP 60FPS'
});
portfolio.mount("#app-root");`,
  },
];
