
import React from 'react';
import { Database, ShieldCheck, ArrowRight, CheckCircle2, CloudLightning } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { PageType } from '../types';

interface MigrationProps {
  setPage: (page: PageType) => void;
}

export const MigrationDetail: React.FC<MigrationProps> = ({ setPage }) => {
  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="bg-[#0A1B3D] text-white py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-200 rounded-lg text-sm font-bold uppercase tracking-wider">
              Service Expertise
            </div>
            <h1 className="text-5xl font-bold">Microsoft 365 Migration Services</h1>
            <p className="text-xl text-slate-300">
              Zero-loss, zero-downtime data migration to the world's most powerful cloud ecosystem. We handle the complexity, you enjoy the results.
            </p>
            <Button size="lg" onClick={() => setPage('CONTACT')}>Book Strategy Call</Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Database className="w-full h-full scale-150 rotate-12" />
        </div>
      </section>

      {/* Migration Capabilities */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl font-bold text-[#0A1B3D]">Migration Capabilities</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: 'Google to M365', icon: <CloudLightning className="text-blue-500" /> },
                  { title: 'Exchange On-Prem', icon: <Database className="text-blue-500" /> },
                  { title: 'Tenant-to-Tenant', icon: <ShieldCheck className="text-blue-500" /> },
                  { title: 'SharePoint & Azure', icon: <Database className="text-blue-500" /> },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg text-[#0A1B3D]">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
              <h3 className="text-2xl font-bold mb-6">Security During Migration</h3>
              <p className="text-slate-600 mb-8">
                Data integrity is our #1 priority. We utilize SOC2-compliant tools and encrypted pipelines to ensure not a single byte is compromised or lost during transition.
              </p>
              <ul className="space-y-4">
                {[
                  'End-to-end AES-256 bit encryption',
                  'Granular permission mapping',
                  'Post-migration validation audits',
                  'Regulatory compliance (HIPAA, GDPR) adherence'
                ].map((point, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                    <span className="font-medium text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-[#0A1B3D] text-center mb-16">The 5-Step Process</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { step: '01', title: 'Audit', desc: 'Analyzing source environment and data volumes.' },
              { step: '02', title: 'Planning', desc: 'Developing the communication strategy and migration schedule.' },
              { step: '03', title: 'Data Transfer', desc: 'Executing secure transfer via phased batches.' },
              { step: '04', title: 'Validation', desc: 'Running integrity checks and user acceptance testing.' },
              { step: '05', title: 'Support', desc: 'Day-one post-migration hypercare for your team.' }
            ].map((item) => (
              <div key={item.step} className="flex items-center bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                <span className="text-3xl font-black text-[#0056D2] w-20 opacity-40">{item.step}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-[#0A1B3D]">{item.title}</h4>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
                <ArrowRight className="text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Block */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-[#0A1B3D] mb-6">Plan Your Migration Today</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Get a specialized quote for your organization's specific data footprint.
          </p>
          <Button size="lg" onClick={() => setPage('CONTACT')}>Start Free Assessment</Button>
        </div>
      </section>
    </div>
  );
};
