import React from 'react';

// Exact SVG icons from Elementor raw HTML
function LightbulbIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 352 512" fill="currentColor" className="w-[25px] h-[25px]">
      <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 576 512" fill="currentColor" className="w-[25px] h-[25px]">
      <path d="M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 576 512" fill="currentColor" className="w-[25px] h-[25px]">
      <path d="M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z" />
    </svg>
  );
}

const serviceCards = [
  {
    icon: LightbulbIcon,
    title: 'Interior design services',
    description:
      'At D & D Design, we transform spaces into masterpieces of functionality and beauty, tailoring each project to reflect your unique style and needs. Now, unlease joy of living  with us.',
  },
  {
    icon: BuildingIcon,
    title: 'Commercial interior',
    description:
      "D & D Design specializes in crafting bespoke commercial spaces that not only elevate your brand's identity but also optimize workflow and customer experience.",
  },
  {
    icon: HomeIcon,
    title: 'Residential design',
    description:
      'Our residential design services at D & D Design create harmonious living spaces that blend aesthetics with comfort, making every house feel like a personalized sanctuary.',
  },
];

export default function ServicesSection() {
  return (
    <section id="service" className="w-full bg-black pt-10 pb-4">
      <div className="max-w-[1290px] mx-auto px-6 md:px-12">
        {/* Section Header (Elementor Section 2, max-width 630px, margin-bottom 30px) */}
        <div className="max-w-[630px] mx-auto text-center mb-8">
          <h2 className="font-montserrat font-extralight text-[32px] sm:text-[45px] text-white leading-[1.3] mb-4">
            What we do
          </h2>
          <p className="font-roboto font-extralight text-[15px] text-[#e5e5e5] leading-[26px]">
            Interior decoration is concern with not just how something look but also of how it functions. We produce interior designs with eye catching asthetics that never fail to impress.
          </p>
        </div>

        {/* 3 Service Cards (Elementor Section 3, padding 45px, border #E4E9F0, sharp 0px corners, text-align left) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {serviceCards.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-black p-[45px] border border-[#E4E9F0] rounded-none text-left transition-colors duration-300 hover:border-white group flex flex-col justify-start"
              >
                {/* Icon (size 25px, white) */}
                <div className="text-white mb-[10px]">
                  <IconComponent />
                </div>

                {/* Card Title (Montserrat 24px, weight 200, white, margin-block-end 19px) */}
                <h3 className="font-montserrat font-extralight text-[24px] text-white tracking-normal mb-[19px] leading-[1.3]">
                  {service.title}
                </h3>

                {/* Card Description (Roboto 13px, weight 100, line-height 23px, white) */}
                <p className="font-roboto font-thin text-[13px] text-white leading-[23px]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
