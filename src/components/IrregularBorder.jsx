import { useEffect, useState } from 'react';
import useBackgroundColorUpdaterContext from '../hooks/UseBackgroundColorUpdaterContext';
import useIntersectionObserver from '../hooks/UseIntersectionObserver';

function IrregularBorder(prop) {
  const { backgroundPurple, backgroundOpacity } = prop;
  const [backgroundColor, setBackgroundColor] = useState('#5a189a');
  const [containRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.06,
  });
  const { anotherColor } = prop;
  const colorOne = '#5a189a';
  const colorTwo = '#FFFFFF';
  // eslint-disable-next-line no-unused-vars
  const setNewColor = useBackgroundColorUpdaterContext(backgroundColor);
  const sectionStyle = {
    border: `30px solid ${backgroundPurple ? colorOne : colorTwo}`,
    borderRight: `5px solid ${backgroundPurple ? colorOne : colorTwo}`,
    borderLeft: `5px solid ${backgroundPurple ? colorOne : colorTwo}`,
    borderBottom: `24px solid ${backgroundPurple ? colorOne : colorTwo}`,
    backgroundColor: `${backgroundPurple ? colorOne : colorTwo}`,
    display: backgroundOpacity,
  };
  const anotherSectionStyle = {
    border: `30px solid ${anotherColor}`,
    borderRight: `5px solid ${anotherColor}`,
    borderLeft: `5px solid ${anotherColor}`,
    borderBottom: `24px solid ${anotherColor}`,
    backgroundColor: `${anotherColor}`,
    display: backgroundOpacity,
  };
  useEffect(() => {
    if (backgroundPurple && isVisible) {
      setBackgroundColor(colorTwo);
    } else {
      setBackgroundColor(colorOne);
    }
  }, [isVisible, backgroundPurple, colorOne, colorTwo]);
  return (
    <div className="sectionBackground__container" style={{ height: 0 }}>
      <div
        ref={containRef}
        className="cyberpunk"
        style={anotherColor ? anotherSectionStyle : sectionStyle}
      />
      ;
      <div
        className="cyberpunk__bottom"
        style={{
          background: anotherColor
            ? anotherSectionStyle.backgroundColor
            : sectionStyle.backgroundColor,
          display: backgroundOpacity,
        }}
      />
    </div>
  );
}
export default IrregularBorder;
