import React from 'react';

// Exact FontAwesome checkmark SVG from Elementor
function CheckCircleSvg() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 512 512"
      fill="currentColor"
      className="w-[18px] h-[18px] text-[#D8D8D8] group-hover:text-white transition-colors duration-300 flex-shrink-0"
    >
      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.628 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.629.001z" />
    </svg>
  );
}

const checklistItems = [
  '3D design',
  'Furniture layout',
  'Electrical layout',
  'Structural drawings',
];

export default function WhyUsSection() {
  return (
    <section id="about" className="w-full bg-black py-10 md:py-20">
      <div className="max-w-[1290px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Story & Checklist */}
          <div className="space-y-6">
            <h2 className="font-montserrat font-extralight text-[32px] sm:text-[45px] text-white leading-[1.3]">
              Why D &amp; D Designs?
            </h2>

            {/* Paragraph from raw WordPress HTML */}
            <p className="font-roboto font-extralight text-[15px] text-[#e5e5e5] leading-[26px]">
              We are determined to fix these problems. So D &amp; D Design was founded on 13th December 2017 in a proper professional way and offers a happier experience to homeowners and all other clients. They build a much-needed bridge for the industry.
            </p>

            {/* Checklist with exact 12px gap, 18px icon size */}
            <ul className="pt-2 space-y-3">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-center space-x-3 group">
                  <CheckCircleSvg />
                  <span className="font-roboto text-[15px] text-[#D5D5D5] group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Project Photograph (border: 1px solid #F5F5F5, border-radius: 0px) */}
          <div className="overflow-hidden rounded-none border border-[#F5F5F5]">
            <img
              src="/assets/why-us.jpeg"
              alt="Why D & D Designs Interior Project"
              loading="lazy"
              className="w-full h-auto object-cover rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
