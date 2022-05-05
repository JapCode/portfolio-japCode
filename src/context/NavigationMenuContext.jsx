import { createContext, useMemo, useState } from 'react';

const NavigationMenuContext = createContext();
const NavigationMenuUpdaterContext = createContext();

// eslint-disable-next-line react/prop-types
function NavigationMenuProvider({ children }) {
  const [navigationMenuState, setNavigationMenuState] = useState(0);
  return (
    <NavigationMenuContext.Provider
      value={useMemo(() => navigationMenuState, [navigationMenuState])}
    >
      <NavigationMenuUpdaterContext.Provider
        value={useMemo(() => setNavigationMenuState, [setNavigationMenuState])}
      >
        {children}
      </NavigationMenuUpdaterContext.Provider>
    </NavigationMenuContext.Provider>
  );
}
export {
  NavigationMenuContext,
  NavigationMenuUpdaterContext,
  NavigationMenuProvider,
};
