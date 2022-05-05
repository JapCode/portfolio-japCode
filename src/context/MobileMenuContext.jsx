import { createContext, useState, useMemo } from 'react';

const MobileMenuStateContext = createContext();
const MobileMenuUpdaterContext = createContext();

// eslint-disable-next-line react/prop-types
function MobileMenuProvider({ children }) {
  const [menuState, setMenuState] = useState(false);
  return (
    <MobileMenuStateContext.Provider
      value={useMemo(() => menuState, [menuState])}
    >
      <MobileMenuUpdaterContext.Provider
        value={useMemo(() => setMenuState, [setMenuState])}
      >
        {children}
      </MobileMenuUpdaterContext.Provider>
    </MobileMenuStateContext.Provider>
  );
}
export { MobileMenuStateContext, MobileMenuUpdaterContext, MobileMenuProvider };
