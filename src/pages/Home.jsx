import { useEffect, useRef } from 'react';
import SvgArrow from '../components/SvgArrow';
// import Parallax from '../containers/Parallax';
import ParallaxLanding from '../containers/ParallaxLanding';
import IrregularBorder from '../components/IrregularBorder';
import ParallaxLandingPurple from '../containers/ParallaxLandingPurple';
import useIntersectionObserver from '../hooks/UseIntersectionObserver';
import ParallaxAbout from '../containers/ParallaxAbout';
import ParallaxSkills from '../containers/ParallaxSkills';
import ParallaxPortfolio from '../containers/ParallaxPortfolio';
import ParallaxContact from '../containers/ParallaxContact';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import useWindowSize from '../hooks/UseWindowSize';
import ArrowToTopIcon from '../components/ArrowToTopIcon';

const options = {
  rootMargin: '0px',
  threshold: 0.7,
};
const nextElement = (element, elementVisible) => {
  if (elementVisible) {
    scroller.scrollTo(element, {
      duration: 300,
      smooth: true,
    });
  }
};
function Home() {
  const [landingRef, landingIsVisible] = useIntersectionObserver(options);
  const [landingPurpleRef, landingPurpleIsVisible] =
    useIntersectionObserver(options);
  const [aboutRef, aboutIsVisible] = useIntersectionObserver(options);
  const [skillsRef, skillsIsVisible] = useIntersectionObserver(options);
  const [portfolioRef, portfolioIsVisible] = useIntersectionObserver(options);
  const [contactMeRef, contactMeIsVisible] = useIntersectionObserver(options);
  const windowSize = useWindowSize();
  const scrollTimeout = useRef(null);
  const scrollTime = windowSize.width > 600 ? 400 : 0;
  const allSections = [
    {
      ref: landingRef,
      state: landingIsVisible,
    },
    {
      ref: landingPurpleRef,
      state: landingPurpleIsVisible,
    },
    {
      ref: aboutRef,
      state: aboutIsVisible,
    },
    {
      ref: skillsRef,
      state: skillsIsVisible,
    },
    {
      ref: portfolioRef,
      state: portfolioIsVisible,
    },
    {
      ref: contactMeRef,
      state: contactMeIsVisible,
    },
  ];

  useEffect(() => {
    clearTimeout(scrollTimeout.current);
    scrollSpy.update();
    if (window.document.body.style.length === 0) {
      scrollTimeout.current = setTimeout(() => {
        allSections.forEach((section) => {
          if (section.ref.current !== null && section.state) {
            nextElement(section.ref.current.id, section.state);
          }
        });
      }, scrollTime);
    }
  }, [
    landingIsVisible,
    landingPurpleIsVisible,
    aboutIsVisible,
    skillsIsVisible,
    portfolioIsVisible,
    contactMeIsVisible,
  ]);

  const nextSectionButton = () => {
    for (let i = 0; i < allSections.length; i++) {
      if (allSections[i].state) {
        nextElement(allSections[i + 1].ref.current.id, allSections[i].state);
      }
    }
  };
  const toTop = () => {
    scroll.scrollToTop(0, {
      duration: 500,
      smooth: true,
    });
  };
  return (
    <>
      <div id="landing" name="element-1">
        <section id="landingWhite" ref={landingRef}>
          <ParallaxLanding windowSize={windowSize} />
        </section>
        <IrregularBorder backgroundPurple />
        <section id="landingPurple" ref={landingPurpleRef}>
          <ParallaxLandingPurple windowSize={windowSize} />
        </section>
      </div>
      <IrregularBorder />
      <section id="about" ref={aboutRef}>
        <ParallaxAbout />
      </section>
      <IrregularBorder backgroundPurple />
      <section id="skills" ref={skillsRef}>
        <ParallaxSkills />
      </section>
      <IrregularBorder />
      <section id="portfolio" ref={portfolioRef}>
        <ParallaxPortfolio />
      </section>
      <IrregularBorder backgroundPurple />
      <section id="contact" ref={contactMeRef}>
        <ParallaxContact />
      </section>
      <IrregularBorder />
      {contactMeIsVisible ? (
        <ArrowToTopIcon clickAction={toTop} />
      ) : (
        <SvgArrow clickAction={nextSectionButton} />
      )}
    </>
  );
}
export default Home;
