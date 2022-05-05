import { BrowserRouter, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import Home from '@pages/Home';
import Layout from '../containers/Layout';
import '../assets/styles/main.scss';
import { BackgroundColorProvider } from '../context/BackgroundContext';
// import OtherHome from '../pages/OtherHome';
// import useParallax from '../hooks/useParallax';
function App() {
  return (
    <BrowserRouter>
      <BackgroundColorProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/otherHome" element={<OtherHome />} /> */}
            {/* <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NoFound />} /> */}
          </Routes>
        </Layout>
      </BackgroundColorProvider>
    </BrowserRouter>
  );
}
export default App;
