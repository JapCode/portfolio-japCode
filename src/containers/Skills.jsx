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
            <p
              style={{ paddingBottom: '10px' }}
              className="skills__description"
            >
              As a Software Developer i have basic knowledge skills and concepts
              how example, data structure and algorithms, version control
              system, networks, testing, cypher and cryptography, system
              development life cycle, database, and others.
            </p>
            <p style={{ paddingTop: '10px' }} className="skills__description">
              I’m mainly dedicated in web development on the frontend side with
              solid knowledge in JavaScript, CSS and HTML, managing frameworks
              and libraries for a better experience and time in development. you
              can see some skills below.
            </p>
            <PrincipalButton btnAction={handleClick}>Show more</PrincipalButton>
          </>
        ) : (
          <>{windowSize.width > 900 ? <SkillsContainer /> : ''}</>
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
