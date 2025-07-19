import React, { Suspense } from "react";
import Layout from "../MainComponent/Layout";
import "../index.css";
import ErrorBoundary from "./ErrorBoundary.jsx";

const S1TokenHero = React.lazy(() => import("../Tokenomics/TokenHero.jsx"));
const S2TokenGrowth = React.lazy(() => import("../Tokenomics/TokenGrowth.jsx"));

const Tokenomics = () => {
  return (
    <ErrorBoundary>
     <Layout>
      <Suspense fallback={<div>Loading Tokenomics...</div>}>
        <S1TokenHero />
        <S2TokenGrowth />
      </Suspense>
    </Layout>
 </ErrorBoundary>
  );
};

export default React.memo(Tokenomics);
