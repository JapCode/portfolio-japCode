import { Background, Parallax } from 'react-parallax';
import Contact from './Contact';
import CPBackgroundContact from '../components/CPBackgroundContact';

function ParallaxContact() {
  return (
    <Parallax className="custom-bg" strength={400} bgStyle={{ bottom: '15%' }}>
      <Background className="parallaxContact">
        <CPBackgroundContact />
      </Background>
      <Contact />
    </Parallax>
  );
}

export default ParallaxContact;
