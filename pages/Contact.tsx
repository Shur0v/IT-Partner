
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { OFFICES } from '../constants';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-[#0A1B3D]">Let’s Talk About Your Microsoft Environment</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Connect with our certified enterprise engineers. Whether you're planning a migration or need 24/7 managed security, we're ready to help.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-xl">Our Commitment</h3>
              <div className="space-y-4">
                {[
                  '15-minute response time for critical issues',
                  '100% Satisfaction Guarantee on all deployments',
                  'Dedicated Project Manager for every account',
                  'Full transparent reporting and ROI dashboards'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 font-medium text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#0056D2]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex items-center space-x-12">
              <div className="text-center">
                <ShieldCheck className="w-12 h-12 text-[#0056D2] mx-auto mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">SOC2 Certified</p>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-12 h-12 text-[#0056D2] mx-auto mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Microsoft Gold</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl relative">
            {submitted ? (
              <div className="text-center py-20 space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-[#0A1B3D]">Request Received!</h2>
                <p className="text-slate-600">Our enterprise team will reach out to your business email within 60 minutes.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#0056D2] outline-none bg-white transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Business Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#0056D2] outline-none bg-white transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#0056D2] outline-none bg-white transition-all" placeholder="Enterprise Inc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Size</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#0056D2] outline-none bg-white transition-all">
                      <option>10 - 50 Employees</option>
                      <option>50 - 250 Employees</option>
                      <option>250 - 1000 Employees</option>
                      <option>1000+ Employees</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Services Needed</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Migration', 'Managed Security', 'Support', 'Licensing'].map(service => (
                      <label key={service} className="flex items-center space-x-2 text-sm text-slate-600 p-2 border border-slate-200 rounded-lg hover:bg-white cursor-pointer transition-colors">
                        <input type="checkbox" className="w-4 h-4 text-[#0056D2]" />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#0056D2] outline-none bg-white transition-all" placeholder="How can we help?"></textarea>
                </div>
                <Button fullWidth size="lg" type="submit">
                  Request Consultation
                </Button>
                <p className="text-center text-xs text-slate-500 font-medium">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0A1B3D] mb-12">Global Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {OFFICES.map((office) => (
              <div key={office.city} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-left space-y-4">
                <h4 className="text-xl font-bold text-[#0A1B3D]">{office.city}</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 text-slate-600">
                    <MapPin className="w-5 h-5 shrink-0 text-[#0056D2]" />
                    <span className="text-sm font-medium">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Phone className="w-5 h-5 shrink-0 text-[#0056D2]" />
                    <span className="text-sm font-medium">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Mail className="w-5 h-5 shrink-0 text-[#0056D2]" />
                    <span className="text-sm font-medium">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
