function SecondaryButton(props) {
  // eslint-disable-next-line react/prop-types
  const { children, btnAction, btnType, secondaryStyle } = props;
  return (
    <button
      className={`btnSecondary ${
        secondaryStyle ? 'btnSecondary--first' : 'btnSecondary--secondary'
      } `}
      type={btnType || 'button'}
      onClick={btnAction}
    >
      <div className="btnSecondary--pulse" />
      <span
        className={`btnSecondary__content ${
          secondaryStyle
            ? 'btnSecondary__content--secondary'
            : 'btnSecondary__content--first'
        } `}
      >
        {children}
      </span>
    </button>
  );
}
export default SecondaryButton;
