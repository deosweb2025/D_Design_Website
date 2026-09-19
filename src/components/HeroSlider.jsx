import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    id: 1,
    line1: 'Crafting Beauty,',
    line2: 'Designing Your Dream...',
    description:
      'At our interior design firm, we blend creativity with functionality, transforming spaces into bespoke havens. Our dedicated team is committed to realizing your dream home with precision and passion.',
    callLink: 'tel:+919073284229',
    seeMoreLink: '#service',
  },
  {
    id: 2,
    line1: 'Innovate, Design, Create,',
    line2: 'Live, Dream...',
    description:
      'We are architects of dreams, meticulously crafting your ideal space. Our passion for design transforms your vision into a breathtaking reality, tailored just for you.',
    callLink: 'tel:+919073284229',
    seeMoreLink: '#service',
  },
  {
    id: 3,
    line1: 'Your Space,',
    line2: 'Beautifully Transformed Today...',
    description:
      'Dedicated to excellence, our design team elevates spaces with unique, personalized aesthetics. We ensure every project reflects your desires, bringing inspired visions to life seamlessly.',
    callLink: 'tel:+919073284229',
    seeMoreLink: '#service',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(timerRef.current);
  }, [currentSlide]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleScrollTo = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="home"
      className="relative w-full h-[740px] md:h-[700px] lg:h-[730px] overflow-hidden select-none bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Layer with Depicter dark overlay and bottom gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpeg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Bottom smooth fade to solid black */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-black/60 to-black" />
      </div>

      {/* Slide Content Layer */}
      <div className="relative z-10 max-w-[1290px] h-full mx-auto px-6 md:px-12 flex items-center">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-x-6 md:inset-x-12 max-w-[950px] transition-all duration-700 ease-out transform ${
                isActive
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-6 pointer-events-none'
              }`}
            >
              {/* Heading: Exact Depicter 2.css: 76px desktop, 51px tablet, 37px mobile, weight 100, line-height 120% */}
              <h1 className="font-montserrat font-thin text-[37px] sm:text-[51px] lg:text-[76px] text-white leading-[1.2] tracking-normal mb-5">
                <div>{slide.line1}</div>
                <div>{slide.line2}</div>
              </h1>

              {/* Subtitle: Exact Depicter 2.css: 20px desktop, 16px tablet, 12px mobile, weight 100, line-height 150%, letter-spacing 1px, color #FFFFFF */}
              <p className="font-roboto font-thin text-[12px] sm:text-[16px] lg:text-[20px] text-white leading-[1.5] tracking-[1px] mb-10 max-w-[680px]">
                {slide.description}
              </p>

              {/* Depicter Action Buttons: Rubik 16px (mobile 12px), 2px border, rounded 6px (mobile 4px), hover bg white text black */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                <a
                  href={slide.callLink}
                  className="inline-flex items-center justify-center font-rubik text-[12px] sm:text-[16px] text-white uppercase tracking-[1px] px-6 py-2 sm:px-9 sm:py-5 border-2 border-white rounded-[4px] sm:rounded-[6px] bg-transparent hover:bg-white hover:text-black transition-all duration-500 shadow-[0px_14px_30px_rgba(0,0,0,0.11)]"
                >
                  CALL NOW
                </a>

                <a
                  href={slide.seeMoreLink}
                  onClick={(e) => handleScrollTo(e, slide.seeMoreLink)}
                  className="inline-flex items-center justify-center font-rubik text-[12px] sm:text-[16px] text-white uppercase tracking-[1px] px-6 py-2 sm:px-9 sm:py-5 border-2 border-white rounded-[4px] sm:rounded-[6px] bg-transparent hover:bg-white hover:text-black transition-all duration-500 shadow-[0px_14px_30px_rgba(0,0,0,0.11)]"
                >
                  SEE MORE
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Depicter Right-Side Vertical Bullet Indicators (.depicter-bullets-wrapper: gap: 5px; flex-direction: column) */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-[6px]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-[9px] h-[9px] rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#9A9A9A]' : 'bg-[#626262] hover:bg-[#808080]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
