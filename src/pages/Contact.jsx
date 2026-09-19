import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import BackToTop from '../components/BackToTop';
import ContactForm from '../components/ContactForm';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const contactCards = [
    {
      icon: MapPin,
      title: 'Physical Address',
      text: '9, Beniatola Lane, Near Chittaranjan College, Kolkata - 700009',
    },
    {
      icon: Clock,
      title: 'Work Hours',
      text: 'Monday – Saturday: 10:00 AM – 7:00 PM',
    },
    {
      icon: Mail,
      title: 'Email Address',
      text: 'dndinteriorworld8@gmail.com',
      link: 'mailto:dndinteriorworld8@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      text: '+91 90732 84229',
      link: 'tel:+919073284229',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#e5e5e5] selection:bg-white selection:text-black">
      <Header />

      {/* Hero Banner for Contact Page */}
      <div className="pt-[140px] pb-12 bg-[#111518]/60 border-b border-white/10">
        <div className="max-w-[1290px] mx-auto px-6 md:px-12 text-center">
          <h1 className="font-montserrat font-extralight text-[36px] sm:text-[48px] text-white leading-[1.3] mb-4">
            Contact Us
          </h1>
          <p className="font-roboto font-extralight text-[16px] text-[#e5e5e5] max-w-[600px] mx-auto">
            Send Us Your Feedback, We Love Hearing It!
          </p>
        </div>
      </div>

      {/* 4 Info Cards */}
      <div className="max-w-[1290px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-none bg-[#111518]/50 border border-white/10 text-center flex flex-col items-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white mb-2">
                  <IconComp size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-montserrat font-light text-[17px] text-white tracking-wide">
                  {card.title}
                </h3>
                {card.link ? (
                  <a
                    href={card.link}
                    className="font-roboto font-extralight text-[14px] text-gray-300 hover:text-white transition-colors"
                  >
                    {card.text}
                  </a>
                ) : (
                  <p className="font-roboto font-extralight text-[14px] text-gray-300">
                    {card.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Map & Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Google Maps */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-light text-[22px] text-white tracking-wide mb-4">
              Find Us on Map
            </h3>
            <div className="w-full h-[400px] rounded-none overflow-hidden border border-white/20 shadow-lg">
              <iframe
                title="D & D Designs Map"
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

          {/* Right: Contact Form */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-light text-[22px] text-white tracking-wide mb-4">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
      <SubFooter />
      <BackToTop />
    </div>
  );
}

