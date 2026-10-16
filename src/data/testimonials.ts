export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  projectCategory: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'Alexander Wright',
    role: 'Chief Technology Officer',
    company: 'Vanguard SaaS Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Raj Tech IT delivered our cloud dashboard 3 weeks ahead of schedule. The visual polish, 60 FPS animation quality, and clean React architecture set a new standard for our organization.',
    projectCategory: 'Web Application',
  },
  {
    id: 't-2',
    clientName: 'Elena Rostova',
    role: 'Founder & CEO',
    company: 'Aura AI Technologies',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'If their own agency website impressed you, wait until you see what they build for your product. Their custom OpenAI RAG integration boosted our customer query resolution by 400%.',
    projectCategory: 'AI Solution',
  },
  {
    id: 't-3',
    clientName: 'David K. Miller',
    role: 'VP of Product Engineering',
    company: 'Hyperion Capital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Working with Raj Tech IT felt like having a world-class Silicon Valley engineering team. Pixel-perfect implementation, zero tech debt, and immediate communication.',
    projectCategory: 'Financial Dashboard',
  },
];
