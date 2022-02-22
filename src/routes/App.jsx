import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Layout from '../containers/Layout';
import '../assets/styles/main.scss';
import { BackgroundColorProvider } from '../context/BackgroundContext';
function App() {
  return (
    <BrowserRouter>
      <BackgroundColorProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NoFound />} /> */}
          </Routes>
        </Layout>
      </BackgroundColorProvider>
    </BrowserRouter>
  );
}
export default App;
