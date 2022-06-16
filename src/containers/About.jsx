import { useState } from 'react';
// import useIntersectionObserver from '../hooks/UseIntersectionObserver';
import PrincipalButton from '../components/PrincipalButton';
import TitleDecorator from '../components/TitleDecoration';

function About(prop) {
  // const { visible } = prop;
  const [isOpen, setIsOpen] = useState(false);
  // const [containRef, isVisible] = useIntersectionObserver({
  //   rootMargin: '0px',
  //   threshold: 0.7,
  // });
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      // ref={containRef}
      className="about"
    >
      <div
        className={`about__container
        `}
      >
        {/* ${isVisible ? 'slide-fwd-top' : 'slide-fwd-bottom'} */}
        <span className="title--container">
          <TitleDecorator />
          <h1 className="about__title">About me</h1>
        </span>
        <p className="about__description">
          I’m a development with interest in expand my knowledge in technologies
          and create utility software for other and to have fun in the process.
        </p>
        {isOpen ? (
          <p className="about__description">
            At the moment i live in Venezuela and i divide my free time to
            learning new things of my interest, read light novels, watch an
            anime or play some videogame, always i ready to talk about some
            topics of geek culture with friends.
          </p>
        ) : (
          ''
        )}
        {isOpen ? (
          ''
        ) : (
          <PrincipalButton btnAction={handleClick}>
            Tell me more
          </PrincipalButton>
        )}
      </div>
    </div>
  );
}
export default About;
