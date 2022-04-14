import { useEffect, useRef } from 'react';
import useMobileMenuState from '../hooks/UseMobileMenuState';
import IrregularBorder from './IrregularBorder';

function MenuEffectAnimation() {
  const menuState = useMobileMenuState();
  // const { isActive } = prop;
  const itemsRef = useRef(null);
  const firstTimeOut = useRef(null);
  const secondTimeOut = useRef(null);
  const thirdTimeOut = useRef(null);
  const removeTimeOut = useRef(null);

  const animationStart = () => {
    if (itemsRef.current !== null) {
      itemsRef.current.classList.add('menuEffectAnimation__items--active');
      for (let i = 0; i < itemsRef.current.children.length; i++) {
        firstTimeOut.current = setTimeout(() => {
          if (
            !itemsRef.current.children[i].classList.contains(
              'menuEffectAnimation__item--active',
            )
          ) {
            itemsRef.current.children[i].classList.add(
              'menuEffectAnimation__item--active',
            );
            itemsRef.current.children[i].classList.remove(
              'menuEffectAnimation__item--inActive',
            );
          }
        }, i * 100);
      }
    }
  };

  const animationEnd = () => {
    if (itemsRef.current !== null && menuState) {
      for (let i = itemsRef.current.children.length - 1; i >= 0; i--) {
        secondTimeOut.current = setTimeout(() => {
          if (
            itemsRef.current.children[i].classList.contains(
              'menuEffectAnimation__item--active',
            ) &&
            menuState
          ) {
            itemsRef.current.children[i].classList.add(
              'menuEffectAnimation__item--full',
            );
          }
        }, itemsRef.current.children.length * 100 - i * 100);
      }
    } else {
      removeTimeOut.current = setTimeout(() => {
        if (!menuState) {
          remove();
        }
      }, 1000);
    }
  };

  const close = () => {
    if (itemsRef.current !== null) {
      for (let i = 0; i < itemsRef.current.children.length; i++) {
        thirdTimeOut.current = setTimeout(() => {
          itemsRef.current.children[i].classList.add(
            'menuEffectAnimation__item--inActive',
          );
          itemsRef.current.children[i].classList.remove(
            'menuEffectAnimation__item--active',
          );
          itemsRef.current.children[i].classList.remove(
            'menuEffectAnimation__item--full',
          );
        }, i * 100);
      }
    }
  };
  useEffect(() => {
    if (menuState) {
      animationStart();
    } else {
      close();
    }
    return () => {
      clearTimeout(firstTimeOut.current);
      clearTimeout(secondTimeOut.current);
      clearTimeout(thirdTimeOut.current);
      clearTimeout(removeTimeOut.current);
    };
  }, [menuState]);

  const remove = () => {
    // clearTimeout(removeTimeOut.current);
    if (itemsRef.current !== null && !menuState) {
      itemsRef.current.classList.remove('menuEffectAnimation__items--active');
      // removeTimeOut.current = setTimeout(() => {
      // }, 1000);
    }
  };
  return (
    <div className="menuEffectAnimation">
      <div className="menuEffectAnimation__items" ref={itemsRef}>
        <div
          // onTransitionEnd={remove}
          className="menuEffectAnimation__item"
        ></div>
        <div className="menuEffectAnimation__item"></div>
        <div className="menuEffectAnimation__item"></div>
        <div className="menuEffectAnimation__item"></div>
        <div className="menuEffectAnimation__item"></div>
        <div className="menuEffectAnimation__item"></div>
        <div className="menuEffectAnimation__item"></div>
        <div
          onTransitionEnd={animationEnd}
          className="menuEffectAnimation__item"
        ></div>
      </div>
      <div
        className={`menuEffectAnimation__border  ${
          menuState
            ? 'menuEffectAnimation__border--active'
            : 'menuEffectAnimation__border--inActive'
        }`}
      >
        <IrregularBorder />
      </div>
    </div>
  );
}
export default MenuEffectAnimation;
