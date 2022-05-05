import { useContext, useEffect } from 'react';
import { NavigationMenuUpdaterContext } from '../context/NavigationMenuContext';

function useNavigationMenuUpdater(newValue) {
  const setNavigationMenuState = useContext(NavigationMenuUpdaterContext);
  if (typeof setNavigationMenuState === 'undefined') {
    throw new Error(
      'useNavigationMenuUpdater must be used within a NavigationMenuProvider',
    );
  }
  const newMenuState = useEffect(() => {
    // eslint-disable-next-line no-param-reassign
    setNavigationMenuState((preValue) => (preValue = newValue));
  }, [newValue, setNavigationMenuState]);
  return newMenuState;
}
export default useNavigationMenuUpdater;
