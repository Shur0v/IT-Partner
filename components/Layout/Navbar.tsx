
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '../UI/Button';
import { PageType } from '../../types';

interface NavbarProps {
  currentPage: PageType;
  setPage: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Solutions', page: 'HOME' as PageType },
    { label: 'Services', page: 'SERVICES' as PageType },
    { label: 'Migration', page: 'MIGRATION' as PageType },
    { label: 'Contact', page: 'CONTACT' as PageType },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => setPage('HOME')}
        >
          <div className="w-10 h-10 bg-[#0056D2] rounded-lg flex items-center justify-center group-hover:bg-[#0041A3] transition-colors">
            <span className="text-white font-bold text-xl">ITP</span>
          </div>
          <span className="font-bold text-xl text-[#0A1B3D]">Partner</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setPage(item.page)}
              className={`text-sm font-medium transition-colors hover:text-[#0056D2] ${
                currentPage === item.page ? 'text-[#0056D2]' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button size="sm" onClick={() => setPage('CONTACT')}>
            Get a Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setPage(item.page);
                setIsOpen(false);
              }}
              className="text-left py-2 px-4 text-slate-600 font-medium hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              {item.label}
              <ChevronRight className="w-4 h-4" />
            </button>
          ))}
          <Button fullWidth onClick={() => { setPage('CONTACT'); setIsOpen(false); }}>
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
};
