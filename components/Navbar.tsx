
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../src/assets/RCI-1.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
  ];

  return (
    <>
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Skip to content
      </a>
      <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-6">
        <nav aria-label="Main navigation" className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl ${
          isScrolled
            ? 'glass-panel shadow-lg shadow-slate-200/50 py-3 px-6'
            : 'bg-white/40 backdrop-blur-sm py-4 px-6 border border-white/20'
        }`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="p-1 rounded-xl group-hover:rotate-12 transition-transform">
              <img src={logo} alt="RichCore IT Services" className="h-16 w-16 object-contain" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
              RichCore<span className="text-blue-600">IT</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-bold uppercase tracking-widest transition-colors relative ${
                      isActive
                        ? 'text-blue-600 font-extrabold'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-extrabold rounded-xl text-white bg-slate-900 hover:bg-blue-600 shadow-xl shadow-slate-200 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Get Free Assessment
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              className="text-slate-900 p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-panel rounded-2xl border border-white/50 shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-4 text-base font-bold rounded-xl transition-all ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 font-semibold'
                        : 'text-slate-900 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
