import { useContext } from 'react';
import { ViewSectionContext } from '../context/ViewSection';

function useViewSectionState() {
  const viewSectionState = useContext(ViewSectionContext);
  if (typeof viewSectionState === 'undefined') {
    throw new Error(
      'UseViewSectionState must be used within a ViewSectionProvider',
    );
  }
  return viewSectionState;
}
export default useViewSectionState;
