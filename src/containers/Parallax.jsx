import Section from '../components/Section';
import SvgSwitch from '../components/SvgSwitch';
import useParallax from '../hooks/useParallax';

function Parallax({ children }) {
  const offsetY = useParallax();
  return (
    <section className="parallax">
      <div
        className="parallax__background"
        style={{ transform: `translateY(-${offsetY * 1}px)` }}
      >
        <Section />
        <Section backgroundPurple={true} />
        <Section />
        <Section backgroundPurple={true}></Section>
        <Section />
      </div>
      <div
        className="parallax__content"
        style={{
          transform: `translateY(${offsetY * 0.7}px)`,
        }}
      >
        {children}
      </div>
    </section>
  );
}
export default Parallax;
