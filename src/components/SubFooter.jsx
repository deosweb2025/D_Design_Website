import React from 'react';

export default function SubFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-[#241E20] py-4 sm:py-6 px-4 text-center">
      <p className="font-montserrat text-[10px] sm:text-[15px] font-normal text-[#F4F5F6] leading-[1.4]">
        Copyright &copy; {currentYear} D &amp; D Designs - Powered by{' '}
        <a
          href="https://www.teamdeoskolkata.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
        >
          Digital Exposure Online Service
        </a>
      </p>
    </div>
  );
}

