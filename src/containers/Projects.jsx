import { useEffect, useRef, useState } from 'react';
import TitleDecorator from '../components/TitleDecoration';
import useWindowSize from '../hooks/UseWindowSize';
import useCallApi from '../hooks/UseCallApi';
import ArrowLeft from '../components/ArrowLeft';
import ArrowRight from '../components/ArrowRight';
import ProjectsMobileWrapper from './ProjectsMobileWrapper';
import ProjectsDesktopWrapper from './ProjectsDesktopWrapper';
import CardsLoader from '../components/CardsLoader';
import CardsLoaderMobile from '../components/CardsLoaderMobile';

function Projects() {
  const windowSize = useWindowSize();
  const { data, loading } = useCallApi();
  const [projects, setProjects] = useState();
  const slideRef = useRef();
  const dotsRef = useRef();
  const [slideCount, setSlideCount] = useState(0);
  const rightArrowRef = useRef();
  const leftArrowRef = useRef();
  const mobileRef = useRef();

  const newElements = (newElement) => {
    setProjects(newElement);
  };
  const next = () => {
    if (slideRef.current !== null) {
      if (slideCount < projects.length - 1) {
        setSlideCount((state) => state + 1);
      }
    }
  };
  const prev = () => {
    if (slideRef.current !== null && slideCount > 0) {
      setSlideCount((state) => state - 1);
    }
  };
  const moveSlide = () => {
    if (slideRef.current !== null) {
      // console.log(slideRef.current.children[0].children[0]);
      const size = slideRef.current.children[0].children[0].offsetWidth;
      slideRef.current.children[0].style.transition = 'ease-in-out 0.5s';
      slideRef.current.children[0].style.marginLeft = `-${
        (size + 7) * slideCount
      }px`;
    }
  };
  const dots = () => {
    if (dotsRef.current !== null) {
      for (let i = 0; i < dotsRef.current.children.length; i++) {
        if (i === slideCount) {
          dotsRef.current.children[i].classList.add('active');
        } else {
          dotsRef.current.children[i].classList.remove('active');
        }
      }
    }
  };
  const arrows = () => {
    if (rightArrowRef && leftArrowRef !== null) {
      if (slideCount === 0) {
        leftArrowRef.current.classList.add('portfolio__arrow-left--disabled');
      } else {
        leftArrowRef.current.classList.remove(
          'portfolio__arrow-left--disabled',
        );
      }
      if (slideCount === projects.length - 1) {
        rightArrowRef.current.classList.add('portfolio__arrow-right--disabled');
      } else {
        rightArrowRef.current.classList.remove(
          'portfolio__arrow-right--disabled',
        );
      }
    }
  };
  const handleMobileScroll = () => {
    if (mobileRef.current !== null) {
      const size = mobileRef.current.offsetWidth;
      const scroll = mobileRef.current.scrollLeft;
      const scrollSize = Math.floor(scroll / size);
      setSlideCount(scrollSize);
    }
  };
  useEffect(() => {
    if (slideRef.current !== null && projects) {
      dots();
      if (windowSize.width > 900) {
        moveSlide();
        arrows();
      }
    }
  }, [slideCount]);
  return (
    <div className="portfolio">
      <span className="title--container">
        <TitleDecorator />
        <h1 className="portfolio__title">Portfolio</h1>
      </span>
      <div className="portfolio__cardsContainer">
        {windowSize.width > 900 && projects ? (
          <>
            {loading ? (
              <CardsLoader />
            ) : (
              <ProjectsDesktopWrapper
                data={data}
                newElements={newElements}
                ref={slideRef}
              >
                {projects}
              </ProjectsDesktopWrapper>
            )}
            <ArrowRight actionClick={next} ref={rightArrowRef} />
            <ArrowLeft actionClick={prev} ref={leftArrowRef} />
          </>
        ) : (
          <div>
            {loading ? (
              <CardsLoaderMobile />
            ) : (
              <ProjectsMobileWrapper
                data={data}
                newElements={newElements}
                handleMobileScroll={handleMobileScroll}
                ref={mobileRef}
              >
                {projects}
              </ProjectsMobileWrapper>
            )}
          </div>
        )}
        <ul className="portfolio__dots" ref={dotsRef}>
          <li className="portfolio__dot active" />
          <li className="portfolio__dot" />
          <li className="portfolio__dot" />
          <li className="portfolio__dot" />
        </ul>
      </div>
    </div>
  );
}
export default Projects;
