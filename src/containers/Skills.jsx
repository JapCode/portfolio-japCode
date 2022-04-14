import { useEffect, useState } from 'react';
import Skill from '../components/Skill';
import reactImg from '../assets/static/react.svg';
import javaScriptImg from '../assets/static/javaScript.svg';
import webPackImg from '../assets/static/webpack.svg';
import nodeImg from '../assets/static/nodeJs.svg';
import mongoImg from '../assets/static/mongoDB.svg';
import htmlImg from '../assets/static/html.svg';
import cssImg from '../assets/static/css.svg';
import sassImg from '../assets/static/sass.svg';
import gitImg from '../assets/static/git.svg';
import reduxImg from '../assets/static/redux.svg';
import figmaImg from '../assets/static/figma.svg';
import eslint from '../assets/static/eslint.svg';
import useIntersectionObserver from '../hooks/UseIntersectionObserver';
import IrregularBorder from '../components/IrregularBorder';
import TitleDecorator from '../components/TitleDecoration';
import PrincipalButton from '../components/PrincipalButton';
import useWindowSize from '../hooks/UseWindowSize';

const skillsArray = [
  {
    img: reactImg,
    name: 'React',
    link: 'https://reactjs.org/',
  },
  {
    img: javaScriptImg,
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
  },
  {
    img: cssImg,
    name: 'CSS',
    link: 'https://developer.mozilla.org/es/docs/Web/CSS',
  },
  {
    img: htmlImg,
    name: 'HTML',
    link: 'https://developer.mozilla.org/es/docs/Web/HTML',
  },
  {
    img: sassImg,
    name: 'SASS',
    link: 'https://sass-lang.com/',
  },
  {
    img: webPackImg,
    name: 'Webpack',
    link: 'https://webpack.js.org/',
  },
  {
    img: reduxImg,
    name: 'Redux',
    link: 'https://redux.js.org/',
  },
  {
    img: gitImg,
    name: 'Git',
    link: 'https://git-scm.com/',
  },
  {
    img: nodeImg,
    name: 'NodeJS',
    link: 'https://nodejs.org/',
  },
  {
    img: mongoImg,
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
  },
  {
    img: eslint,
    name: 'ESLint',
    link: 'https://eslint.org/',
  },
  {
    img: figmaImg,
    name: 'Figma',
    link: 'https://www.figma.com/',
  },
];

const skillsRender = [];
function calcArrays(numberColumns, originalArray, destinyArray) {
  const columnsLength = Math.floor(originalArray.length / numberColumns);
  let start = 0;
  let end = 0;
  if (destinyArray.length === 0) {
    for (let i = 0; i < numberColumns; i++) {
      start = end;
      end = start + columnsLength;
      const myArray = originalArray.slice(start, end);
      destinyArray.push(myArray);
    }
  }
}
function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [containRef, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: isOpen ? 0.2 : 0.8,
  });
  const windowSize = useWindowSize();
  const [renderMySkills, setRenderMySkills] = useState([]);

  const animationEnd = () => {
    if (!isOpen && animation) {
      setIsOpen(true);
      setAnimation(false);
    }
  };
  const handleClick = () => {
    setAnimation(!animation);
    renderSkills();
  };
  const activeDown = isOpen ? 'active--down' : '';
  const activeUp = animation ? 'active--up' : '';

  useEffect(() => {
    if (isVisible) {
      let columnsToRender = windowSize.width > 600 ? 3 : 2;
      calcArrays(columnsToRender, skillsArray, skillsRender);
    }
  }, [isVisible]);

  const renderSkills = () => {
    if (skillsRender.length > 0) {
      let myRender = skillsRender.map((skills, index) => {
        return (
          <div className="skills__mySkills" key={index}>
            {skills.map((skill, index) => {
              return (
                <Skill
                  key={index}
                  link={skill.link}
                  img={skill.img}
                  name={skill.name}
                />
              );
            })}
          </div>
        );
      });
      setRenderMySkills(myRender);
    }
  };

  return (
    <div
      ref={containRef}
      className={`skills ${isOpen ? 'skillsView bg--active' : ''}`}
    >
      <div
        className={`skills__details ${
          isVisible ? 'slide-fwd-top' : 'slide-fwd-bottom'
        }`}
      >
        <span className="title--container">
          <TitleDecorator />
          <h1 className="skills__title">Skills</h1>
        </span>
        {isOpen ? (
          ''
        ) : (
          <p className="skills__description">
            como frontend-developer poseo las habilidades basicas y esenciales o
            sease html, css, js y git ademas de habilidades y conocimientos
            complementarios para backend y diseño ademas de siempre estar en
            continua busqueda de conocer nuevas cosas y mejora de las actuales
          </p>
        )}

        {isOpen ? (
          <div className="skills__container">{renderMySkills}</div>
        ) : (
          <PrincipalButton btnAction={handleClick}>Show more</PrincipalButton>
        )}
      </div>
      <div
        onAnimationEnd={animationEnd}
        className={`transitionEffect ${animation ? activeUp : activeDown}`}
      >
        <IrregularBorder anotherColor="#f20089" />
      </div>
    </div>
  );
}
export default Skills;
