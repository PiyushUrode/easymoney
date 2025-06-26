import React, { Suspense } from 'react';
import "../index.css"

// Lazily import components
const S1Hero = React.lazy(() => import("../Homepagesection/S1Hero.jsx"));
const S2Keyfeature = React.lazy(() => import("../Homepagesection/S2Keyfeature.jsx"));
const S3Usecase = React.lazy(() => import("../Homepagesection/S3Usecase.jsx"));
const S4About = React.lazy(() => import("../Homepagesection/S4About.jsx"));
const S5Service = React.lazy(() => import("../Homepagesection/S5Service.jsx"));
const S6Merchant = React.lazy(() => import("../Homepagesection/S6Merchant.jsx"));
const S7DeveloperApi = React.lazy(() => import("../Homepagesection/S7DeveloperApi.jsx"));
const S8ContactForm = React.lazy(() => import("../Homepagesection/S8ContactForm.jsx"));


const Homepage = () => {
  return (
    <Suspense fallback={<div id="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div>}>

<S1Hero/>
<S2Keyfeature />
<S3Usecase />
<S4About />
<S5Service />
<S6Merchant />
<S7DeveloperApi   />
<S8ContactForm    />
    </Suspense>
  );
};

export default Homepage;
