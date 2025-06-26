import  { Suspense, lazy, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import Navbar from "./MainComponent/Navbar";
import Footer from "./MainComponent/Footer";
import ScrollToTop from './MainComponent/ScrollToTop';
import Loader from './MainComponent/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import "./Style/locomotivescroll.css"


const Homepage = lazy(() => import('./MainComponent/Homepage'));



const App = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in', // Easing function
      once: true, // Run animation only once
    });
  }, []);
 

  return (
        
        <Router>
          <Headroom>
            <Navbar />
          </Headroom>
          <ScrollToTop />
          <div className="content">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Homepage />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </Router>

  );
};

export default App;
