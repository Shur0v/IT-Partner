
import React, { useState } from 'react';
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
  const [currentVideo, setCurrentVideo] = useState('/vid1.mp4');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            key={currentVideo}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => setCurrentVideo(prev => prev === '/vid1.mp4' ? '/vid2.mp4' : '/vid1.mp4')}
          >
            <source src={currentVideo} type="video/mp4" />
          </video>
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B3D]/95 via-[#0A1B3D]/80 to-[#0A1B3D]/60 z-10"></div>
        </div>

        <div className="relative z-20 h-full w-full max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col">
          <div className="flex-grow flex items-center w-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center w-full">
              {/* Left Column: Content */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span className="text-[11px] font-bold text-blue-100 uppercase tracking-wider">Verified Microsoft Gold Partner</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  We Manage, Secure <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    & Optimize Your
                  </span> <br />
                  Microsoft Cloud
                </h1>

                <p className="text-lg text-blue-100/80 leading-relaxed max-w-xl">
                  From licensing and migration to enterprise-grade security and proactive support, we ensure your modern workspace is always running at peak efficiency.
                </p>

                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                  <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg bg-[#0056D2] hover:bg-[#0041A3] border-none shadow-lg shadow-blue-900/50" onClick={() => setPage('CONTACT')}>
                    Request a Consultation
                  </Button>
                  <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-[#0056D2] transition-colors shadow-lg" onClick={() => setPage('SERVICES')}>
                    Explore Services
                  </Button>
                </div>
              </div>

              {/* Right Column: Glassmorphic Dashboard Visual */}
              <div className="lg:col-span-5 relative hidden lg:block">
                <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 p-6 transform hover:scale-[1.02] transition-transform duration-500 group">
                  {/* Header of Fake Dashboard */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-black/20 text-[10px] text-white/60 font-mono">
                      security_monitor_v2.exe
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Metric Card 1 */}
                    <div className="bg-black/20 rounded-xl p-4 border border-white/5 flex items-center justify-between group-hover:bg-black/30 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <Activity className="text-blue-400 w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-blue-200">System Health</p>
                          <p className="text-sm font-bold text-white">Optimal (98%)</p>
                        </div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>

                    {/* Metric Card 2 */}
                    <div className="bg-black/20 rounded-xl p-4 border border-white/5 flex items-center justify-between group-hover:bg-black/30 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <Shield className="text-purple-400 w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-blue-200">Threats Blocked</p>
                          <p className="text-sm font-bold text-white">0 Detected</p>
                        </div>
                      </div>
                      <div className="h-2 w-16 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 w-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Chart Visual */}
                    <div className="pt-4 mt-2">
                      <div className="flex items-end justify-between space-x-2 h-24">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                          <div key={i} className="w-full bg-blue-500/20 rounded-t-sm relative overflow-hidden group-hover:bg-blue-500/30 transition-all" style={{ height: `${h}%` }}>
                            <div className="absolute bottom-0 left-0 w-full bg-blue-400/80 h-1"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Glows */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 -z-10 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500 rounded-full blur-[80px] opacity-20 -z-10"></div>
              </div>
            </div>

            {/* Trust Metrics Footer - Redesigned for Dark Background */}
          </div>
          <div className="pb-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8 shrink-0">
            <div className="flex items-center space-x-3 group cursor-default">
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                <Zap className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Top 1% Most Responsive</p>
                <p className="text-xs text-blue-200/70 font-medium">Global Partner Network</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group cursor-default">
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                <Shield className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">18 Years Gold Partner</p>
                <p className="text-xs text-blue-200/70 font-medium">Deep Microsoft Expertise</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group cursor-default">
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                <Users className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">5,620 Clients Served</p>
                <p className="text-xs text-blue-200/70 font-medium">Proven Enterprise Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Solution Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Diagram Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-100/50 rounded-3xl transform rotate-3 -z-10 blur-xl opacity-60 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src="/image.png"
                alt="End-to-End Microsoft 365 Solution Diagram"
                className="w-full h-auto object-contain relative z-10 transform transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-[#0A1B3D] leading-[1.1]">
                The End-to-<br className="hidden lg:block" />End Solution
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Our offering encompasses every aspect of your Microsoft365 workspace. This includes not only the licenses for all necessary products but also dedicated IT services for seamless implementation and ongoing support, coupled with robust security measures to safeguard your data.
              </p>
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
      </section >

      {/* Stats Breakdown */}
      < section className="py-24 bg-[#0A1B3D] relative overflow-hidden" >
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
      </section >

      {/* Final CTA */}
      < section className="py-24" >
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#0056D2] to-[#0041A3] rounded-[40px] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Ready to Secure Your Microsoft Cloud?</h2>
              <p className="text-blue-100 text-xl font-medium">Join thousands of enterprises optimizing their modern workspace with IT Partner.</p>
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:text-[#0056D2] hover:bg-white px-12 py-5 text-lg transition-colors border-none group"
                  onClick={() => setPage('CONTACT')}
                >
                  Request Consultation <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            {/* Background Accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section >
    </div >
  );
};
