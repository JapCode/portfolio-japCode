import { Link } from 'react-scroll';
import useBackgroundColorState from '../hooks/UseBackgroundColorState';
import ActiveBar from './ActiveBar';
function Navigation() {
  const backgroundColor = useBackgroundColorState();
  const whiteColor = '#FFFFFF';
  return (
    <ul
      className={`navMenu ${
        backgroundColor === whiteColor ? 'navMenu--gray' : 'navMenu--white'
      }`}
    >
      <li className="navMenu__item">
        <Link
          // onSetActive={elementActive}
          // onSetInactive={elementActive}
          activeClass="navMenu__item--active"
          to="landing"
          smooth
          spy={true}
          // hashSpy
          duration={500}
        >
          Home
        </Link>
      </li>
      <li className="navMenu__item">
        <Link
          // onSetInActive={elementActive}
          // onSetActive={elementActive}
          activeClass="navMenu__item--active"
          to="about"
          smooth
          spy={true}
          // hashSpy={true}
          // duration={500}
        >
          About
        </Link>
      </li>
      <li className="navMenu__item">
        <Link
          // onSetActive={elementActive}
          activeClass="navMenu__item--active"
          to="skills"
          smooth
          spy={true}
          // hashSpy={true}
          // duration={500}
          isDynamic
        >
          Skills
        </Link>
      </li>
      <li className="navMenu__item">
        <Link
          // onSetActive={elementActive}
          activeClass="navMenu__item--active"
          to="portfolio"
          smooth
          spy={true}
          // hashSpy={true}
          // duration={500}
        >
          Portfolio
        </Link>
      </li>
      <li className="navMenu__item">
        <Link
          // onSetActive={elementActive}
          activeClass="navMenu__item--active"
          to="contact"
          smooth
          spy={true}
          // hashSpy
          // duration={500}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
export default Navigation;
