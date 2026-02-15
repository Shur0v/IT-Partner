
import React from 'react';
import { 
  Shield, 
  Cloud, 
  Users, 
  Zap, 
  BarChart3, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  Database,
  RefreshCcw,
  Globe,
  Clock,
  Mail,
  Phone
} from 'lucide-react';

export const COLORS = {
  primary: '#0056D2', // Enterprise Blue
  secondary: '#E8F1FF', // Lighter highlight
  dark: '#0A1B3D', // Deep blue for headers
  grayLight: '#F8F9FB', // Background sections
  border: '#E2E8F0', // Dividers
};

export const NAVIGATION = [
  { label: 'Solutions', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Subscriptions', href: '#' },
  { label: 'Industries', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_BADGES = [
  { label: 'Top 1% Most Responsive Partner', icon: <Zap className="w-5 h-5" /> },
  { label: '18 Years Gold Partner', icon: <Shield className="w-5 h-5" /> },
  { label: '5,620 Clients Served', icon: <Users className="w-5 h-5" /> },
];

export const METRICS = [
  { label: 'Years in Business', value: '25' },
  { label: 'Gold Partner Status', value: '18Y' },
  { label: 'Countries Reached', value: '28' },
  { label: 'Clients Served', value: '5,620' },
];

export const SERVICES_CATEGORIES = [
  {
    id: 'strategy',
    title: 'Assessment & Strategy',
    description: 'Data-driven roadmaps to align IT with business goals.',
    bullets: ['Cloud Readiness Audit', 'Licensing Optimization', 'Security Gap Analysis']
  },
  {
    id: 'migration',
    title: 'Migration',
    description: 'Zero-downtime transitions to the Microsoft Cloud.',
    bullets: ['M365 & SharePoint', 'Azure Infrastructure', 'Tenant-to-Tenant']
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Enterprise-grade protection for the modern workspace.',
    bullets: ['MDR & XDR Services', 'Identity (Azure AD) Management', 'Compliance Enforcement']
  },
  {
    id: 'managed',
    title: 'Managed Services',
    description: 'Proactive support and constant optimization.',
    bullets: ['24/7 Monitoring', 'Patch Management', 'Digital Transformation Calls']
  }
];

export const OFFICES = [
  {
    city: 'New York',
    country: 'USA',
    address: '123 Wall Street, Financial District',
    phone: '+1 (555) 123-4567',
    email: 'us@itpartner.com'
  },
  {
    city: 'London',
    country: 'UK',
    address: '45 Canary Wharf, Level 12',
    phone: '+44 20 7946 0123',
    email: 'uk@itpartner.com'
  },
  {
    city: 'Singapore',
    country: 'SG',
    address: 'Marina Bay Financial Centre',
    phone: '+65 6789 0123',
    email: 'asia@itpartner.com'
  }
];
