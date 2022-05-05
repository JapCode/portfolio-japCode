import { useEffect, useMemo, useState } from 'react';
import useBackgroundColorUpdaterContext from '../hooks/UseBackgroundColorUpdaterContext';
import useIntersectionObserver from '../hooks/UseIntersectionObserver';

function Section({ children, backgroundPurple }) {
  const [backgroundColor, setBackgroundColor] = useState('#5A189A');
  const purpleColor = '#54189a';
  const whiteColor = '#FFFFFF';
  useBackgroundColorUpdaterContext(backgroundColor);
  const [containRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.06,
  });
  const sectionStyle = {
    border: `30px solid ${backgroundPurple ? '#5A189A' : '#fff'}`,
    borderRight: `5px solid ${backgroundPurple ? '#5A189A' : '#fff'}`,
    borderLeft: `5px solid ${backgroundPurple ? '#5A189A' : '#fff'}`,
    borderBottom: `24px solid ${backgroundPurple ? '#5A189A' : '#fff'}`,
    backgroundColor: `${backgroundPurple ? '#5A189A' : '#fff'}`,
  };
  useEffect(() => {
    if (backgroundPurple && isVisible) {
      setBackgroundColor(purpleColor);
    } else {
      setBackgroundColor(whiteColor);
    }
  }, [isVisible, backgroundPurple]);
  return useMemo(() => {
    return (
      <>
        <div
          ref={containRef}
          className="sectionBackground }"
          style={{ backgroundColor: sectionStyle.backgroundColor }}
        >
          <div className="cyberpunk" style={sectionStyle} />;
          <section className="sectionContent">{children}</section>
        </div>
      </>
    );
  });
}
export default Section;
