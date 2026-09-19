import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import BackToTop from '../components/BackToTop';

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-[#e5e5e5] selection:bg-white selection:text-black">
      <Header />

      {/* Hero Banner for Blog Page */}
      <div className="pt-[140px] pb-12 bg-[#111518]/60 border-b border-white/10">
        <div className="max-w-[1290px] mx-auto px-6 md:px-12 text-center">
          <h1 className="font-montserrat font-extralight text-[36px] sm:text-[48px] text-white leading-[1.3] mb-4">
            Blog &amp; Insights
          </h1>
          <p className="font-roboto font-extralight text-[16px] text-[#e5e5e5] max-w-[600px] mx-auto">
            Stay updated with the latest interior design trends, tips, and articles from D&amp;D Designs.
          </p>
        </div>
      </div>

      <div className="max-w-[1290px] mx-auto px-6 md:px-12 py-20 text-center">
        <p className="font-roboto font-extralight text-lg text-gray-400 mb-8">
          No blog posts published yet. Please check back soon!
        </p>
        <a
          href="/"
          className="btn-ghost-white px-8 py-3.5 text-sm"
        >
          Return to Home
        </a>
      </div>

      <Footer />
      <SubFooter />
      <BackToTop />
    </div>
  );
}

