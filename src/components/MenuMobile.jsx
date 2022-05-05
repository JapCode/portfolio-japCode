/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useRef, useState } from 'react';
import MenuEffectAnimation from './MenuEffectAnimation';
import ActiveBar from './ActiveBar';
import useMobileMenuState from '../hooks/UseMobileMenuState';
import socialMedia from '../utils/socialMedia';
import ContactItem from './ContactItem';
import useWindowSize from '../hooks/UseWindowSize';
import layers from '../utils/navElements';
import buttonActionMenu from '../utils/buttonActionMenu';
import useNavigationMenuUpdater from '../hooks/UseNavigationMenuUpdater';
import useViewSectionState from '../hooks/UseViewSectionState';

function MenuMobile(prop) {
  // eslint-disable-next-line no-unused-vars
  // const { menuIsVisible } = prop;
  const menuState = useMobileMenuState();
  const windowSize = useWindowSize();
  const menuMobileRef = useRef(null);
  const barsRef = useRef(null);
  const viewSection = useViewSectionState();
  const [toLayer, setToLayer] = useState(0);
  useNavigationMenuUpdater(toLayer);

  const handleClick = (e) => {
    buttonActionMenu(e, layers, viewSection, setToLayer);
  };
  useEffect(() => {
    if (menuMobileRef.current !== null) {
      if (menuState) {
        menuMobileRef.current.classList.remove('menuMobile--inActive');
        setTimeout(() => {
          menuMobileRef.current.classList.add('menuMobile--active');
          menuMobileRef.current.classList.remove('menuMobile--inActive');
        }, 200);
      } else {
        menuMobileRef.current.classList.remove('menuMobile--active');
        menuMobileRef.current.classList.add('menuMobile--inActive');
      }
    }
  }, [menuState]);
  return (
    <>
      <div ref={menuMobileRef} className={`menuMobile `}>
        <ul className="menuMobile__items" ref={barsRef}>
          {layers.map((element, index) => {
            return (
              <li
                key={element.name.toString()}
                name={element.name}
                onClick={handleClick}
                className={`menuMobile__item `}
              >
                <span className="item--text" name={element.name}>
                  {element.name}
                </span>
                <span
                  className={`${
                    viewSection === element.layer
                      ? 'menuMobile__item--active'
                      : 'menuMobile__item--close'
                  }`}
                >
                  <ActiveBar />
                </span>
              </li>
            );
          })}
        </ul>
        {windowSize.height > 650 && (
          <ul
            className={`menuMobile__socialMedia ${
              menuState
                ? 'menuMobile__socialMedia--active'
                : 'menuMobile__socialMedia--inActive'
            }`}
          >
            {socialMedia.map((social, index) => (
              <ContactItem
                key={social.name.toString()}
                url={social.url}
                icon={social.icon}
                name={social.name}
              />
            ))}
          </ul>
        )}
      </div>
      <div className="menuMobile__effects">
        <MenuEffectAnimation />
      </div>
    </>
  );
}
export default MenuMobile;
