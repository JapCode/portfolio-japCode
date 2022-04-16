import { useState } from 'react';
import useMobileMenuUpdater from '../hooks/UseMobileMenuUpdater';
import CloseArrows from '../components/CloseArrows';
import DotsMenu from '../components/DotsMenu';
import MenuMobile from '../components/MenuMobile';
import useWindowSize from '../hooks/UseWindowSize';
import Navigation from '../components/Navigation';

function Header() {
  const window = useWindowSize();
  const menuUpdate = useMobileMenuUpdater();
  const [isMenuMobileActive, setIsMenuMobileActive] = useState(false);
  const handleClick = () => {
    setIsMenuMobileActive(!isMenuMobileActive);
  };
  return (
    <nav className="navigation">
      {window.width > 900 ? (
        <Navigation />
      ) : (
        <>
          <button
            className="navigation__button"
            type="button"
            onClick={menuUpdate}
          >
            <DotsMenu />
            <CloseArrows buttonState={isMenuMobileActive} />
          </button>
          <MenuMobile />
        </>
      )}
    </nav>
  );
}

export default Header;
