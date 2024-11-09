// components/HeroBannerTitle.jsx
import React, { memo } from "react";

export const HeroBannerTitle = memo(() => (
  <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
    <span className="text-blue-300">ELITE</span> LYON TAXI
  </h1>
));

HeroBannerTitle.displayName = "HeroBannerTitle";
