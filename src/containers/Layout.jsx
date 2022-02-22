import Footer from '../components/Footer';
import Header from '../components/Header';

function Layout(props) {
  const dotsColor = '#5A189A';
  console.log('Layout');
  return (
    <>
      <Header dotsColor={dotsColor} />
      {props.children}
      {/* <Footer arrowColor={arrowColor} /> */}
    </>
  );
}
export default Layout;
