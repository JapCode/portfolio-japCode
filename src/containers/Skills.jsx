import { useState } from 'react';
import TitleDecorator from '../components/TitleDecoration';
import PrincipalButton from '../components/PrincipalButton';
import useWindowSize from '../hooks/UseWindowSize';
import SkillsModal from '../Modals/SkillsModal';
import SkillsContainer from './SkillsContainer';

function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowSize();
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div
      // ref={containRef}
      className={`skills 
      ${isOpen ? 'skillsView bg--active' : ''}
      `}
    >
      <div
        className={`skills__details 
        `}
      >
        {/* ${isVisible ? 'slide-fwd-top' : 'slide-fwd-bottom'} */}
        <span className="title--container">
          <TitleDecorator />
          <h1 className="skills__title">Skills</h1>
        </span>
        {!isOpen ? (
          <>
            <p className="skills__description">
              como frontend-developer poseo las habilidades basicas y esenciales
              o sease html, css, js y git ademas de habilidades y conocimientos
              complementarios para backend y diseño ademas de siempre estar en
              continua busqueda de conocer nuevas cosas y mejora de las actuales
            </p>
            <PrincipalButton btnAction={handleClick}>Show more</PrincipalButton>
          </>
        ) : (
          <SkillsContainer />
        )}
        {windowSize.width > 900 ? (
          ''
        ) : (
          <SkillsModal isOpen={isOpen} onClose={handleClick}>
            <SkillsContainer />
          </SkillsModal>
        )}
      </div>
    </div>
  );
}
export default Skills;
