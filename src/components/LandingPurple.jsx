import useIntersectionObserver from '../hooks/UseIntersectionObserver';

function ParallaxLandingPurple() {
  const [containRef, isVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.6,
  });
  return (
    <div ref={containRef} className="landingPurple">
      <div
        className={`landingPurple__container ${
          isVisible ? 'slide-fwd-top' : 'slide-fwd-bottom'
        }`}
      >
        <h1 className="landingPurple__title">
          I&apos;m, <br /> Alonso Paredes
        </h1>
        <h2 className="landingPurple__subtitle">Frontend Developer</h2>
      </div>
    </div>
  );
}
export default ParallaxLandingPurple;
