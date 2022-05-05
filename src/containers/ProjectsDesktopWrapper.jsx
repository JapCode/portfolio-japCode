import { forwardRef, useEffect } from 'react';
import CardsProjectsDesk from './CardsProjectsDesk';

const ProjectsDesktopWrapper = forwardRef((prop, ref) => {
  const { children, data, newElements } = prop;
  let myProjects;
  const slideContainer = () => {
    if (data) {
      myProjects = data.map((item, index) => {
        return (
          <CardsProjectsDesk
            key={item.name.toString()}
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
      slideContainer();
    }
  }, [data]);
  return (
    <div className="portfolio__slideContainer" ref={ref}>
      <figure className="portfolio__slide">{children}</figure>
    </div>
  );
});
export default ProjectsDesktopWrapper;
