function Header(props) {
  const { dotsColor } = props;
  return (
    <nav className="navigation">
      <svg
        className="navigation__menu"
        width="30"
        height="30"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.001 7.80005C9.71195 7.80005 9.42574 7.85698 9.1587 7.96759C8.89166 8.0782 8.64903 8.24033 8.44465 8.44471C8.24026 8.64909 8.07814 8.89172 7.96753 9.15876C7.85692 9.4258 7.79999 9.71201 7.79999 10.001C7.79999 10.2901 7.85692 10.5763 7.96753 10.8433C8.07814 11.1104 8.24026 11.353 8.44465 11.5574C8.64903 11.7618 8.89166 11.9239 9.1587 12.0345C9.42574 12.1451 9.71195 12.202 10.001 12.202C10.5847 12.2019 11.1445 11.9699 11.5572 11.557C11.9699 11.1442 12.2016 10.5843 12.2015 10.0005C12.2014 9.41681 11.9693 8.85703 11.5565 8.44435C11.1436 8.03168 10.5837 7.79992 9.99999 7.80005H10.001ZM10.001 5.20005C10.2899 5.19992 10.5759 5.14288 10.8428 5.0322C11.1097 4.92152 11.3521 4.75936 11.5563 4.55498C11.7605 4.3506 11.9225 4.108 12.0329 3.84103C12.1433 3.57406 12.2001 3.28796 12.2 2.99905C12.1999 2.71014 12.1428 2.42409 12.0321 2.15722C11.9215 1.89036 11.7593 1.6479 11.5549 1.44371C11.3505 1.23951 11.1079 1.07757 10.841 0.967131C10.574 0.856692 10.2879 0.799918 9.99899 0.800049C9.41551 0.800314 8.85604 1.03235 8.44365 1.44512C8.03125 1.85789 7.79972 2.41757 7.79999 3.00105C7.80025 3.58453 8.03229 4.144 8.44506 4.55639C8.85783 4.96878 9.41751 5.20031 10.001 5.20005V5.20005ZM10.001 14.8C9.41725 14.8 8.85741 15.0319 8.44465 15.4447C8.03188 15.8575 7.79999 16.4173 7.79999 17.001C7.79999 17.5848 8.03188 18.1446 8.44465 18.5574C8.85741 18.9702 9.41725 19.202 10.001 19.202C10.5847 19.202 11.1446 18.9702 11.5573 18.5574C11.9701 18.1446 12.202 17.5848 12.202 17.001C12.202 16.4173 11.9701 15.8575 11.5573 15.4447C11.1446 15.0319 10.5847 14.8 10.001 14.8V14.8Z"
          fill={dotsColor}
        />
      </svg>
    </nav>
  );
}

export default Header;
