import { Parallax, Background } from 'react-parallax';
import Landing from './Landing';
import SvgSwitch from '../components/SvgSwitch';
import { useEffect, useState } from 'react';

function ParallaxLanding(prop) {
  const { windowSize } = prop;
  const [width, setWidth] = useState({});

  return (
    <Parallax
      strength={windowSize.width > 600 ? 1000 : 700}
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
