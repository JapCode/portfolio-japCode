/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ReactPortal from '.';

// eslint-disable-next-line react/prop-types
function SkillsModal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  const stopPropagation = (e) => e.stopPropagation();
  return (
    <ReactPortal wrapperId="app--modal">
      <div className="modal" onClick={onClose}>
        <div className="modal-skill-content" onClick={stopPropagation}>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
}
export default SkillsModal;
