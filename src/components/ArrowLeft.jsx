/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { forwardRef } from 'react';

const ArrowLeft = forwardRef((prop, ref) => {
  const { actionClick } = prop;
  return (
    <figure
      className="portfolio__arrow-left portfolio__arrow-left--disabled"
      onClick={actionClick}
      ref={ref}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="48"
        fill="none"
        viewBox="0 0 27 48"
      >
        <path
          fill="#F20089"
          d="M27 6.857L10.125 24 27 41.143 23.625 48 0 24 23.625 0 27 6.857z"
        />
      </svg>
    </figure>
  );
});

export default ArrowLeft;
