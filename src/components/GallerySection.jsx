import React, { useState } from 'react';
import ImageLightbox from './ImageLightbox';

const galleryPhotos = [
  { src: '/assets/gallery/gallery-4.jpeg', alt: 'D & D Designs Interior Project 1' },
  { src: '/assets/gallery/gallery-9.jpeg', alt: 'D & D Designs Interior Project 2' },
  { src: '/assets/gallery/gallery-10.jpeg', alt: 'D & D Designs Interior Project 3' },
  { src: '/assets/gallery/gallery-7.jpeg', alt: 'D & D Designs Interior Project 4' },
  { src: '/assets/gallery/gallery-1.jpeg', alt: 'D & D Designs Interior Project 5' },
  { src: '/assets/gallery/gallery-8.jpeg', alt: 'D & D Designs Interior Project 6' },
  { src: '/assets/gallery/gallery-12.jpeg', alt: 'D & D Designs Interior Project 7' },
  { src: '/assets/gallery/gallery-11.jpeg', alt: 'D & D Designs Interior Project 8' },
  { src: '/assets/gallery/gallery-6.jpeg', alt: 'D & D Designs Interior Project 9' },
  { src: '/assets/gallery/gallery-14.jpeg', alt: 'D & D Designs Interior Project 10' },
  { src: '/assets/gallery/gallery-15.jpeg', alt: 'D & D Designs Interior Project 11' },
  { src: '/assets/gallery/gallery-5.jpeg', alt: 'D & D Designs Interior Project 12' },
  { src: '/assets/gallery/gallery-2.jpeg', alt: 'D & D Designs Interior Project 13' },
  { src: '/assets/gallery/gallery-3.jpeg', alt: 'D & D Designs Interior Project 14' },
  { src: '/assets/gallery/gallery-13.jpeg', alt: 'D & D Designs Interior Project 15' },
];

export default function GallerySection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const openLightbox = (index) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);
  const prevImage = () =>
    setActiveLightboxIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  const nextImage = () =>
    setActiveLightboxIndex((prev) => (prev + 1) % galleryPhotos.length);

  return (
    <section id="gallery" className="w-full bg-black py-4">
      <div className="max-w-[1290px] mx-auto px-6 md:px-12">
        {/* Section Header (Elementor Section 12, max-width 630px) */}
        <div className="max-w-[630px] mx-auto text-center mb-10">
          <h2 className="font-montserrat font-extralight text-[32px] sm:text-[45px] text-white leading-[1.3] mb-4">
            Some Insights
          </h2>
          <p className="font-roboto font-extralight text-[15px] text-[#e5e5e5] leading-[26px]">
            Here's how you'd know what we have done and how much you as a client can expect working with us.
          </p>
        </div>

        {/* 15 Project Images Grid (Elementor Section 13, acd111f) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {galleryPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-none bg-[#151515] aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-[800ms] flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms] text-xs font-montserrat uppercase tracking-wider bg-black/70 px-3 py-1.5 rounded-none border border-white/20">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <ImageLightbox
          images={galleryPhotos}
          currentIndex={activeLightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}

