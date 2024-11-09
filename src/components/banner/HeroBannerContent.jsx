// components/HeroBannerContent.jsx
import React, { memo } from "react";

export const HeroBannerContent = memo(({ children }) => (
  <div
    className="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
    style={{ willChange: "transform" }}
  >
    <div className="text-center xs:mb-8">
      {children}
      <p className="text-xl md:text-2xl mb-4 font-medium tracking-wide uppercase">
        SPÉCIALISTE DU TRANSPORT VTC TAXI
      </p>
      <p className="text-lg md:text-xl pb-2 font-light tracking-wide">
        Lyon - Rhône-Alpes - France Entière
      </p>
    </div>
  </div>
));

HeroBannerContent.displayName = "HeroBannerContent";
