
import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** What the client gets — used on the service detail page. */
  benefits?: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  metric: string;
  description: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
