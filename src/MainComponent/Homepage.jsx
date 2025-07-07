import React, { Suspense } from 'react';
import "../index.css"

// Lazily import components
// const S1Hero = React.lazy(() => import("../Homepagesection/S1Hero.jsx"));
// const S2About = React.lazy(() => import("../Homepagesection/S2About.jsx"));
const S3Usecase = React.lazy(() => import ("../Homepagesection/S3Usecase.jsx"));
// const S4Partners = React.lazy(() => import ("../Homepagesection/S4Partners.jsx"));
// const S5ContractAddress = React.lazy(() => import ("../Homepagesection/S5ContractAddress.jsx"));
// const S6Faq = React.lazy(() => import ("../Homepagesection/S6Faq.jsx"));

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

{/* <S1Hero/>
<S2About /> */}
 <S3Usecase />
{/* <S4Partners/>
<S5ContractAddress/>
<S6Faq/> */}
    </Suspense>
  );
};

export default Homepage;
