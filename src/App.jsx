import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './MainComponent/ScrollToTop';
import Loader from './MainComponent/Loader';
import ErrorBoundary from './MainComponent/ErrorBoundary';

// Lazy loaded components with chunk names for better debugging

const Homepage = lazy(() => import(/* webpackChunkName: "Homepage" */ './MainComponent/Homepage'));
const Roadmap = lazy(() => import(/* webpackChunkName: "Roadmap" */ './MainComponent/Roadmap'));
const Tokenomics = lazy(() => import(/* webpackChunkName: "Tokenomics" */ './MainComponent/Tokenomics'));

const App = () => {
  return (
<ErrorBoundary>  
    <Suspense fallback={<Loader />}>
  

      <ScrollToTop />

      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
        </Routes>
      </div>

  
    </Suspense>
    </ErrorBoundary>
  );
};

export default App;
