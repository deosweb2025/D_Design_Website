import React, { useState, useEffect, useRef } from 'react';

function CounterItem({ end, suffix, title, titleWeight = 'font-thin', isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div
      className="flex flex-col items-center justify-center text-center border border-white rounded-none"
      style={{
        padding: '30px 30px 15px 30px',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
      }}
    >
      {/* Elementor font-size: 30px, font-weight: 100, color: #FFFFFF */}
      <div className="font-montserrat font-thin text-[30px] text-white leading-none mb-2">
        {count}
        <span>{suffix}</span>
      </div>
      <div className={`font-montserrat ${titleWeight} text-[15px] sm:text-[16px] text-white tracking-wide`}>
        {title}
      </div>
    </div>
  );
}

export default function StatsCounterSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { end: 1000, suffix: '+', title: 'Customers', titleWeight: 'font-extralight' },
    { end: 50, suffix: '+', title: 'People', titleWeight: 'font-thin' },
    { end: 7, suffix: '+', title: 'Years of experience', titleWeight: 'font-thin' },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-black py-4">
      <div className="max-w-[1290px] mx-auto px-6 md:px-12">
        <div
          className="relative overflow-hidden rounded-none bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/stats-bg.jpeg')",
            padding: '40px',
          }}
        >
          {/* Exact Elementor background overlay: linear-gradient(180deg, #1F1F1F 0%, #030303 100%), opacity 0.81, mix-blend-mode multiply */}
          <div
            className="absolute inset-0 pointer-events-none rounded-none"
            style={{
              backgroundImage: 'linear-gradient(180deg, #1F1F1F 0%, #030303 100%)',
              opacity: 0.81,
              mixBlendMode: 'multiply',
            }}
          />

          {/* 3 Columns Grid (Elementor Section 15, 4bb6d79) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="px-2 md:px-6 py-2">
                <CounterItem
                  end={stat.end}
                  suffix={stat.suffix}
                  title={stat.title}
                  titleWeight={stat.titleWeight}
                  isVisible={isVisible}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

