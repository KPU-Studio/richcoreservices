import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../src/assets/RCI-1.png';

const navLinks = [
  { name: 'Services', to: '/services' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:font-bold"
      >
        Skip to content
      </a>
      <div className="fixed w-full z-50 bg-white border-b border-hairline">
        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center gap-3" aria-label="RichCore IT Services home">
              <img src={logo} alt="RichCore IT Services logo" width={44} height={44} className="h-11 w-11 object-contain" />
              <span className="font-display text-2xl md:text-[26px] tracking-tight text-black">
                RichCore<span className="italic">IT</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className={({ isActive }) =>
                      `font-sans text-[13px] font-bold uppercase tracking-[0.12em] transition-colors ${
                        isActive ? 'text-accent' : 'text-black hover:text-accent'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-white bg-black border border-black hover:bg-accent hover:border-accent transition-colors"
              >
                Get Free Assessment
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                className="text-black p-2 hover:bg-canvas-soft transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-hairline bg-white">
            <div className="px-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-2 py-4 font-sans text-sm font-bold uppercase tracking-[0.12em] border-b border-hairline transition-colors ${
                      isActive ? 'text-accent' : 'text-black hover:text-accent'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 px-4 py-4 font-sans text-sm font-bold uppercase tracking-[0.08em] text-white bg-black hover:bg-accent text-center transition-colors"
              >
                Get Free Assessment
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
