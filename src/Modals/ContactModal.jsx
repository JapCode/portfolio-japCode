// import './_contactModal.scss';
function ContactModal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  const stopPropagation = (e) => e.stopPropagation();
  return (
    <div className="modal" onClick={onClose}>
      {/* <button onClick={onClose} className="close-btn">
        Close
      </button> */}
      <div className="modal-content" onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
}
export default ContactModal;
