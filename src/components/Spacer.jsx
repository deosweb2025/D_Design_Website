import React from 'react';

/**
 * Reusable Spacer component replicating Elementor's exact responsive spacer intervals:
 * Desktop: 130px, Tablet: 70px, Mobile: 50px (or custom size prop)
 */
export default function Spacer({ size = '130px', tabletSize = '70px', mobileSize = '50px' }) {
  return (
    <div 
      className="w-full pointer-events-none select-none"
      style={{
        height: mobileSize,
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          div[data-spacer="${size}"] { height: ${tabletSize} !important; }
        }
        @media (min-width: 1025px) {
          div[data-spacer="${size}"] { height: ${size} !important; }
        }
      `}</style>
      <div 
        data-spacer={size}
        className="w-full"
        style={{ height: mobileSize }}
      />
    </div>
  );
}

