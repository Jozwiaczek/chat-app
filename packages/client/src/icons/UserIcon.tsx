import React, { forwardRef, memo, Ref, SVGProps } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>, svgRef?: Ref<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path
      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 14H17.352C18.0831 14.0002 18.7889 14.2674 19.3369 14.7513C19.8849 15.2352 20.2373 15.9026 20.328 16.628L20.719 19.752C20.7542 20.0334 20.7291 20.3191 20.6454 20.5901C20.5617 20.8611 20.4214 21.1112 20.2336 21.3238C20.0459 21.5364 19.8151 21.7066 19.5566 21.8232C19.298 21.9398 19.0176 22.0001 18.734 22H5.266C4.98238 22.0001 4.70199 21.9398 4.44345 21.8232C4.1849 21.7066 3.9541 21.5364 3.76638 21.3238C3.57865 21.1112 3.43829 20.8611 3.3546 20.5901C3.27092 20.3191 3.24583 20.0334 3.281 19.752L3.671 16.628C3.7617 15.9022 4.11442 15.2346 4.66283 14.7506C5.21125 14.2667 5.91758 13.9997 6.649 14H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(forwardRef(UserIcon));
