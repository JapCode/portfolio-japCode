import Section from '../components/Section';
import useParallax from '../hooks/useParallax';

// eslint-disable-next-line react/prop-types
function Parallax({ children }) {
  const offsetY = useParallax();
  return (
    <section className="parallax">
      <div
        className="parallax__background"
        style={{ transform: `translateY(-${offsetY * 1}px)` }}
      >
        <Section />
        <Section backgroundPurple />
        <Section />
        <Section backgroundPurple />
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
