
import {
  Settings2,
  Network,
  Mail,
  Database,
  Landmark,
  Headphones
} from 'lucide-react';
import { Service, Industry, CaseStudy, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'managed-support',
    title: 'Managed IT Support',
    description: 'Comprehensive small-business IT support including endpoint management, software patching, troubleshooting, remote helpdesk services, and ongoing system maintenance.',
    icon: Settings2,
    benefits: [
      'Proactive monitoring that catches issues before they cause downtime',
      'Automatic software patching across every device',
      'Remote help desk for day-to-day user support',
      'Ongoing maintenance so your systems stay fast and secure',
    ]
  },
  {
    id: 'network-admin',
    title: 'Network Administration',
    description: 'Professional network setup and management for wired and wireless environments, including VLAN configuration, routing, performance monitoring, and secure network optimization.',
    icon: Network,
    benefits: [
      'Reliable wired and wireless network setup',
      'VLAN configuration and secure routing',
      'Performance monitoring and optimization',
      'Guest and staff network separation for security',
    ]
  },
  {
    id: 'microsoft-365',
    title: 'Microsoft 365 Support',
    description: 'Expert assistance with Microsoft 365 administration, including email setup, device management, user provisioning, and basic compliance configuration for secure collaboration.',
    icon: Mail,
    benefits: [
      'Email and mailbox setup done right',
      'User provisioning and device management',
      'Multi-factor authentication and secure defaults',
      'Basic compliance configuration for collaboration',
    ]
  },
  {
    id: 'data-protection',
    title: 'Data Protection & Backup Support',
    description: 'Secure data backup, recovery assistance, and data protection planning to safeguard your business information and ensure continuity.',
    icon: Database,
    benefits: [
      'Scheduled, secure backups of business data',
      'Tested recovery so restores actually work',
      'Data protection planning for continuity',
      'Guidance to reduce ransomware and data-loss risk',
    ]
  },
  {
    id: 'government-ready',
    title: 'Government-Ready IT Support',
    description: 'Technology support tailored for public sector needs, including documentation-ready processes, compliant service practices, and structured IT operations suitable for government environments.',
    icon: Landmark,
    benefits: [
      'Documentation-ready processes for audits',
      'Structured, repeatable IT operations',
      'Service practices suited to public-sector needs',
      'Clear reporting your stakeholders can rely on',
    ]
  },
  {
    id: 'help-desk',
    title: 'Help Desk',
    description: 'Responsive technical support and troubleshooting assistance to keep your team productive and your systems running smoothly.',
    icon: Headphones,
    benefits: [
      'Fast response during business hours',
      'Remote troubleshooting for quick resolution',
      'On-site help when hands-on support is needed',
      'Friendly, jargon-free assistance for your whole team',
    ]
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
    question: "What's included in Managed IT?",
    answer: "Managed IT includes proactive monitoring, system patching, remote support, and day‑to‑day user assistance. We keep your devices secure, updated, and running smoothly so your business can operate without interruptions."
  },
  {
    question: "How quickly do you respond?",
    answer: "Most support requests receive a response within one hour during business hours. Urgent issues are prioritized to reduce downtime and keep your team productive."
  },
  {
    question: "Can you help remotely?",
    answer: "Yes. Most issues can be resolved remotely for faster service and minimal disruption. When needed, on‑site visits are available for hands‑on support."
  },
  {
    question: "Do you provide cybersecurity support?",
    answer: "Yes. We offer essential cybersecurity services including patching, endpoint protection, secure configuration, and user guidance to help protect your business from common threats."
  }
];
