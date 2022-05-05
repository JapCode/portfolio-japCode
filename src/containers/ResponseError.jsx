import SvgArrow from '../components/SvgArrow';

function ResponseError(prop) {
  const { onClose } = prop;
  return (
    <div className="responseError">
      <h3 className="responseError__text">Oops! Something went wrong!</h3>
      <button type="button" className="responseError__btn" onClick={onClose}>
        <span>Go Back</span>
        <SvgArrow />
      </button>
    </div>
  );
}
export default ResponseError;
