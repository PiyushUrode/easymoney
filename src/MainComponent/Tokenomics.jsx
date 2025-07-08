import React from 'react';
import "../index.css";

const S1TokenHero = React.lazy(() => import("../Tokenomics/TokenHero.jsx"));
const S2TokenGrowth = React.lazy(() => import("../Tokenomics/TokenGrowth.jsx"));

const Tokenomics = () => {
  return (
    <>
      <S1TokenHero />
      <S2TokenGrowth />
    </>
  );
};

export default Tokenomics;
