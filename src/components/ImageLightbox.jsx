import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (currentIndex === null || !images[currentIndex]) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 select-none">
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
      >
        <X size={28} />
      </button>

      {/* Prev Arrow */}
      <button
        onClick={onPrev}
        aria-label="Previous Image"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Image Preview Container */}
      <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt || `Project Photo ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl"
        />
        <div className="mt-4 text-center font-montserrat text-sm text-gray-400">
          Photo {currentIndex + 1} of {images.length}
        </div>
      </div>

      {/* Next Arrow */}
      <button
        onClick={onNext}
        aria-label="Next Image"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}

