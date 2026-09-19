import React from 'react';
import { X } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleNavClick = (hash) => {
    onClose();
    // Allow smooth scroll to section
    if (hash.startsWith('#')) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#service' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark overlay backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Sliding Drawer */}
      <div 
        className="relative z-10 h-full w-[90vw] md:w-[65vw] max-w-[500px] flex flex-col justify-between p-8 md:p-12 shadow-2xl transition-transform duration-300 ease-in-out"
        style={{
          backgroundColor: 'rgba(18, 21, 26, 0.98)',
          boxShadow: '0px 0px 70px rgba(0, 0, 0, 0.35)'
        }}
      >
        <div>
          {/* Top Bar with Brand and Close */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <img 
              src="/assets/logo.jpeg" 
              alt="D & D Designs Logo" 
              className="max-h-[50px] object-contain rounded"
            />
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="mt-10 flex flex-col space-y-6">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-montserrat font-thin text-[20px] text-white hover:text-gray-300 tracking-wider transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Contact Details inside Mobile Menu */}
        <div className="pt-6 border-t border-white/10 text-xs font-montserrat text-gray-400 space-y-2">
          <p>D &amp; D Designs Kolkata</p>
          <p>
            <a href="tel:+919073284229" className="text-white hover:underline">
              +91 90732 84229
            </a>
          </p>
          <p>
            <a href="mailto:dndinteriorworld8@gmail.com" className="text-white hover:underline">
              dndinteriorworld8@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

