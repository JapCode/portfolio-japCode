import { useContext, useEffect } from 'react';
import { ViewSectionUpdaterContext } from '../context/ViewSection';

function useViewSectionUpdater(layer) {
  const setViewSectionState = useContext(ViewSectionUpdaterContext);
  if (typeof setViewSectionState === 'undefined') {
    throw new Error(
      'useViewSectionUpdater must be used within a ViewSectionProvider',
    );
  }

  const newViewSectionState = useEffect(() => {
    setViewSectionState(layer);
  }, [layer, setViewSectionState]);
  return newViewSectionState;
}
export default useViewSectionUpdater;
