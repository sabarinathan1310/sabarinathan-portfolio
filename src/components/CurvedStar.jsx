import React from 'react';

export default function CurvedStar({ 
  size = 20, 
  className = "", 
  color = "#FFD700", 
  cutout = false,
  style = {} 
}) {
  // Unique mask ID in case multiple stars with cutouts are rendered on the same page
  const maskId = React.useId().replace(/:/g, '-');

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`inline-block ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <defs>
        {/* A single swept blade curving counter-clockwise */}
        <path 
          id="curved-star-blade" 
          d="M12,12 C11.5,10.2 10,7.5 7.5,3 C7.5,3 10.8,4.8 13.2,7.5 C14.2,8.8 14,11 12,12 Z" 
          fill="currentColor"
        />
        
        {cutout && (
          <mask id={`star-mask-${maskId}`}>
            {/* White background: keeps outer star visible */}
            <rect x="0" y="0" width="24" height="24" fill="white" />
            {/* Black star in the center: cuts out a transparent hole */}
            <g transform="translate(12, 12) scale(0.48) rotate(36) translate(-12, -12)">
              <use href="#curved-star-blade" transform="rotate(0 12 12)" fill="black" />
              <use href="#curved-star-blade" transform="rotate(72 12 12)" fill="black" />
              <use href="#curved-star-blade" transform="rotate(144 12 12)" fill="black" />
              <use href="#curved-star-blade" transform="rotate(216 12 12)" fill="black" />
              <use href="#curved-star-blade" transform="rotate(288 12 12)" fill="black" />
            </g>
          </mask>
        )}
      </defs>
      
      <g 
        style={{ color }} 
        mask={cutout ? `url(#star-mask-${maskId})` : undefined}
      >
        <use href="#curved-star-blade" transform="rotate(0 12 12)" />
        <use href="#curved-star-blade" transform="rotate(72 12 12)" />
        <use href="#curved-star-blade" transform="rotate(144 12 12)" />
        <use href="#curved-star-blade" transform="rotate(216 12 12)" />
        <use href="#curved-star-blade" transform="rotate(288 12 12)" />
      </g>
    </svg>
  );
}
