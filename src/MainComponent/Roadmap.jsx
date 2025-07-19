import React, { Suspense } from "react";
import Layout from "../MainComponent/Layout";
import ErrorBoundary from "./ErrorBoundary";
const S1Roadmaphero = React.lazy(() => import("../Roadmap/Roadmaphero"));
const S2RoadmapPhase = React.lazy(() => import("../Roadmap/RoadmapPhase"));
const S7AmeriVideo = React.lazy(() => import("../Homepagesection/S7AmeriVideo"));

const Roadmap = () => {
  return (
    <ErrorBoundary> 
    <Layout>
      <Suspense fallback={<div>Loading Roadmap...</div>}>
        <S1Roadmaphero />
        <S2RoadmapPhase />
            <S7AmeriVideo />  
      </Suspense>
    </Layout>
    </ErrorBoundary>
  );
};

export default React.memo(Roadmap);
