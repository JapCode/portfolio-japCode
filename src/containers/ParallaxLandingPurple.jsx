import { Parallax, Background } from 'react-parallax';
import LandingPurple from '../components/LandingPurple';
import SvgSwitch from '../components/SvgSwitch';

function ParallaxLandingPurple(prop) {
  const { windowSize } = prop;
  return (
    <Parallax
      className="custom-bg"
      strength={windowSize.width > 600 ? 900 : 800}
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
