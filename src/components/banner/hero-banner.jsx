"use client";

import { useThemeImage } from "@/hooks/useThemeImage";
import dynamic from "next/dynamic";
import React, { memo, Suspense } from "react";
import { HeroBannerImage } from "./HeroBannerImage";

// Constantes pour éviter les recalculs
const IMAGES = {
  light: "/lyon.avif",
  dark: "/lyoncity.avif",
};

const HERO_DIMENSIONS = {
  width: 1920,
  height: 1080,
};

// Lazy load du formulaire avec un poids léger
const ReservationSection = dynamic(
  () =>
    import("../form-reservation/reservation-section").then(
      (mod) => mod.ReservationSection
    ),
  {
    loading: () => (
      <div className="h-[300px] w-full animate-pulse bg-gray-200/20" />
    ),
    ssr: false, // Désactivé pour réduire le JS initial
  }
);

// Composant du contenu héro extrait pour éviter les re-renders
const HeroContent = memo(() => (
  <div
    className="text-center xs:mb-8"
    style={{ containIntrinsicSize: "0 500px" }}
  >
    <h1
      className="text-4xl md:text-6xl font-black tracking-tight mb-4"
      style={{ containIntrinsicSize: "0 80px" }}
    >
      <span className="text-blue-300">ELITE</span> LYON TAXI
    </h1>
    <p
      className="text-xl md:text-2xl mb-4 font-medium tracking-wide uppercase"
      style={{ containIntrinsicSize: "0 40px" }}
    >
      SPÉCIALISTE DU TRANSPORT VTC TAXI
    </p>
    <p
      className="text-lg md:text-xl pb-2 font-light tracking-wide"
      style={{ containIntrinsicSize: "0 30px" }}
    >
      Lyon - Rhône-Alpes - France Entière
    </p>
  </div>
));

HeroContent.displayName = "HeroContent";

// HeroBanner.jsx
const HeroBanner = () => {
  const { imageSrc, mounted } = useThemeImage(IMAGES);

  if (!mounted) {
    return (
      <div className="relative h-screen w-full bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 animate-pulse bg-gray-800 rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        contain: "layout paint style",
      }}
    >
      <HeroBannerImage src={imageSrc} />
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-white"
        style={{ contain: "layout paint style" }}
      >
        <div className=" inset-0 flex flex-col justify-center items-center text-white">
          <div className="text-center xs:mb-8">
            <h1 className="text-4xl md:text-4xl font-black">
              <span className="text-blue-300">ELITE</span> LYON TAXI
            </h1>
            <p className="text-xl md:text-2xl font-medium tracking-wide uppercase">
              SPÉCIALISTE DU TRANSPORT VTC TAXI
            </p>
            <p className="text-lg md:text-xl pb-2 font-light tracking-wide">
              Lyon - Rhône-Alpes - France Entière
            </p>
          </div>
        </div>
        <div>
          <Suspense
            fallback={
              <div className="h-[300px] w-full animate-pulse bg-gray-200/20" />
            }
          >
            <ReservationSection />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroBanner);
