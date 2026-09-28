import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SERVICES } from '../constants';
import { SITE } from '../site';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/70 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/15">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl text-white tracking-tight">
                RichCore<span className="italic">IT</span>
              </span>
            </Link>
            <p className="font-serif text-sm leading-relaxed text-white/50">
              Managed IT support and helpdesk for small businesses and public-sector teams in
              {' '}{SITE.address.locality}, {SITE.address.region} and the greater DC area.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-5">Services</h2>
            <ul className="space-y-3 font-sans text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="text-white/80 hover:text-accent transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-5">Company</h2>
            <ul className="space-y-3 font-sans text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-accent transition-colors">All Services</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-5">Get in touch</h2>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={1.5} />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={1.5} />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={1.5} />
                {SITE.address.locality}, {SITE.address.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs text-white/40">
          <p>© {currentYear} {SITE.legalName}. All rights reserved.</p>
          <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
