import { useCallback, useContext, useEffect } from 'react';
import { BackgroundColorUpdaterContext } from '../context/BackgroundContext';

function useBackgroundColorUpdaterContext(BgColor) {
  const setBackgroundColor = useContext(BackgroundColorUpdaterContext);
  if (typeof setBackgroundColor === 'undefined') {
    throw new Error(
      'useBackgroundColorUpdaterContext must be used within a BackgroundColorProvider',
    );
  }
  const newColor = useEffect(() => {
    setBackgroundColor(BgColor);
  }, [BgColor]);
  return newColor;
}

export default useBackgroundColorUpdaterContext;
