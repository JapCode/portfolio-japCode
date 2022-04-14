import projectImg from '../assets/static/projectExample.jpg';
import MoreBtn from '../components/MoreBtn';

function CardsProjects() {
  return (
    <div className="project">
      <h3 className="project__title">title</h3>
      <span className="project__technologies">
        <p>React</p>
        <p>Sass</p>
        <p>Node</p>
      </span>
      <span className="project__btnContainer">
        <button className="project__btn" type="button">
          See more
        </button>
        <MoreBtn />
      </span>
      <div className="project__container">
        <div className="project__description">
          {/* <p className="project__content">description</p> */}
          <div className="project__description--cPEffect" />
        </div>
        <img className="project__img" src={projectImg} alt="" />
      </div>
    </div>
  );
}
export default CardsProjects;
