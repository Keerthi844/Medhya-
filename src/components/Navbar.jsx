import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Our Approach', path: '/approach' },
    { name: 'Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
<nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
      : 'bg-gradient-to-b from-white-500/80 via-green-800/50 to-transparent'
  }`}
>
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-slate-900 hover:opacity-80 transition-opacity">
            <TrendingUp className="text-blue-600" size={28} />
            <span className="font-outfit text-2xl font-bold tracking-wide">MEDHYA</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-sm transition-colors ${
                  location.pathname === link.path 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Link to="/contact" className="bg-gradient-to-r from-orange-700 to-orange-500 text-white font-outfit font-semibold uppercase tracking-wider text-sm px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Get Started
            </Link>
          </div>

          <button className="lg:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-20 left-0 w-full bg-slate-50 border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
          <div className="flex flex-col p-4 sm:p-5 md:p-6 gap-3 sm:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base sm:text-lg font-medium pb-2 border-b border-slate-200 ${
                  location.pathname === link.path ? 'text-blue-600 border-blue-200' : 'text-slate-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 bg-blue-600 text-white font-outfit font-semibold text-center uppercase py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from jumping because of fixed navbar */}
      <div className="h-20 w-full"></div>
    </>
  );
};

export default Navbar;
