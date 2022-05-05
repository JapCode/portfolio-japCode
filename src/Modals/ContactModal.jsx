/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import ReactPortal from '.';

// import './_contactModal.scss';
// eslint-disable-next-line react/prop-types
function ContactModal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  const stopPropagation = (e) => e.stopPropagation();
  return (
    <ReactPortal wrapperId="app--modal">
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={stopPropagation}>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
}
export default ContactModal;
