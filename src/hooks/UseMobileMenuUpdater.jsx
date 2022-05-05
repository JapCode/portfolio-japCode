import { useCallback, useContext } from 'react';
import { MobileMenuUpdaterContext } from '../context/MobileMenuContext';

function useMobileMenuUpdater() {
  const setMenuState = useContext(MobileMenuUpdaterContext);
  if (typeof setMenuState === 'undefined') {
    throw new Error(
      'useMobileMenuUpdater must be used within a MobileMenuProvider',
    );
  }
  const newMenuState = useCallback(
    () => setMenuState((prevState) => !prevState),
    [setMenuState],
  );
  return newMenuState;
}
export default useMobileMenuUpdater;
