import { Background, Parallax } from 'react-parallax';
import About from './About';
import BongoCat from '../components/BongoCat';

function ParallaxAbout() {
  return (
    <Parallax strength={-400} bgStyle={{ bottom: '20%' }}>
      <Background className="parallaxAbout">
        <BongoCat />
      </Background>
      <About />
    </Parallax>
  );
}
export default ParallaxAbout;
