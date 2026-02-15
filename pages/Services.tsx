
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { SERVICES_CATEGORIES } from '../constants';
import { PageType } from '../types';

interface ServicesProps {
  setPage: (page: PageType) => void;
}

export const Services: React.FC<ServicesProps> = ({ setPage }) => {
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES_CATEGORIES[0].id);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center space-y-6">
          <h1 className="text-5xl font-bold text-[#0A1B3D]">Enterprise Microsoft Managed Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From initial cloud readiness assessment to ongoing optimization, we manage the entire lifecycle of your Microsoft ecosystem.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {SERVICES_CATEGORIES.map((service) => (
              <div 
                key={service.id} 
                className={`bg-white rounded-2xl p-8 border shadow-sm transition-all duration-300 ${
                  expandedId === service.id ? 'ring-2 ring-[#0056D2] border-transparent' : 'border-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A1B3D] mb-2">{service.title}</h3>
                    <p className="text-slate-600 font-medium">{service.description}</p>
                  </div>
                  <button 
                    onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                    className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedId === service.id ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${expandedId === service.id ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-4 pt-4 border-t border-slate-50">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Key Capabilities</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center space-x-2 text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#0056D2]" />
                          <span className="text-sm font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 flex space-x-4">
                      <Button size="sm" onClick={() => setPage('MIGRATION')}>Learn More</Button>
                      <Button variant="outline" size="sm" onClick={() => setPage('CONTACT')}>Inquire</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Diagram Callout */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0A1B3D] mb-12">The Integrated Service Lifecycle</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Assess', 'Migrate', 'Secure', 'Manage', 'Optimize'].map((label, i) => (
              <div key={label} className="relative group">
                <div className="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-slate-100 group-hover:bg-[#E8F1FF] group-hover:border-[#0056D2] transition-all">
                  <span className="font-bold text-[#0A1B3D] group-hover:text-[#0056D2]">{label}</span>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform translate-x-full -translate-y-1/2 z-10 text-slate-300">
                    <ChevronRight />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Button size="lg" onClick={() => setPage('CONTACT')}>Plan Your Digital Roadmap</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
