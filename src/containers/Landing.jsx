import SvgSwitch from '../components/SvgSwitch';
// import useIntersectionObserver from '../hooks/UseIntersectionObserver';
function Landing() {
  // const [containerRef, isVisible] = useIntersectionObserver({
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.06,
  // });
  // console.log('Section', isVisible);
  console.log('Landing');
  return (
    <>
      <div className="landing">
        <h1 className="landing__title">hello, friend</h1>
        <p className="landing__subtitle">
          bienvenido a mi portafolio espero disfrutes tu estadia aca, puedes
          comenzar haciendo scroll
        </p>
        <SvgSwitch />
      </div>
    </>
  );
}
export default Landing;
