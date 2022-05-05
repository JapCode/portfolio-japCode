// import useIntersectionObserver from '../hooks/UseIntersectionObserver';

import useWindowSize from '../hooks/UseWindowSize';

function LandingPurple() {
  const windowSize = useWindowSize();
  // const [containRef, isVisible] = useIntersectionObserver({
  //   rootMargin: '0px',
  //   threshold: 0.6,
  // });
  return (
    <div
      //  ref={containRef}
      className="landingPurple"
    >
      <div
        className={`landingPurple__container
        `}
      >
        <h1 className="landingPurple__title">
          I&apos;m, <br /> Alonso Paredes
        </h1>
        <figure className="landingPurple__subtitle">
          {windowSize.width > 768 ? (
            <img
              src="https://i.imgur.com/vGdmOmQ.gif"
              title="source: imgur.com"
              alt="frontend developer"
            />
          ) : (
            <img
              src="https://i.imgur.com/EQPNbsb.gif"
              title="source: imgur.com"
              alt="frontend developer"
            />
          )}
        </figure>
      </div>
    </div>
  );
}
export default LandingPurple;
