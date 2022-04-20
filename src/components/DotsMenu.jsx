import { useEffect, useRef, useState } from 'react';
import useBackgroundColorState from '../hooks/UseBackgroundColorState';
import useMobileMenuState from '../hooks/UseMobileMenuState';
import useWindowSize from '../hooks/UseWindowSize';
import addRemoveClass from '../utils/addRemoveClass';

function DotsMenu() {
  const menuState = useMobileMenuState();
  const windowSize = useWindowSize();
  const dotsColor = useBackgroundColorState();
  const dotsMenuRef = useRef(null);
  const purpleColor = windowSize.height > 650 ? '#5a189a' : '#f20089';
  const whiteColor = windowSize.height > 650 ? '#FFFFFF' : '#f20089';
  // const [defaultDotsState, setDefaultDotsState] = useState(true);

  useEffect(() => {
    if (dotsMenuRef.current !== null) {
      const config = {
        classState: menuState,
        element: dotsMenuRef.current,
        classNameActive: 'dotsMenu--active',
        classNameInActive: 'dotsMenu--close',
        classNameDefault: 'dotsMenu--default',
      };
      addRemoveClass(config);
      // if (menuState) {
      //   dotsMenuRef.current.classList.add('dotsMenu--active');
      //   if (defaultDotsState) {
      //     // dotsMenuRef.current.classList.remove('dotsMenu--default');
      //     dotsMenuRef.current.classList.remove('dotsMenu--default');
      //     setDefaultDotsState(false);
      //   } else {
      //     dotsMenuRef.current.classList.remove('dotsMenu--close');
      //   }
      // } else {
      //   if (dotsMenuRef.current.classList.contains('dotsMenu--default')) {
      //   } else {
      //     dotsMenuRef.current.classList.add('dotsMenu--close');
      //     dotsMenuRef.current.classList.remove('dotsMenu--active');
      //   }
      // }
    }
  }, [menuState]);

  return (
    <svg
      className={`dotsMenu dotsMenu--default
      `}
      ref={dotsMenuRef}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 6 24"
    >
      <circle
        cx="3"
        cy="3"
        r="3"
        fill={dotsColor === purpleColor ? whiteColor : purpleColor}
      />

      <circle
        cx="3"
        cy="12"
        r="3"
        fill={dotsColor === purpleColor ? whiteColor : purpleColor}
      />
      <circle
        cx="3"
        cy="21"
        r="3"
        fill={dotsColor === purpleColor ? whiteColor : purpleColor}
      />
    </svg>
  );
}
export default DotsMenu;
