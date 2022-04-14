import projectImg from '../assets/static/projectExample.jpg';
import MoreBtn from '../components/MoreBtn';
import PrincipalButton from '../components/PrincipalButton';
import imgExample from '../assets/static/projectExample.jpg';

function CardsProjectsDesk() {
  return (
    <div className="projectDesk">
      <div className="projectDesk__details">
        <h3 className="projectDesk__title">Title</h3>
        <ul className="projectDesk__technologies">
          <li>React</li>
          <li>Sass</li>
          <li>Node</li>
        </ul>
        <p className="projectDesk__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <span className="projectDesk__buttons">
          <PrincipalButton>Web</PrincipalButton>
          <PrincipalButton>Github</PrincipalButton>
        </span>
      </div>
      <figure className="projectDesk__imgContainer">
        <img
          className="projectDesk__imgContainer--imgDesk"
          src={imgExample}
          alt=""
        />
        <img
          className="projectDesk__imgContainer--imgMobile"
          src={imgExample}
          alt=""
        />
      </figure>
    </div>
  );
}
export default CardsProjectsDesk;
