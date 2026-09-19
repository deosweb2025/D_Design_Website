import React from 'react';

const featureImages = [
  { src: '/assets/feature-1.jpg', alt: 'Modern Living Space Design' },
  { src: '/assets/feature-2.jpg', alt: 'Interior Architecture Details' },
  { src: '/assets/interior.jpg', alt: 'Luxury Home Interior' },
  { src: '/assets/feature-4.jpg', alt: 'Elegant Dining and Room Decor' },
];

export default function FeatureGrid() {
  return (
    <section className="w-full bg-black py-4 overflow-hidden">
      <div className="max-w-[1290px] mx-auto px-6 md:px-12">
        {/* Elementor Section 9 (4cd1b64): 2x2 grid desktop, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-6 md:gap-0 mt-8 md:mt-0">
          {/* Image 1 (f46eca8): Jonny Caspari - Rotate -30deg, saturate 0 -> 100 */}
          <div
            className="w-full max-w-[420px] transition-transform duration-500 hover:scale-105 group"
            style={{
              padding: '40px',
              zIndex: 8,
            }}
          >
            <div
              className="border border-white/20 p-6 md:p-10 transition-all duration-500"
              style={{
                transform: 'rotate(-30deg)',
              }}
            >
              <img
                src="/assets/feature-1.jpg"
                alt="Modern Living Space Design"
                loading="lazy"
                className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Image 2 (20d8edc): Kenny Eliason - Rotate -10deg, padding 20px, z-index 10 */}
          <div
            className="w-full max-w-[380px] p-5 transition-transform duration-500 hover:scale-105 group -mt-12 md:mt-0"
            style={{
              zIndex: 10,
            }}
          >
            <div
              className="transition-all duration-500"
              style={{
                transform: 'rotate(-10deg)',
              }}
            >
              <img
                src="/assets/feature-2.jpg"
                alt="Interior Architecture Details"
                loading="lazy"
                className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Image 3 (72880d9): Interior - Rotate -10deg, padding 20px, z-index 10 */}
          <div
            className="w-full max-w-[380px] p-5 transition-transform duration-500 hover:scale-105 group -mt-8 md:mt-0"
            style={{
              zIndex: 10,
            }}
          >
            <div
              className="transition-all duration-500"
              style={{
                transform: 'rotate(-10deg)',
              }}
            >
              <img
                src="/assets/interior.jpg"
                alt="Luxury Home Interior"
                loading="lazy"
                className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Image 4 (e52ac4f): Toa Heftiba - Rotate +30deg, saturate 0 -> 100 */}
          <div
            className="w-full max-w-[420px] transition-transform duration-500 hover:scale-105 group"
            style={{
              padding: '40px',
              zIndex: 8,
            }}
          >
            <div
              className="border border-white/20 p-6 md:p-10 transition-all duration-500"
              style={{
                transform: 'rotate(30deg)',
              }}
            >
              <img
                src="/assets/feature-4.jpg"
                alt="Elegant Dining and Room Decor"
                loading="lazy"
                className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

