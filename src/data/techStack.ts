export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & AI' | 'Database & Cloud' | 'Animation & Mobile';
  description: string;
  badge: string;
  iconName: string;
  glowColor: string;
}

export const TECH_STACK_DATA: TechItem[] = [
  {
    name: 'React',
    category: 'Frontend',
    description: 'Component architecture & reactive state engine.',
    badge: 'Core UI',
    iconName: 'Atom',
    glowColor: 'group-hover:border-cyan-400/60 group-hover:shadow-[0_0_30px_rgba(0,210,255,0.4)]',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    description: 'Server-side rendering, static generation & edge API routes.',
    badge: 'SSR & Edge',
    iconName: 'Zap',
    glowColor: 'group-hover:border-white/60 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]',
  },
  {
    name: 'Node.js',
    category: 'Backend & AI',
    description: 'Asynchronous event-driven microservices & REST/GraphQL APIs.',
    badge: 'Runtime',
    iconName: 'Server',
    glowColor: 'group-hover:border-emerald-400/60 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.4)]',
  },
  {
    name: 'Python',
    category: 'Backend & AI',
    description: 'AI model fine-tuning, automated data pipelines & FastAPI.',
    badge: 'AI & Data',
    iconName: 'FileCode',
    glowColor: 'group-hover:border-amber-400/60 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]',
  },
  {
    name: 'Flutter',
    category: 'Animation & Mobile',
    description: 'Cross-platform native iOS & Android high-performance mobile apps.',
    badge: 'Native Mobile',
    iconName: 'Smartphone',
    glowColor: 'group-hover:border-sky-400/60 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]',
  },
  {
    name: 'Firebase',
    category: 'Database & Cloud',
    description: 'Serverless auth, real-time Firestore database & push messaging.',
    badge: 'Serverless',
    iconName: 'Flame',
    glowColor: 'group-hover:border-orange-400/60 group-hover:shadow-[0_0_30px_rgba(251,146,60,0.4)]',
  },
  {
    name: 'Supabase',
    category: 'Database & Cloud',
    description: 'Open-source Postgres DB with real-time web sockets & row security.',
    badge: 'Postgres DB',
    iconName: 'Database',
    glowColor: 'group-hover:border-emerald-500/60 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]',
  },
  {
    name: 'Docker',
    category: 'Database & Cloud',
    description: 'Containerized deployment & reproducible cloud environments.',
    badge: 'DevOps',
    iconName: 'Box',
    glowColor: 'group-hover:border-blue-400/60 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.4)]',
  },
  {
    name: 'OpenAI',
    category: 'Backend & AI',
    description: 'GPT-4o, Custom RAG embeddings & intelligent autonomous agents.',
    badge: 'LLM Engine',
    iconName: 'Sparkles',
    glowColor: 'group-hover:border-purple-400/60 group-hover:shadow-[0_0_30px_rgba(192,132,252,0.4)]',
  },
  {
    name: 'GSAP',
    category: 'Animation & Mobile',
    description: 'High-performance 60 FPS timeline animations & scroll triggers.',
    badge: '60 FPS Motion',
    iconName: 'Activity',
    glowColor: 'group-hover:border-green-400/60 group-hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]',
  },
  {
    name: 'Framer Motion',
    category: 'Animation & Mobile',
    description: 'Declarative physics-based gestures & layout transitions for React.',
    badge: 'React Physics',
    iconName: 'Layers',
    glowColor: 'group-hover:border-pink-400/60 group-hover:shadow-[0_0_30px_rgba(244,114,182,0.4)]',
  },
  {
    name: 'Three.js',
    category: 'Animation & Mobile',
    description: 'Hardware-accelerated 3D WebGL graphics, shaders & interactive models.',
    badge: '3D WebGL',
    iconName: 'BoxSelect',
    glowColor: 'group-hover:border-indigo-400/60 group-hover:shadow-[0_0_30px_rgba(129,140,248,0.4)]',
  },
];
