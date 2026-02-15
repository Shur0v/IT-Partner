
import React from 'react';
import { Mail, Phone, Globe, ExternalLink } from 'lucide-react';
import { OFFICES } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1B3D] text-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0056D2] font-bold text-xl">IT</span>
              </div>
              <span className="font-bold text-2xl">Partner</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We manage, secure, and optimize your Microsoft environment. Delivering world-class IT expertise for 25 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Our Offices</h4>
              {OFFICES.map((office) => (
                <div key={office.city} className="space-y-1">
                  <p className="font-semibold text-slate-200">{office.city}, {office.country}</p>
                  <p className="text-sm text-slate-400">{office.address}</p>
                  <a href={`tel:${office.phone}`} className="text-sm text-[#E8F1FF] hover:underline flex items-center space-x-2">
                    <Phone className="w-3 h-3" />
                    <span>{office.phone}</span>
                  </a>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Support</h4>
              <p className="text-sm text-slate-400">24/7 Global Helpdesk available for all managed clients.</p>
              <a
                href="#"
                className="inline-flex items-center space-x-2 bg-[#0056D2] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0041A3] transition-colors"
              >
                <span>Helpdesk Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Whitepapers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance Certifications</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:row items-center justify-between text-sm text-slate-500">
          <p>© 2024 IT Partner. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Microsoft Gold Partner Certified since 2006.</p>
        </div>
      </div>
    </footer>
  );
};
