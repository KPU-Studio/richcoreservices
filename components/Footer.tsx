
import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white tracking-tight">
                RichCore<span className="text-blue-500">IT</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Strategic IT consulting and advanced managed services provider helping enterprises navigate digital transformation with confidence and security.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">IT Strategy & Advisory</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Cloud Architecture</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Cybersecurity Audit</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Managed IT Support</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">System Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#success" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Insights & Blog</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to our monthly technical insights report.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2 text-sm w-full outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>© {currentYear} RichCoreITServices LLC. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
