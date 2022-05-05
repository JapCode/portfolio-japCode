function TitleDecorator() {
  return (
    <svg
      className="title--decoration"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="51"
      fill="none"
      viewBox="0 0 48 51"
    >
      <g filter="url(#filter0_d_887_666)">
        <path
          fill="#F20089"
          d="M8 43h36v-2.114H10.182C10.182 29.172 10 3.5 10 3.5H8V43z"
        />
        <path
          stroke="#F20089"
          d="M8 43h36v-2.114H10.182C10.182 29.172 10 3.5 10 3.5H8V43z"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_887_666"
          width="47"
          height="50.5"
          x="0.5"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-2" dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.94902 0 0 0 0 0 0 0 0 0 0.537255 0 0 0 0.3 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_887_666"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_887_666"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default TitleDecorator;
