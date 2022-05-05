// import Footer from '../components/Footer';
import Header from './Header';
import { MobileMenuProvider } from '../context/MobileMenuContext';
import { ViewSectionProvider } from '../context/ViewSection';
import { NavigationMenuProvider } from '../context/NavigationMenuContext';

function Layout(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <>
      <ViewSectionProvider>
        <NavigationMenuProvider>
          <MobileMenuProvider>
            <Header />
          </MobileMenuProvider>
          {children}

          {/* <Footer /> */}
        </NavigationMenuProvider>
      </ViewSectionProvider>
    </>
  );
}
export default Layout;
