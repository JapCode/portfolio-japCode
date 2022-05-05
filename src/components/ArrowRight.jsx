/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { forwardRef } from 'react';

const ArrowRight = forwardRef((prop, ref) => {
  const { actionClick } = prop;
  return (
    <figure className="portfolio__arrow-right" onClick={actionClick} ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="48"
        fill="none"
        viewBox="0 0 27 48"
      >
        <path
          fill="#F20089"
          d="M0 41.143L16.875 24 0 6.857 3.375 0 27 24 3.375 48 0 41.143z"
        />
      </svg>
    </figure>
  );
});

export default ArrowRight;
