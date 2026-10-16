export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a typical software project take to complete?',
    answer: 'Timeline depends on project scope. High-converting custom websites take 2–3 weeks, MVP web applications take 4–6 weeks, while enterprise multi-cloud platforms range from 8–12 weeks. We work in 1-week sprints with transparent milestones.',
    category: 'Timeline & Scope',
  },
  {
    id: 'faq-2',
    question: 'What is your pricing structure and working model?',
    answer: 'We offer fixed-scope milestone contracts for defined deliverables or dedicated monthly engineering team retainers for continuous evolution. Every proposal includes a detailed breakdown with zero hidden fees.',
    category: 'Pricing',
  },
  {
    id: 'faq-3',
    question: 'Do I own 100% of the source code and intellectual property?',
    answer: 'Yes, absolutely. Upon milestone completion, full IP ownership, GitHub repositories, cloud credentials, and design files are transferred 100% to your organization.',
    category: 'IP & Ownership',
  },
  {
    id: 'faq-4',
    question: 'Can Raj Tech IT integrate AI and LLMs into our existing software?',
    answer: 'Yes! We specialize in embedding custom OpenAI models, vector embeddings, local LLMs, and RAG pipelines into existing legacy databases and modern React/Node applications.',
    category: 'AI Capabilities',
  },
  {
    id: 'faq-5',
    question: 'How do you handle maintenance, hosting, and SLA support after launch?',
    answer: 'We provide comprehensive 24/7 post-launch maintenance plans including server uptime monitoring, security patches, performance audits, and SLA technical response within 1 hour.',
    category: 'Support',
  },
  {
    id: 'faq-6',
    question: 'How do we get started with Raj Tech IT?',
    answer: 'Simply fill out our contact form or send an email to ajayarun177@gmail.com. We will schedule a free 30-minute technical discovery call to review your goals and deliver a detailed scope proposal within 48 hours.',
    category: 'Onboarding',
  },
];
