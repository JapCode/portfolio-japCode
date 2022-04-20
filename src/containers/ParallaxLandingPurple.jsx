import { Parallax, Background } from 'react-parallax';
import LandingPurple from '../components/LandingPurple';
import SvgSwitch from '../components/SvgSwitch';

function ParallaxLandingPurple(prop) {
  const { windowSize } = prop;
  // const midStrength = windowSize.height > 1000 ? 1000 : 800;
  return (
    <Parallax
      className="custom-bg"
      strength={windowSize.height > 600 ? windowSize.height : 490}
      bgStyle={{ bottom: '15%' }}
    >
      <Background className="parallaxLandingPurple">
        <SvgSwitch backgroundPurple={true} />
      </Background>
      <LandingPurple />
    </Parallax>
  );
}
export default ParallaxLandingPurple;
