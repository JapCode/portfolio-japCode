import CardsProjects from './CardsProject';
import TitleDecorator from '../components/TitleDecoration';
import useWindowSize from '../hooks/UseWindowSize';
import CardsProjectsDesk from './CardsProjectsDesk';

function Projects() {
  const windowSize = useWindowSize();
  return (
    <div className="portfolio">
      <span className="title--container">
        <TitleDecorator />
        <h1 className="portfolio__title">Portafolio</h1>
      </span>
      <div className="portfolio__cardsContainer">
        {windowSize.width > 900 ? <CardsProjectsDesk /> : <CardsProjects />}
        <ul className="portfolio__dots">
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
