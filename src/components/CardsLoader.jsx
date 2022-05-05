import ContentLoader from 'react-content-loader';

function CardsLoader(props) {
  return (
    <ContentLoader
      speed={2}
      width={933}
      height={416}
      viewBox="0 0 933 416"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="-2" y="80" rx="0" ry="0" width="933" height="416" />
    </ContentLoader>
  );
}
export default CardsLoader;
