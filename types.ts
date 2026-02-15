
export type PageType = 'HOME' | 'SERVICES' | 'MIGRATION' | 'CONTACT';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
}
