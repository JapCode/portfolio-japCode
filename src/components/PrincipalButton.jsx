function PrincipalButton(props) {
  // eslint-disable-next-line react/prop-types
  const { children, btnAction } = props;
  return (
    <button className="btn" type="button" onClick={btnAction}>
      <div className="btn--pulse" />
      <span className="btn__content">{children}</span>
    </button>
  );
}
export default PrincipalButton;
