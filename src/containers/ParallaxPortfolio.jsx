import { Background, Parallax } from 'react-parallax';
import CPBackgroundPortfolio from '../components/CPBackgroundPortfolio';
import CPBackgroundPortfolioFull from '../components/CPBackgroundPortfolioFull';
import useWindowSize from '../hooks/UseWindowSize';
import Projects from './Projects';

function ParallaxPortfolio() {
  const windowSize = useWindowSize();
  return (
    <Parallax strength={800} bgStyle={{ bottom: '10%' }}>
      <Background className="parallaxPortfolio">
        {windowSize.width > 768 ? (
          <CPBackgroundPortfolioFull />
        ) : (
          <CPBackgroundPortfolio />
        )}
      </Background>
      <Projects />
    </Parallax>
  );
}
export default ParallaxPortfolio;
