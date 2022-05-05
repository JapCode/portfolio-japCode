import { Background, Parallax } from 'react-parallax';
import About from './About';
import BongoCat from '../components/BongoCat';
import useIntersectionObserver from '../hooks/UseIntersectionObserver';

function ParallaxAbout() {
  const [containRef, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.9,
  });
  return (
    <Parallax strength={-400} bgStyle={{ bottom: '10%' }}>
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
