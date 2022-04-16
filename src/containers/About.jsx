import { useState } from 'react';
import useIntersectionObserver from '../hooks/UseIntersectionObserver';
import PrincipalButton from '../components/PrincipalButton';
import TitleDecorator from '../components/TitleDecoration';

function About(prop) {
  const { visible } = prop;
  const [isOpen, setIsOpen] = useState(false);
  const [containRef, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.7,
  });
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div ref={containRef} className="about">
      <div
        className={`about__container ${
          isVisible ? 'slide-fwd-top' : 'slide-fwd-bottom'
        }`}
      >
        <span className="title--container">
          <TitleDecorator />
          <h1 className="about__title">Sobre mi</h1>
        </span>
        <p className="about__description">
          soy un desarrollador interezado en seguir expandiendo mis
          conocimientos en tecnologia y crear software que sean de utilidad para
          otros
        </p>
        {isOpen ? (
          <p className="about__description">
            soy mas que solo una persona apasionada por la tecnologia que reside
            en una ciudad de Venezuela, entre mis muchos intereses y pasatiempos
            estan los telclados mecanicos, comics, manga, anime, juegos de mesa,
            videojuegos, entre otros
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
