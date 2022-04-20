import { Link, scrollSpy } from 'react-scroll';
import React, { useEffect, useRef, useState, useId } from 'react';
import MenuEffectAnimation from './MenuEffectAnimation';
import IrregularBorder from './IrregularBorder';
import ActiveBar from './ActiveBar';
import useMobileMenuState from '../hooks/UseMobileMenuState';
import UseScrollBlock from '../hooks/UseScrollBlock';
import socialMedia from '../utils/socialMedia';
import ContactItem from './ContactItem';
import useWindowSize from '../hooks/UseWindowSize';

function MenuMobile(prop) {
  // eslint-disable-next-line no-unused-vars
  // const { menuIsVisible } = prop;
  const menuState = useMobileMenuState();
  const windowSize = useWindowSize();
  const [blockScroll, allowScroll] = UseScrollBlock();
  const menuMobileRef = useRef(null);
  const barsRef = useRef(null);

  const elementActive = () => {
    setTimeout(() => {
      if (barsRef.current !== null && menuState) {
        for (let i = 0; i < barsRef.current.children.length; i++) {
          if (
            barsRef.current.children[i].children[0].classList.contains(
              'menuMobile__item--active',
            )
          ) {
            barsRef.current.children[i].children[1].style.opacity = 1;
          } else {
            barsRef.current.children[i].children[1].style.opacity = 0;
          }
        }
      }
    }, 100);
  };
  // useEffect(() => {
  //   scrollSpy.update();
  // }, []);
  useEffect(() => {
    // scrollSpy.update();
    elementActive();
    if (menuMobileRef.current !== null) {
      // scrollSpy.update();
      if (menuState) {
        blockScroll();
        menuMobileRef.current.classList.remove('menuMobile--inActive');
        setTimeout(() => {
          menuMobileRef.current.classList.add('menuMobile--active');
          menuMobileRef.current.classList.remove('menuMobile--inActive');
        }, 200);
      } else {
        allowScroll();
        menuMobileRef.current.classList.remove('menuMobile--active');
        menuMobileRef.current.classList.add('menuMobile--inActive');
      }
    }
  }, [menuState]);
  return (
    <>
      <div
        ref={menuMobileRef}
        className={`menuMobile `}
        data-spy="scroll"
        data-target="#myScrollspy"
      >
        <ul className="menuMobile__items" ref={barsRef}>
          <li className="menuMobile__item">
            <Link
              onSetActive={elementActive}
              onSetInactive={elementActive}
              activeClass="menuMobile__item--active"
              to="landing"
              // smooth
              spy={true}
              // hashSpy
              duration={500}
            >
              Home
            </Link>
            <span>
              <ActiveBar />
            </span>
          </li>
          <li className="menuMobile__item">
            <Link
              // onSetInActive={elementActive}
              onSetActive={elementActive}
              activeClass="menuMobile__item--active"
              to="about"
              // smooth
              spy={true}
              // hashSpy={true}
              // duration={500}
            >
              About
            </Link>
            <ActiveBar />
          </li>
          <li className="menuMobile__item">
            <Link
              onSetActive={elementActive}
              activeClass="menuMobile__item--active"
              to="skills"
              // smooth
              spy={true}
              // hashSpy={true}
              // duration={500}
              isDynamic
            >
              Skills
            </Link>
            <ActiveBar />
          </li>
          <li className="menuMobile__item">
            <Link
              onSetActive={elementActive}
              activeClass="menuMobile__item--active"
              to="portfolio"
              // smooth
              spy={true}
              // hashSpy={true}
              // duration={500}
            >
              Portfolio
            </Link>
            <ActiveBar />
          </li>
          <li className="menuMobile__item">
            <Link
              onSetActive={elementActive}
              activeClass="menuMobile__item--active"
              to="contact"
              // smooth
              spy={true}
              // hashSpy
              // duration={500}
            >
              Contact
            </Link>
            <ActiveBar />
          </li>
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
                key={index}
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
