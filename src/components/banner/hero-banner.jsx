// components/HeroBanner/index.jsx
"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ReservationForms } from "../ReservationForms";
import { motion } from "framer-motion";

const lightImage = "/lyon.avif";
const darkImage = "/lyoncity.avif";

const MobileBackground = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fond simple noir ou blanc selon le thème */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-black' 
          : 'bg-white'
      }`}>
        {/* Bulles animées bleues */}
        <motion.div
          className="absolute -left-20 -top-20 w-56 h-56 rounded-full bg-blue-300 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-10 top-40 w-72 h-72 rounded-full bg-blue-300 opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [-20, 20, -20],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-20 bottom-40 w-64 h-64 rounded-full bg-blue-300 opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            x: [20, -20, 20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-blue-300 opacity-10"
          animate={{
            scale: [1.2, 0.8, 1.2],
            x: [-40, 0, -40],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

const HeroBanner = () => {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const activeTheme = theme === "system" ? systemTheme : theme;
    setCurrentTheme(activeTheme);
  }, [theme, systemTheme]);

  if (!mounted) return null;

  const imageSrc = currentTheme === "dark" ? darkImage : lightImage;

  return (
    <div className="relative h-screen w-full">
      {/* Image de fond uniquement sur desktop */}
      <div className="hidden md:block">
        <Image
          src={imageSrc}
          fill
          alt="City of Lyon"
          className="object-cover object-center"
          priority
          loading="eager"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Arrière-plan animé pour mobile */}
      <div className="block md:hidden">
        <MobileBackground />
      </div>

      {/* Contenu */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white dark:text-white p-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center xs:mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-blue-300"
            >
              ELITE
            </motion.span>{" "}
            <motion.span
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`${currentTheme === 'dark' ? 'text-white' : 'text-black md:text-white'}`}
            >
              LYON TAXI
            </motion.span>
          </h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`text-xl md:text-2xl mb-4 font-medium tracking-wide uppercase ${
              currentTheme === 'dark' ? 'text-white' : 'text-black md:text-white'
            }`}
          >
            SPÉCIALISTE DU TRANSPORT VTC TAXI
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className={`text-lg md:text-xl pb-2 font-light tracking-wide ${
              currentTheme === 'dark' ? 'text-white' : 'text-black md:text-white'
            }`}
          >
            Lyon - Rhône-Alpes - France Entière
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="w-full max-w-md"
        >
          <ReservationForms />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;