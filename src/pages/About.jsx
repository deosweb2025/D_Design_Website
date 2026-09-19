import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import BackToTop from '../components/BackToTop';
import WhyUsSection from '../components/WhyUsSection';
import ServicesSection from '../components/ServicesSection';
import CtaBanner from '../components/CtaBanner';
import Spacer from '../components/Spacer';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-[#e5e5e5] selection:bg-white selection:text-black">
      <Header />

      {/* Hero Banner for About Page */}
      <div className="pt-[140px] pb-12 bg-[#111518]/60 border-b border-white/10">
        <div className="max-w-[1290px] mx-auto px-6 md:px-12 text-center">
          <h1 className="font-montserrat font-extralight text-[36px] sm:text-[48px] text-white leading-[1.3] mb-4">
            About D &amp; D Designs
          </h1>
          <p className="font-roboto font-extralight text-[16px] text-[#e5e5e5] max-w-[700px] mx-auto">
            Architects of dreams, meticulously crafting your ideal residential and commercial interior spaces in Kolkata.
          </p>
        </div>
      </div>

      <Spacer size="80px" tabletSize="50px" mobileSize="30px" />

      {/* Why Us section */}
      <WhyUsSection />

      <Spacer size="80px" tabletSize="50px" mobileSize="30px" />

      {/* Services overview */}
      <ServicesSection />

      <Spacer size="80px" tabletSize="50px" mobileSize="30px" />

      {/* Call to action */}
      <CtaBanner />

      <Spacer size="80px" tabletSize="50px" mobileSize="30px" />

      <Footer />
      <SubFooter />
      <BackToTop />
    </div>
  );
}

