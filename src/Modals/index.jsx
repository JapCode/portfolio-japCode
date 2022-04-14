import { createPortal } from 'react-dom';
import ContactModal from './ContactModal';

// const container = document.getElementById('app--modal');
// createPortal(
//   <ContactModal onClose={onClose}>{children}</ContactModal>,
//   container,
// );

import { createPortal } from 'react-dom';
import { useLayoutEffect, useState } from 'react';

function ReactPortal({ children, wrapperId = 'react-portal-wrapper' }) {
  const [wrapperElement, setWrapperElement] = useState(null);
  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}
export default ReactPortal;
