import React, { forwardRef, memo, Ref, SVGProps } from 'react';

const SendIcon = (props: SVGProps<SVGSVGElement>, svgRef?: Ref<SVGSVGElement>) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M15.4941 18.447L11.3137 22.6274L4.35436 18.4639C4.31309 18.4406 4.27445 18.4128 4.2391 18.3812C3.71372 17.8869 3.92161 16.972 4.64145 16.7188L24.0416 9.89947L17.2223 29.2997C16.9727 30.0117 16.0747 30.2224 15.5769 29.719C15.5336 29.6728 15.4971 29.6206 15.4687 29.5641L13.0815 25.1023"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" transform="translate(0 16.9706) rotate(-45)" />
      </clipPath>
    </defs>
  </svg>
);

export default memo(forwardRef(SendIcon));
