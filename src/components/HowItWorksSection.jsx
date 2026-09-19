import React from 'react';
import { UserCheck, Paintbrush, DollarSign, Wrench } from 'lucide-react';

const steps = [
  {
    icon: UserCheck,
    title: 'Consultancy',
    desc: 'First of all we try to understand your need and vision about the project we are going to take',
  },
  {
    icon: Paintbrush,
    title: 'Design',
    desc: 'Then we offer a concept design to match your vision - which will be also aesthetically better.',
  },
  {
    icon: DollarSign,
    title: 'Budgeting',
    desc: 'This process walks besides the designing process - smart budgeting is very important part.',
  },
  {
    icon: Wrench,
    title: 'Execution',
    desc: 'And here comes the execution part where we execute the plan - as per the planing of our experts.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background with cover, center, fixed attachment matching Elementor */}
      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/assets/interior.jpg')",
        }}
      >
        {/* Dark overlay: 0.74 opacity */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Content Container (padding 40px desktop, 10px mobile) */}
        <div className="relative z-10 max-w-[1290px] mx-auto p-3 sm:p-6 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Column (flex, padding-top 50px desktop) */}
            <div className="space-y-6 pt-0 lg:pt-10">
              <h2 className="font-montserrat font-extralight text-[32px] sm:text-[45px] text-white leading-[1.3]">
                How It Works
              </h2>
              <p className="font-roboto font-extralight text-[15px] text-[#e5e5e5] leading-[26px]">
                D&amp;D Designs is a leading interior design firm that specializes in providing customized solutions for residential and commercial properties. It all started from &nbsp;13th December 2017. With a team of skilled professionals and a commitment to quality and customer satisfaction, we strive to create beautiful and functional spaces that exceed our clients' expectations.
              </p>
              <div className="overflow-hidden rounded-none pt-2">
                <img
                  src="/assets/curology.jpg"
                  alt="Interior Design Process - D&D Designs"
                  className="w-full h-[280px] sm:h-[350px] object-cover rounded-none"
                />
              </div>
            </div>

            {/* Right Column: 2x2 Grid on desktop (--e-con-grid-template-columns: repeat(2, 1fr)) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {steps.map((step, index) => {
                const IconComp = step.icon;
                return (
                  <div
                    key={index}
                    className="p-[30px] rounded-none border border-white text-left transition-all duration-300 hover:bg-black/40"
                    style={{
                      backgroundImage: 'linear-gradient(180deg, #FFFFFF2E 0%, #0000008A 100%)',
                      backdropFilter: 'blur(5px)',
                      WebkitBackdropFilter: 'blur(5px)',
                    }}
                  >
                    {/* Stacked icon in translucent circle (#FAF8FF24) */}
                    <div className="w-[65px] h-[65px] rounded-full bg-[#FAF8FF24] flex items-center justify-center text-white mb-5">
                      <IconComp size={25} strokeWidth={1.5} />
                    </div>

                    {/* Step Title (Montserrat 21px, weight 300, white, margin-block-end 10px) */}
                    <h3 className="font-montserrat font-light text-[21px] text-white mb-[10px] leading-[1.3]">
                      <a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">
                        {step.title}
                      </a>
                    </h3>

                    {/* Step Description (Roboto 13px, color #DFDFDF) */}
                    <p className="font-roboto text-[13px] text-[#DFDFDF] leading-[22px]">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
