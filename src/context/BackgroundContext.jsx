import { createContext, useMemo, useState } from 'react';

const BackgroundColorStateContext = createContext();
const BackgroundColorUpdaterContext = createContext();

function BackgroundColorProvider({ children }) {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  return (
    <BackgroundColorStateContext.Provider
      value={useMemo(() => backgroundColor, [backgroundColor])}
    >
      <BackgroundColorUpdaterContext.Provider
        value={useMemo(() => setBackgroundColor, [setBackgroundColor])}
      >
        {children}
      </BackgroundColorUpdaterContext.Provider>
    </BackgroundColorStateContext.Provider>
  );
}
// export default BackgroundColorProvider
export {
  BackgroundColorStateContext,
  BackgroundColorUpdaterContext,
  BackgroundColorProvider,
};
