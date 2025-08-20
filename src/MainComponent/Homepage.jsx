
import React, { Suspense } from "react";
import Layout from "../MainComponent/Layout.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";


const S1Hero = React.lazy(() => import("../Homepagesection/S1Hero"));
const S2About = React.lazy(() => import("../Homepagesection/S2About"));
const S3Usecase = React.lazy(() => import("../Homepagesection/S3Usecase"));
const S5ContractAddress = React.lazy(() => import("../Homepagesection/S5ContractAddress"));
const S6Faq = React.lazy(() => import("../Homepagesection/S6Faq"));
const S4Partners = React.lazy(()=> import("../Homepagesection/S4Partners.jsx"));
const S9Tokenomics = React.lazy(()=> import("../Homepagesection/S9Tokenomics.jsx"));
const S10Roadmap = React.lazy(() => import("../Homepagesection/RoadmapPhase.jsx"));





const Homepage = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div id="load" className="flex justify-center items-center h-screen bg-black text-white text-4xl space-x-1 animate-pulse">
            {["E", "A", "S", "Y", "M", "O", "N" , "E", "Y"].map((char, index) => (
              <div key={index}>{char}</div>
            ))}
          </div>
        }
      >

          <S1Hero />
        <S2About />

        <ErrorBoundary>  


        <S3Usecase />
        </ErrorBoundary>
<S9Tokenomics/>
        <ErrorBoundary>  


<S10Roadmap/>
        </ErrorBoundary>
        <S4Partners/>
        <S5ContractAddress />

        <S6Faq />

      </Suspense>
    </Layout>
  );
};

export default React.memo(Homepage);
