"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReservationSection from "../form-reservation/reservation-section";

const lightImage = "/lyon.jpg";
const darkImage = "/lyoncity.jpg";

const HeroBanner = () => {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme = theme === "system" ? systemTheme : theme;
    setCurrentTheme(currentTheme);

    // Préchargement optimisé des images
    const preloadImage = (src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    };

    preloadImage(lightImage);
    preloadImage(darkImage);

    return () => {
      const links = document.head.querySelectorAll(
        'link[rel="preload"][as="image"]'
      );
      links.forEach((link) => document.head.removeChild(link));
    };
  }, [theme, systemTheme]);

  if (!mounted) return null;

  const imageSrc = currentTheme === "dark" ? darkImage : lightImage;

  return (
    <div className="relative h-screen w-full">
      <Image
        src={imageSrc}
        fill
        alt="City of Lyon"
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <div className="text-center xs:mb-8">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            <span className="text-blue-300">ELITE</span> LYON TAXI
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium tracking-wide uppercase">
            SPÉCIALISTE DU TRANSPORT VTC TAXI
          </p>
          <p className="text-lg md:text-xl pb-2 font-light tracking-wide">
            Lyon - Rhône-Alpes - France Entière
          </p>
        </div>
        <div>
          <ReservationSection />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;