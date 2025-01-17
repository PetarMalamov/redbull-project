import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export const StartIcon = (props: Props) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_bd_0_4624)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8772 25.0252L25.2009 18.584C25.389 18.4764 25.5086 18.2512 25.5086 18.0043C25.5086 17.7574 25.389 17.5322 25.2009 17.4246L13.8772 10.9835C13.7068 10.876 13.5005 10.8855 13.3377 11.0084C13.1748 11.1312 13.0808 11.3483 13.0918 11.5761V24.4583C13.0951 24.6786 13.1935 24.8815 13.3527 24.9964C13.5119 25.1113 13.7097 25.1221 13.8772 25.0252Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_0_4624"
          x="-20"
          y="-20"
          width="76"
          height="76"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_0_4624"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.0588235 0 0 0 0 0.117647 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_0_4624"
            result="effect2_dropShadow_0_4624"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_4624"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
