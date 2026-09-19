import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Service', href: '#service' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonial' },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="w-full bg-black text-[#e5e5e5] border-t border-white/10">
      <div className="max-w-[1290px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Col 1: Brand Logo (2 cols equivalent) */}
          <div className="lg:col-span-3 space-y-4">
            <img
              src="/assets/logo.jpeg"
              alt="D & D Designs Logo"
              className="max-h-[84px] object-contain rounded-none"
            />
            <p className="font-roboto font-extralight text-[14px] text-[#e5e5e5]/80 leading-[24px]">
              Crafting beauty and designing dreams across Kolkata with bespoke residential and commercial interiors.
            </p>
          </div>

          {/* Col 2: Quick Links (2 cols equivalent) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-montserrat font-light text-[16px] text-white tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-montserrat font-extralight text-[15px] text-[#E9EBEC] hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Google Maps Location (3 cols equivalent) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-montserrat font-light text-[16px] text-white tracking-wider">
              Our Location
            </h3>
            <div className="w-full h-[220px] rounded-none overflow-hidden border border-white/20">
              <iframe
                title="D & D Designs Office Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14736.426092799891!2d88.3665516!3d22.5751189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276521d039b39%3A0x1223850cbfeff19f!2sD%26D%20Designs!5e0!3m2!1sen!2sin!4v1709796266996!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Col 4: Contact Info (4 cols equivalent) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-montserrat font-light text-[18px] text-white tracking-wider">
              Contact Info
            </h3>
            <div className="space-y-4 text-sm font-roboto font-extralight">
              <div className="flex items-start space-x-3 text-[#E9EBEC]">
                <MapPin size={18} className="text-white flex-shrink-0 mt-1" />
                <span className="leading-[24px]">
                  9, Beniatola Lane, Near Chittaranjan College, Kolkata - 700009
                </span>
              </div>

              <div className="flex items-center space-x-3 text-[#E9EBEC]">
                <Phone size={18} className="text-white flex-shrink-0" />
                <a
                  href="tel:+919073284229"
                  className="hover:text-white transition-colors"
                >
                  +91 90732 84229
                </a>
              </div>

              <div className="flex items-center space-x-3 text-[#E9EBEC]">
                <Mail size={18} className="text-white flex-shrink-0" />
                <a
                  href="mailto:dndinteriorworld8@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  dndinteriorworld8@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

