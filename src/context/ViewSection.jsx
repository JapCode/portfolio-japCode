import { createContext, useState, useMemo } from 'react';

const ViewSectionContext = createContext();
const ViewSectionUpdaterContext = createContext();

// eslint-disable-next-line react/prop-types
function ViewSectionProvider({ children }) {
  const [viewSectionState, setViewSectionState] = useState(0);
  return (
    <ViewSectionContext.Provider
      value={useMemo(() => viewSectionState, [viewSectionState])}
    >
      <ViewSectionUpdaterContext.Provider
        value={useMemo(() => setViewSectionState, [setViewSectionState])}
      >
        {children}
      </ViewSectionUpdaterContext.Provider>
    </ViewSectionContext.Provider>
  );
}
export { ViewSectionContext, ViewSectionUpdaterContext, ViewSectionProvider };
