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

  const starPath = "M12,2 L14.65,8.36 L21.51,8.91 L16.28,13.39 L17.88,20.09 L12,16.5 L6.12,20.09 L7.72,13.39 L2.49,8.91 L9.36,8.36 Z";

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
        {cutout && (
          <mask id={`star-mask-${maskId}`}>
            {/* White background: keeps outer star visible */}
            <rect x="0" y="0" width="24" height="24" fill="white" />
            {/* Cut out a smaller version of the same star in the center */}
            <path 
              d={starPath}
              transform="translate(12, 12) scale(0.48) translate(-12, -12)" 
              fill="black" 
            />
          </mask>
        )}
      </defs>
      
      <g 
        style={{ color }} 
        mask={cutout ? `url(#star-mask-${maskId})` : undefined}
      >
        {/* Base Solid Star */}
        <path d={starPath} fill="currentColor" />

        {/* 3D Beveled Shading overlays */}
        <g fill="#000000" opacity="0.22">
          <path d="M 12 12 L 9.36 8.36 L 12 2 Z" />
          <path d="M 12 12 L 14.65 8.36 L 21.51 8.91 Z" />
          <path d="M 12 12 L 16.28 13.39 L 17.88 20.09 Z" />
          <path d="M 12 12 L 12 16.5 L 6.12 20.09 Z" />
          <path d="M 12 12 L 7.72 13.39 L 2.49 8.91 Z" />
        </g>

        {/* Outer crisp border stroke */}
        <path 
          d={starPath} 
          stroke="currentColor" 
          strokeWidth="0.5" 
          strokeLinejoin="round" 
          fill="none" 
          opacity="0.8" 
        />
      </g>
    </svg>
  );
}
