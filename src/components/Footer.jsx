function Footer(props) {
  const { arrowColor } = props;
  return (
    <svg
      width="73"
      height="73"
      viewBox="0 0 73 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.5228 33.2727L36.5 48.2985L21.4772 33.2727L15.0228 39.7271L36.5 61.2013L57.9772 39.7271L51.5228 33.2727Z"
        fill={arrowColor}
      />
      <path
        d="M51.5228 11.9812L36.5 27.007L21.4772 11.9812L15.0228 18.4356L36.5 39.9098L57.9772 18.4356L51.5228 11.9812Z"
        fill={arrowColor}
      />
    </svg>
  );
}
export default Footer;
