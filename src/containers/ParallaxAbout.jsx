import { Background, Parallax } from 'react-parallax';
import About from './About';
import BongoCat from '../components/BongoCat';
import useIntersectionObserver from '../hooks/UseIntersectionObserver';
import { useEffect } from 'react';

function ParallaxAbout() {
  const [containRef, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.9,
  });
  return (
    <Parallax strength={-400} bgStyle={{ bottom: '20%' }}>
      <Background className="parallaxAbout">
        <div ref={containRef}>
          <BongoCat visible={isVisible} />
        </div>
      </Background>
      <About visible={isVisible} />
    </Parallax>
  );
}
export default ParallaxAbout;
