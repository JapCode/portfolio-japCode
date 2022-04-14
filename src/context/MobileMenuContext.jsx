import { createContext, useState, useMemo } from 'react';

const MobileMenuStateContext = createContext();
const MobileMenuUpdaterContext = createContext();

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
