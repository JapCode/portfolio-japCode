import { Background, Parallax } from 'react-parallax';
import Dice from '../components/Dice';
import Skills from './Skills.jsx';

function ParallaxSkills() {
  return (
    <Parallax className="custom-bg" strength={-350} bgStyle={{ bottom: '20%' }}>
      <Background className="parallaxSkills">
        <Dice />
      </Background>
      <Skills />
    </Parallax>
  );
}
export default ParallaxSkills;
