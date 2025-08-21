import React, { Suspense } from "react";
import Layout from "../MainComponent/Layout";
import "../index.css";
import ErrorBoundary from "./ErrorBoundary.jsx";

const Presale = React.lazy(() => import("../MainComponent/Presale.jsx"));

const MainPresale = () => {
  return (
    <ErrorBoundary>
     <Layout>
      <Suspense fallback={<div>Loading Tokenomics...</div>}>
        <Presale />
       </Suspense>
    </Layout>
 </ErrorBoundary>
  );
};

export default React.memo(MainPresale);

