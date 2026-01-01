
import { 
  ShieldCheck, 
  Cloud, 
  Lightbulb, 
  Settings2, 
  Layers, 
  Workflow,
  Building2,
  Stethoscope,
  Landmark,
  Rocket,
  Globe
} from 'lucide-react';
import { Service, Industry, CaseStudy, FAQItem } from './types';

// Fix: Replaced CloudCircuit (non-existent) with Cloud icon
export const SERVICES: Service[] = [
  {
    id: 'strategy',
    title: 'IT Strategy & Advisory',
    description: 'Transform your business with a roadmap that aligns technology investments with your long-term strategic goals.',
    icon: Lightbulb
  },
  {
    id: 'cloud',
    title: 'Cloud Architecture',
    description: 'Optimized cloud migration and infrastructure design using AWS, Azure, and Google Cloud for scalability.',
    icon: Cloud
  },
  {
    id: 'cyber',
    title: 'Cybersecurity & Compliance',
    description: 'Protect your digital assets with advanced threat detection, risk assessments, and regulatory compliance (SOC2, HIPAA).',
    icon: ShieldCheck
  },
  {
    id: 'managed',
    title: 'Managed IT Services',
    description: '24/7 monitoring and proactive maintenance to ensure maximum uptime and system performance.',
    icon: Settings2
  },
  {
    id: 'infra',
    title: 'Infrastructure Modernization',
    description: 'Legacy system upgrades and hardware rationalization to improve efficiency and reduce technical debt.',
    icon: Layers
  },
  {
    id: 'automation',
    title: 'Integration & Automation',
    description: 'Seamless software connectivity and custom workflow automation to eliminate manual bottlenecks.',
    icon: Workflow
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'finance',
    name: 'Finance & Banking',
    description: 'Secure, high-availability systems for fintech and traditional banking institutions.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'HIPAA-compliant infrastructure and modern health-tech system integration.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gov',
    name: 'Government',
    description: 'Reliable IT solutions for public sector agencies focused on citizen services.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'startups',
    name: 'Tech Startups',
    description: 'Rapidly scalable cloud environments and DevOps for fast-growing technology firms.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800'
  }
];


export const FAQS: FAQItem[] = [
  {
    question: "How do you handle data privacy and security?",
    answer: "We follow industry-leading frameworks like ISO 27001 and NIST. All client data is handled with end-to-end encryption, and we conduct regular vulnerability assessments to ensure the highest security standards."
  },
  {
    question: "Do you offer support for hybrid cloud environments?",
    answer: "Yes, we specialize in bridging the gap between legacy on-premise systems and modern cloud providers (AWS, Azure, GCP), ensuring seamless data flow and management."
  },
  {
    question: "What is your typical engagement model?",
    answer: "We offer project-based consulting for specific migrations or implementations, as well as ongoing Managed Service Provider (MSP) agreements for long-term IT operations."
  },
  {
    question: "How long does a typical IT assessment take?",
    answer: "A comprehensive IT strategy and cybersecurity assessment usually takes between 2 to 4 weeks, depending on the complexity of your infrastructure."
  }
];
