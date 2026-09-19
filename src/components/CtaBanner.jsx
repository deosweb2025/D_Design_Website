import React from 'react';

export default function CtaBanner() {
  return (
    <section className="w-full bg-black py-2">
      <div className="max-w-[1290px] mx-auto px-6 md:px-12">
        <div
          className="relative overflow-hidden border border-white rounded-none p-6 sm:p-10 lg:p-[70px] flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{
            backgroundImage: "url('/assets/pattern.svg')",
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            backgroundColor: '#000000',
            boxShadow: '0 20px 70px rgba(36, 26, 81, 0.2)',
          }}
        >
          {/* Multiply blend overlay matching Elementor */}
          <div className="absolute inset-0 bg-black/85 mix-blend-multiply" />

          {/* Left: Heading */}
          <div className="relative z-10 max-w-[780px]">
            <h2 className="font-montserrat font-extralight text-[24px] sm:text-[32px] lg:text-[35px] text-white leading-[1.3] tracking-wide">
              The Essence of Interior Design will Always be About &nbsp;People and How They Live.
            </h2>
          </div>

          {/* Right: Solid white button matching Elementor rules */}
          <div className="relative z-10 flex-shrink-0">
            <a
              href="tel:9073284229"
              className="inline-flex items-center justify-center font-roboto text-[16px] font-normal text-black bg-white border border-white rounded-none px-[23px] py-[16px] transition-colors duration-300 hover:bg-black hover:text-white"
            >
              Contact us now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
