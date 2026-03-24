import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <Link className="flex items-center gap-3 mb-6" to="/">
              <TrendingUp className="text-blue-500" size={32} />
              <span className="font-outfit text-2xl font-bold tracking-wide text-white">MEDHYA</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Your trusted financial partner delivering end-to-end financial solutions. 
              Built on a common objective to provide the best advisory in the market to build world-class companies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                <Linkedin size={20} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-outfit text-lg font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-blue-500">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-slate-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/team" className="hover:text-blue-400 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="font-outfit text-lg font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-blue-500">Services</h4>
            <ul className="flex flex-col gap-3 text-slate-400">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Startup Advisory</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Investor Services</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Valuation</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Risk Advisory</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="font-outfit text-lg font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-blue-500">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>info@medhyainvestments.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-slate-800 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Medhya Investment Advisors Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
