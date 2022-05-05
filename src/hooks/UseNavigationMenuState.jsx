import { useContext } from 'react';
import { NavigationMenuContext } from '../context/NavigationMenuContext';

function useNavigationMenuState() {
  const navigationMenuState = useContext(NavigationMenuContext);
  if (typeof navigationMenuState === 'undefined') {
    throw new Error(
      'useNavigationMenuState must be used within a NavigationMenuProvider',
    );
  }
  return navigationMenuState;
}
export default useNavigationMenuState;
