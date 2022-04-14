// import Footer from '../components/Footer';
import Footer from '../components/Footer';
import Header from './Header';
import { MobileMenuProvider } from '../context/MobileMenuContext';

function Layout(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <>
      <MobileMenuProvider>
        <Header />
      </MobileMenuProvider>
      {children}
      {/* <Footer /> */}
    </>
  );
}
export default Layout;
