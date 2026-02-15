
import React from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  Activity,
  Lock,
  Globe
} from 'lucide-react';
import { Button } from '../components/UI/Button';
import { PageType } from '../types';

interface HomeProps {
  setPage: (page: PageType) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
                <ShieldCheck className="w-4 h-4 text-[#0056D2]" />
                <span className="text-[11px] font-bold text-[#0056D2] uppercase tracking-wider">Verified Microsoft Gold Partner</span>
              </div>
              
              <h1 className="text-6xl lg:text-[72px] font-bold text-[#0A1B3D] leading-[1.05] tracking-tight">
                We Manage, Secure <br />
                & Optimize Your <br />
                <span className="text-[#0056D2]">Microsoft Environment</span>
              </h1>
              
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                From licensing and migration to enterprise-grade security and proactive support, we ensure your modern workspace is always running at peak efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="w-full sm:w-auto px-10 py-4" onClick={() => setPage('CONTACT')}>
                  Request a Consultation
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 py-4" onClick={() => setPage('SERVICES')}>
                  Explore Services
                </Button>
              </div>
            </div>

            {/* Right Column: Dashboard Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 p-8 transform hover:scale-[1.01] transition-transform duration-500">
                <div className="grid grid-cols-2 gap-4">
                  {/* Dashboard Cards */}
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-slate-50/50 rounded-xl p-6 border border-slate-100/50 flex flex-col items-center justify-center space-y-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <BarChart3 className={`w-5 h-5 ${i % 2 === 0 ? 'text-[#0056D2]' : 'text-slate-300'}`} />
                      </div>
                      <div className="h-1.5 w-16 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full bg-[#0056D2] ${i === 1 ? 'w-2/3' : i === 2 ? 'w-full' : i === 3 ? 'w-1/2' : 'w-3/4'}`} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status Bar */}
                <div className="mt-8 bg-[#F0F7FF] border border-[#D4E8FF] rounded-xl p-5 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-[#D4E8FF] shadow-sm">
                      <ShieldCheck className="text-[#0056D2] w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#0056D2] uppercase tracking-widest">Active Security</p>
                      <p className="text-sm font-bold text-[#0A1B3D]">99.9% Infrastructure Uptime</p>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((u) => (
                      <div key={u} className="w-6 h-6 rounded-full bg-white border-2 border-[#F0F7FF] flex items-center justify-center text-[8px] font-bold text-slate-400">
                        U{u}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-100 rounded-full blur-3xl opacity-30 -z-0"></div>
            </div>
          </div>

          {/* Trust Metrics Footer */}
          <div className="mt-24 pt-10 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3 group cursor-default">
              <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Zap className="w-5 h-5 text-[#0056D2]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0A1B3D]">Top 1% Most Responsive</p>
                <p className="text-xs text-slate-400 font-medium">Global Partner Network</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group cursor-default">
              <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Shield className="w-5 h-5 text-[#0056D2]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0A1B3D]">18 Years Gold Partner</p>
                <p className="text-xs text-slate-400 font-medium">Deep Microsoft Expertise</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group cursor-default">
              <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Users className="w-5 h-5 text-[#0056D2]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0A1B3D]">5,620 Clients Served</p>
                <p className="text-xs text-slate-400 font-medium">Proven Enterprise Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Features Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-[#0A1B3D]">Your Modern Workspace, Reimagined</h2>
            <p className="text-lg text-slate-500">
              We build ecosystems that empower your workforce to collaborate securely from anywhere, leveraging the full power of Microsoft 365.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Planning',
                desc: 'Long-term IT roadmaps aligned with your growth objectives.',
                icon: <Activity className="w-6 h-6 text-[#0056D2]" />
              },
              {
                title: 'Security Hardening',
                desc: 'Advanced threat protection and identity management via Entra.',
                icon: <Lock className="w-6 h-6 text-[#0056D2]" />
              },
              {
                title: 'Global Management',
                desc: 'Seamless support across 28 countries with localized expertise.',
                icon: <Globe className="w-6 h-6 text-[#0056D2]" />
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A1B3D] mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Breakdown */}
      <section className="py-24 bg-[#0A1B3D] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: '25', label: 'Years Experience' },
              { value: '18Y', label: 'Gold Status' },
              { value: '28', label: 'Countries' },
              { value: '5.6k', label: 'Happy Clients' }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <p className="text-5xl lg:text-6xl font-black text-white">{stat.value}</p>
                <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0056D2_0,transparent_50%)]"></div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#0056D2] to-[#0041A3] rounded-[40px] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Ready to Secure Your Microsoft Cloud?</h2>
              <p className="text-blue-100 text-xl font-medium">Join thousands of enterprises optimizing their modern workspace with IT Partner.</p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0056D2] hover:bg-slate-50 px-12 py-5 text-lg" 
                  onClick={() => setPage('CONTACT')}
                >
                  Request Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            {/* Background Accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
