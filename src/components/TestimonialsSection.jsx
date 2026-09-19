import React from 'react';

const testimonials = [
  {
    content:
      '“The entire interior design team was truly amazing to work with. They fully captured our vision and need for functionality and gave us our dream home! They also made the process fun and exciting along the way and we trusted them completely.”',
    name: 'Sonela',
    job: 'Sports Person',
    avatar: '/assets/avatar-1.png',
  },
  {
    content:
      '“D&D Designs has a great team, friendly relation, they designed the ideal house for my needs. It is a fantastic project, we are very happy! They were originally recommended to us by a friend and now we recommend them.”',
    name: 'Sujit',
    job: 'Engeneer',
    avatar: '/assets/avatar-2.png',
  },
  {
    content:
      '“D&D Designs is working with glamour, responsibility, and commitment. They will work with your needs and help you going through the transition of renovating your home. Great company to work with, dedicated and passionate team.”',
    name: 'Anindita',
    job: 'Graphic Designer',
    avatar: '/assets/avatar-3.png',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonial" className="w-full bg-black py-4">
      <div className="max-w-[1290px] mx-auto px-6 md:px-12">
        {/* Section Header (Elementor Section 17, max-width 630px) */}
        <div className="max-w-[630px] mx-auto text-center mb-10">
          <h2 className="font-montserrat font-extralight text-[32px] sm:text-[45px] text-white leading-[1.3] mb-4">
            What peoples says
          </h2>
          <p className="font-roboto font-extralight text-[15px] text-[#e5e5e5] leading-[26px]">
            We do everything to satisfy them, and when their beautiful words of appreciation touch us – we find more courage to improve and to keep improving.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid (Elementor Section 18, c582970) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between text-left transition-all duration-300"
              style={{
                backgroundColor: '#000000',
                padding: '30px',
                border: '1px solid #FFFFFF',
                borderRadius: '0px',
                boxShadow: '0px 27px 100px 0px rgba(255, 255, 255, 0.13)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 10px 0px rgba(255, 255, 255, 0.67)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 27px 100px 0px rgba(255, 255, 255, 0.13)';
              }}
            >
              {/* Quote: Roboto 17px, weight 200, color #FFFFFF */}
              <p className="font-roboto font-extralight text-[17px] text-white leading-[26px] mb-6">
                {item.content}
              </p>

              {/* Author Meta: Aside image 60px round + details */}
              <div className="flex items-center">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-[60px] h-[60px] rounded-full object-cover mr-[15px] flex-shrink-0"
                />
                <div>
                  <h4 className="font-montserrat font-semibold text-[16px] text-white leading-[1.5]">
                    {item.name}
                  </h4>
                  <span className="font-roboto text-[14px] text-white/85 block">
                    {item.job}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

