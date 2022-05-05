/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
import { useEffect, useRef, useState } from 'react';
import MoreBtn from '../components/MoreBtn';
import PrincipalButton from '../components/PrincipalButton';

function CardsProjects(prop) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const { name, description, html_url, homepage, language, imgUrlMobile } =
    prop;
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleTransitionEnd = () => {
    if (contentRef.current !== null) {
      if (!isOpen) {
        contentRef.current.children[0].style.display = 'none';
      } else {
        contentRef.current.children[0].style.display = 'block';
        // contentRef.current.style.height = 'auto';
      }
    }
  };
  useEffect(() => {
    if (contentRef.current !== null) {
      if (isOpen) {
        contentRef.current.classList.add('project__content--active');
      } else {
        contentRef.current.children[0].style.display = 'none';
        contentRef.current.classList.remove('project__content--active');
      }
    }
  });
  return (
    <div className="project">
      <h3 className="project__title">{name}</h3>
      {language !== null && (
        <ul className="project__technologies">
          {language.map((item) => {
            return <li key={item.name.toString()}>{item.name}</li>;
          })}
        </ul>
      )}
      <span className="project__btnContainer" onClick={handleClick}>
        <button className="project__btn" type="button">
          See more
        </button>
        <MoreBtn />
      </span>
      <div className="project__container">
        <div className="project__description">
          <div
            className="project__content"
            ref={contentRef}
            onTransitionEnd={handleTransitionEnd}
          >
            <div className="project__contentContainer">
              <p className="project__text">{description}</p>
              <span className="project__btnLinksContainer">
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  <PrincipalButton>Web</PrincipalButton>
                </a>
                <a href={homepage} target="_blank" rel="noopener noreferrer">
                  <PrincipalButton>Github</PrincipalButton>
                </a>
              </span>
            </div>
            <div className="project__description--cPEffect" />
          </div>
        </div>
        <img className="project__img" src={imgUrlMobile} alt="" />
      </div>
    </div>
  );
}
export default CardsProjects;
