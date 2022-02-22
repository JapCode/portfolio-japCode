import Landing from '../containers/Landing';
import Section from '../components/Section';
import SvgArrow from '../components/SvgArrow';
import React, { memo, useMemo } from 'react';
import react from 'react';

function Home() {
  return useMemo(() => {
    console.log('Home');

    return (
      <>
        <div className="home">
          <Section>
            <Landing />
          </Section>
          <Section backgroundPurple={true}></Section>
          <Section>{/* <Landing /> */}</Section>
        </div>
        <SvgArrow />
      </>
    );
  });
}
// const Home = React.memo(function Home() {
//   const BGcolor = useBackgroundColorState();
//   // const arrowColor = '#000';
//   const arrowColor = BGcolor;
//   console.log('BGcolor');
//   return (
//     <>
//       <div className="home">
//         <Section>
//           <Landing />
//         </Section>
//         <Section backgroundPurple={true}>
//           <Landing />
//         </Section>
//         <Section>
//           <Landing />
//         </Section>
//       </div>
//       <SvgArrow arrowColor={arrowColor} />
//     </>
//   );
// });
export default Home;
