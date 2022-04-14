import { useContext } from 'react';
import { MobileMenuStateContext } from '../context/MobileMenuContext';

function useMobileMenuState() {
  const mobileMenuState = useContext(MobileMenuStateContext);
  if (typeof mobileMenuState === 'undefined') {
    throw new Error(
      'UseMobileMenuState must be used within a MobileMenuProvider',
    );
  }
  return mobileMenuState;
}
export default useMobileMenuState;
