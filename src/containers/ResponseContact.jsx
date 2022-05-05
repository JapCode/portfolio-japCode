import ILoveYou from '../components/ILoveYou';
import SvgArrow from '../components/SvgArrow';

function ResponseContact(prop) {
  const { onClose } = prop;
  return (
    <div className="response">
      <h3 className="response__text">
        Gracias por tu <br /> mensaje
      </h3>
      <figure className="response__img">
        <ILoveYou />
      </figure>
      <h3 className="response__text">Te quiero mucho</h3>
      <button type="button" className="response__btn" onClick={onClose}>
        <span>Go Back</span>
        <SvgArrow />
      </button>
    </div>
  );
}
export default ResponseContact;
