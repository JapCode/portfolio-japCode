import { useContext } from 'react';
import { BackgroundColorStateContext } from '../context/BackgroundContext';

// const BackgroundColorStateContext = createContext();
function useBackgroundColorState() {
  const backgroundState = useContext(BackgroundColorStateContext);
  if (typeof backgroundState === 'undefined') {
    throw new Error(
      'useBackgroundColorState must be used within a BackgroundColorProvider',
    );
  }
  return backgroundState;
}
export default useBackgroundColorState;
