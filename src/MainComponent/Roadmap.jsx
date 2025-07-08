import React from 'react';
import "../index.css";

const S1Roadmaphero = React.lazy(() => import("../Roadmap/Roadmaphero.jsx"));
const S2RoadmapPhase = React.lazy(() => import("../Roadmap/RoadmapPhase.jsx"));

const Roadmap = () => {
  return (
    <>
      <S1Roadmaphero />
      <S2RoadmapPhase />
    </>
  );
};

export default Roadmap;
