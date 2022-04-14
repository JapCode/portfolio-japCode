// import React, { useRef, useEffect } from 'react';

import { useEffect, useRef } from 'react';
import useMobileMenuState from '../hooks/UseMobileMenuState';
import useIsMounted from '../hooks/UseMounted';
import addRemoveClass from '../utils/addRemoveClass';
import ArrowIcon from './ArrowIcon';

function CloseArrows() {
  const menuState = useMobileMenuState();
  const parenElementRef = useRef(null);
  // const isMounted = useIsMounted();
  // const containerClose = isMounted ? 'closeArrows__container--close' : '';

  const moveArrow = () => {
    if (menuState) {
      parenElementRef.current.children[1].classList.add(
        'closeArrows__svg--move',
      );
    } else {
      parenElementRef.current.children[1].classList.remove(
        'closeArrows__svg--move',
      );
    }
  };
  useEffect(() => {
    if (parenElementRef.current !== null) {
      const config = {
        classState: menuState,
        element: parenElementRef.current,
        classNameActive: 'closeArrows__container--active',
        classNameInActive: 'closeArrows__container--close',
        classNameDefault: 'closeArrows__container--default',
      };
      addRemoveClass(config);
    }
  });
  return (
    <div className="closeArrows">
      <div
        onAnimationEnd={moveArrow}
        onTransitionEnd={moveArrow}
        className={`closeArrows__container closeArrows__container--default
        `}
        ref={parenElementRef}
      >
        <ArrowIcon />
        <ArrowIcon />
      </div>
    </div>
  );
}

export default CloseArrows;
