import { forwardRef, useEffect } from 'react';
import CardsProjects from './CardsProject';

const ProjectsMobileWrapper = forwardRef((prop, ref) => {
  // const mobileRef = useRef(null);
  const { children, data, newElements, handleMobileScroll } = prop;
  let myProjects;

  const slideContainerMobile = () => {
    if (data) {
      myProjects = data.map((item, index) => {
        return (
          <CardsProjects
            key={item.name.toString()}
            indexNumber={index}
            language={item.language}
            name={item.name}
            description={item.description}
            homepage={item.homepage}
            html_url={item.html_url}
            imgUrlDesk={item.imgUrlDesk}
            imgUrlMobile={item.imgUrlMobile}
          />
        );
      });
      newElements(myProjects);
    }
  };
  useEffect(() => {
    if (data && myProjects === undefined) {
      slideContainerMobile();
    }
  }, [data]);
  useEffect(() => {
    if (ref.current !== null) {
      ref.current.addEventListener('scroll', handleMobileScroll);
    }
    return () => {
      if (ref.current !== null) {
        ref.current.removeEventListener('scroll', handleMobileScroll);
      }
    };
  });
  return (
    <div className="portfolio__mobileSlideContainer" ref={ref}>
      <figure className="portfolio__mobileSlide">{children}</figure>
    </div>
  );
});
export default ProjectsMobileWrapper;
