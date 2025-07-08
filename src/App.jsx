import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import Navbar from "./MainComponent/Navbar";
import Footer from "./MainComponent/Footer";
import ScrollToTop from './MainComponent/ScrollToTop';
import Loader from './MainComponent/Loader';


const Homepage = lazy(() => import('./MainComponent/Homepage'));
const Roadmap = lazy(() => import('./MainComponent/Roadmap'));
const Tokenomics = lazy(() => import('./MainComponent/Tokenomics'));

const App = () => {
  // Removed unused location variable

  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <ScrollToTop />
      <div className="content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default App;
