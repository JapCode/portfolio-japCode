/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

import useBackgroundColorState from '../hooks/UseBackgroundColorState';
import useNavigationMenuUpdater from '../hooks/UseNavigationMenuUpdater';
import useViewSectionState from '../hooks/UseViewSectionState';
import layers from '../utils/navElements';
import buttonActionMenu from '../utils/buttonActionMenu';

function Navigation() {
  const backgroundColor = useBackgroundColorState();
  const whiteColor = '#FFFFFF';
  const [toLayer, setToLayer] = useState(0);
  const viewSection = useViewSectionState();
  useNavigationMenuUpdater(toLayer);

  const handleClick = (e) => {
    buttonActionMenu(e, layers, viewSection, setToLayer);
  };
  // useEffect(() => {
  //   setCurrentView(viewSection);
  // }, [viewSection]);

  return (
    <ul
      className={`navMenu ${
        backgroundColor === whiteColor ? 'navMenu--gray' : 'navMenu--white'
      }`}
    >
      {layers.map((layer, index) => (
        <li
          key={layer.name.toString()}
          name={layer.name}
          onClick={handleClick}
          className={`navMenu__item ${
            viewSection === layer.layer ? 'navMenu__item--active' : ''
          }`}
        >
          {layer.name}
        </li>
      ))}
    </ul>
  );
}
export default Navigation;
