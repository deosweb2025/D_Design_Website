import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CtaBanner from '../components/CtaBanner';
import FeatureGrid from '../components/FeatureGrid';
import WhyUsSection from '../components/WhyUsSection';
import GallerySection from '../components/GallerySection';
import StatsCounterSection from '../components/StatsCounterSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import BackToTop from '../components/BackToTop';
import Spacer from '../components/Spacer';

export default function Home() {
  useEffect(() => {
    // Handle anchor scrolling on page mount (e.g. if loaded with #service)
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#e5e5e5] selection:bg-white selection:text-black">
      {/* 1. Header (Transparent & Sticky) */}
      <Header />

      {/* 2. Hero Section (Depicter Slider 2) */}
      <HeroSlider />

      {/* 3. About Section (Why D & D Designs?) */}
      <WhyUsSection />

      {/* 4. Section Spacer */}
      <Spacer size="130px" tabletSize="70px" mobileSize="50px" />

      {/* 5. Services Section (What We Do & Service Cards) */}
      <ServicesSection />

      {/* 6. Section Spacer */}
      <Spacer size="130px" tabletSize="70px" mobileSize="50px" />

      {/* 7. How It Works Section */}
      <HowItWorksSection />

      {/* 8. Section Spacer */}
      <Spacer size="130px" tabletSize="70px" mobileSize="50px" />

      {/* 9. CTA Banner */}
      <CtaBanner />

      {/* 10. Section Spacer */}
      <Spacer size="130px" tabletSize="70px" mobileSize="50px" />

      {/* 11. 4-Image Feature Grid Collage */}
      <FeatureGrid />

      {/* 12. Section Spacer */}
      <Spacer size="130px" tabletSize="70px" mobileSize="50px" />

      {/* 12. Section 12 & 13: Some Insights & 15-Photo Gallery */}
      <GallerySection />

      {/* 13. Section 14: Spacer */}
      <Spacer size="130px" tabletSize="70px" mobileSize="50px" />

      {/* 14. Section 15: Stats / Counter Section */}
      <StatsCounterSection />

      {/* 15. Section 16: Spacer */}
      <Spacer size="130px" tabletSize="70px" mobileSize="50px" />

      {/* 16. Section 17 & 18: What Peoples Says & Testimonials */}
      <TestimonialsSection />

      {/* 17. Section 19: Spacer */}
      <Spacer size="130px" tabletSize="70px" mobileSize="50px" />

      {/* 18. Footer */}
      <Footer />

      {/* 19. Sub-Footer (Copyright) */}
      <SubFooter />

      {/* 20. Back to Top Floating Action */}
      <BackToTop />
    </div>
  );
}

