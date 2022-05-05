import ContentLoader from 'react-content-loader';

function CardsLoaderMobile(props) {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="60" rx="2" ry="2" width="285" height="375" />
      <rect x="1" y="3" rx="0" ry="0" width="129" height="20" />
      <rect x="0" y="30" rx="0" ry="0" width="182" height="20" />
    </ContentLoader>
  );
}
export default CardsLoaderMobile;
