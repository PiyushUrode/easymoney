// pages/Homepage.jsx
import React, { Suspense } from "react";
import Layout from "../MainComponent/Layout.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
// Lazy loaded sections
const S1Hero = React.lazy(() => import("../Homepagesection/S1Hero"));
const S2About = React.lazy(() => import("../Homepagesection/S2About"));
const S3Usecase = React.lazy(() => import("../Homepagesection/S3Usecase"));
const S5ContractAddress = React.lazy(() => import("../Homepagesection/S5ContractAddress"));
const S6Faq = React.lazy(() => import("../Homepagesection/S6Faq"));
const S7AmeriVideo = React.lazy(() => import("../Homepagesection/S7AmeriVideo"));
const S8TrustedSignal = React.lazy(() => import("../Homepagesection/S8TrustedSignal"));

const Homepage = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div id="load" className="flex justify-center items-center h-screen bg-black text-white text-4xl space-x-1 animate-pulse">
            {["A", "M", "E", "R", "I", "C", "O" , "I", "N"].map((char, index) => (
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
        <S8TrustedSignal />
        <S5ContractAddress />
        <S6Faq />
        <ErrorBoundary>  

        <S7AmeriVideo />
        </ErrorBoundary>
      </Suspense>
    </Layout>
  );
};

export default React.memo(Homepage);
