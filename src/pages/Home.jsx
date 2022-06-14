/* eslint-disable no-param-reassign */
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useEffect, useMemo, useRef, useState } from 'react';
import BongoCat from '../components/BongoCat';
import CPBackgroundContact from '../components/CPBackgroundContact';
import CPBackgroundPortfolio from '../components/CPBackgroundPortfolio';
import CPBackgroundPortfolioFull from '../components/CPBackgroundPortfolioFull';
import Dice from '../components/Dice';
import IrregularBorder from '../components/IrregularBorder';
import LandingPurple from '../components/LandingPurple';
import MetaElements from '../components/Meta';
import SvgSwitch from '../components/SvgSwitch';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Landing from '../containers/Landing';
import Projects from '../containers/Projects';
import Skills from '../containers/Skills';
import useNavigationMenuState from '../hooks/UseNavigationMenuState';
import useViewSectionUpdater from '../hooks/UseViewSectionUpdater';
import useWindowSize from '../hooks/UseWindowSize';

function Home() {
  const windowSize = useWindowSize();
  const parallaxRef = useRef(null);
  const parallaxLayerRef = useRef(null);
  const svgRef = useRef(null);
  const [viewLayer, setViewLayer] = useState(0);
  useViewSectionUpdater(viewLayer);
  const navigationState = useNavigationMenuState();
  const [mobile, setMobile] = useState(false);
  const [contactFactor, setContactFactor] = useState(1);
  let offsetTry;
  const [numberPage, setNumberPage] = useState(6);

  useEffect(() => {
    if (windowSize.height < 600) {
      setNumberPage(6.1);
      setMobile(false);
      setContactFactor(1.1);
    } else {
      setNumberPage(6);
      setContactFactor(1);
      setMobile(true);
    }
  }, [windowSize]);

  const handleClick = () => {
    parallaxRef.current.scrollTo(5);
  };
  const calc = (space, res) => {
    if (res) {
      return Math.floor(parallaxRef.current.current / (space - 100));
    }
    return Math.floor(parallaxRef.current.current / (space / 2));
  };
  const svgChange = () => {
    if (svgRef.current !== null) {
      if (offsetTry === 0) {
        svgRef.current.children[0].classList.remove('purple');
      } else if (offsetTry === 1) {
        svgRef.current.children[0].classList.add('purple');
      }
    }
  };
  const handleScroll = () => {
    if (parallaxRef.current !== null) {
      // console.log(
      //   Math.floor(
      //     parallaxRef.current.current / (parallaxRef.current.space - 100),
      //   ),
      // );
      offsetTry = calc(parallaxRef.current.space, false);
      svgChange();
      // setOffsetParallax(calc(parallaxRef.current.space, false));
      // offsetParallax = Math.floor(
      //   parallaxRef.current.current / (parallaxRef.current.space / 2),
      // );
      // console.log(offsetParallax);
      switch (
        Math.floor(
          parallaxRef.current.current / (parallaxRef.current.space - 100),
        )
      ) {
        case 0:
          setViewLayer((prev) => (prev = 0));
          break;
        // case 1:
        //   setViewLayer((prev) => (prev = 0));
        //   break;
        case 2:
          setViewLayer((prev) => (prev = 2));
          break;
        case 3:
          setViewLayer((prev) => (prev = 3));
          break;
        case 4:
          setViewLayer((prev) => (prev = 4));
          break;
        case 5:
          setViewLayer((prev) => (prev = 5));
          break;
        default:
          setViewLayer((prev) => (prev = 0));
      }
    }
  };
  const scrollTo = (element, layer) => {
    element.scrollTo(layer);
  };
  useEffect(() => {
    if (navigationState !== null) {
      scrollTo(parallaxRef.current, navigationState);
    }
  }, [navigationState]);

  useEffect(() => {
    if (parallaxRef.current !== null) {
      parallaxRef.current.container.current.onscroll = handleScroll;
    }
    return () => {
      parallaxRef.current.container.current.onscroll = null;
    };
  }, []);

  return useMemo(() => {
    return (
      <>
        <MetaElements />
        <section>
          <Parallax
            pages={numberPage}
            style={{ top: '0', left: '0' }}
            ref={parallaxRef}
          >
            {/* landing */}
            <ParallaxLayer offset={0} factor={1}>
              <IrregularBorder />
            </ParallaxLayer>
            <ParallaxLayer offset={0.25} speed={-1}>
              <section className="parallaxLanding" ref={svgRef}>
                <SvgSwitch
                // colorOffset={offsetParallax}
                />
              </section>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
              <Landing />
            </ParallaxLayer>
            {/* landingPurple */}
            <ParallaxLayer
              offset={1}
              factor={1}
              className="second"
              style={{ backgroundColor: '#5a189a', zIndex: '-1' }}
            >
              {mobile && <IrregularBorder backgroundPurple />}
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1}>
              <LandingPurple />
            </ParallaxLayer>
            {/* about */}
            <ParallaxLayer
              offset={2}
              ref={parallaxLayerRef}
              style={{ backgroundColor: '#fff' }}
            >
              {mobile && <IrregularBorder />}
            </ParallaxLayer>
            <ParallaxLayer className="parallaxAbout" offset={2} speed={1}>
              <BongoCat />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5}>
              <About />
            </ParallaxLayer>
            {/* skills */}
            <ParallaxLayer
              offset={3}
              factor={1}
              style={{ backgroundColor: '#5a189a' }}
            >
              {mobile && <IrregularBorder backgroundPurple />}
            </ParallaxLayer>
            <ParallaxLayer className="parallaxSkills" offset={3} speed={1}>
              <Dice />
            </ParallaxLayer>
            <ParallaxLayer offset={3.1} speed={0.5}>
              <Skills />
            </ParallaxLayer>
            {/* portfolio */}
            <ParallaxLayer
              offset={4}
              factor={1}
              style={{ backgroundColor: '#fff' }}
            >
              {mobile && <IrregularBorder />}
            </ParallaxLayer>
            <ParallaxLayer className="parallaxPortfolio" offset={4} speed={0.5}>
              {windowSize.width > 600 ? (
                <CPBackgroundPortfolioFull />
              ) : (
                <CPBackgroundPortfolio />
              )}
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={1}>
              <Projects />
            </ParallaxLayer>
            {/* contact */}
            <ParallaxLayer
              offset={5}
              factor={contactFactor}
              style={{ backgroundColor: '#5a189a' }}
            >
              {mobile && <IrregularBorder backgroundPurple />}
            </ParallaxLayer>
            <ParallaxLayer className="parallaxContact" offset={5} speed={0.3}>
              <CPBackgroundContact />
            </ParallaxLayer>
            <ParallaxLayer offset={5} speed={1}>
              <Contact actionClick={handleClick} />
            </ParallaxLayer>
            <ParallaxLayer offset={numberPage}>
              {windowSize.height < 700 ? '' : <IrregularBorder />}
            </ParallaxLayer>
          </Parallax>
        </section>
      </>
    );
  }, [windowSize, mobile, contactFactor, numberPage]);
}

export default Home;
