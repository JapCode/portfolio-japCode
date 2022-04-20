import { Parallax, Background } from 'react-parallax';
import Landing from './Landing';
import SvgSwitch from '../components/SvgSwitch';
import { useEffect, useState } from 'react';
import useWindowSize from '../hooks/UseWindowSize';

function ParallaxLanding() {
  const windowSize = useWindowSize();
  // const midStrength = windowSize.height > 900 ? 1000 : 800;
  // const [width, setWidth] = useState({});
  return (
    <Parallax
      strength={windowSize.height > 600 ? windowSize.height : 490}
      bgStyle={{ bottom: '15%' }}
    >
      <Background className="parallaxLanding">
        <SvgSwitch />
      </Background>
      <Landing />
    </Parallax>
  );
}
export default ParallaxLanding;
