import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#service' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#footer' },
  ];

  const handleScrollTo = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isSticky
            ? 'bg-[rgba(0,0,0,0.8)] border-b border-dashed border-[rgba(157,157,157,0.85)] shadow-[0px_10px_20px_rgba(43,61,80,0.06)]'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{
          height: isSticky ? '100px' : '100px',
        }}
      >
        <div className="max-w-[1290px] mx-auto h-full px-5 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center select-none"
          >
            <img
              src="/assets/logo.jpeg"
              alt="D & D Designs"
              className={`object-contain transition-all duration-300 rounded ${
                isSticky
                  ? 'h-[55px] md:h-[75px]'
                  : 'h-[46px] md:h-[84px]'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-[55px]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="font-montserrat font-light text-[12px] uppercase text-[#E9EBEC] hover:text-[#ffffff] tracking-wider transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white hover:text-gray-300 focus:outline-none p-2"
              aria-label="Toggle navigation menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Offcanvas Drawer for Mobile/Tablet */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

