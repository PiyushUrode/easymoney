import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './MainComponent/ScrollToTop';
import Loader from './MainComponent/Loader';
import ErrorBoundary from './MainComponent/ErrorBoundary';

// Lazy loaded components with chunk names for better debugging

const Homepage = lazy(() => import( './MainComponent/Homepage'));
const Commingsoon = lazy(() => import( './MainComponent/commingsoon'));


const App = () => {
  return (
<ErrorBoundary>  
    <Suspense fallback={<Loader />}>
  

      <ScrollToTop />

      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/commingsoon" element={<Commingsoon />} />

        </Routes>
      </div>

  
    </Suspense>
    </ErrorBoundary>
  );
};

export default App;
