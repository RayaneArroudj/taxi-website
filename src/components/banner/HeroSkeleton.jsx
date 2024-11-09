// components/HeroBanner/components/HeroSkeleton.jsx
import React, { memo } from "react";

export const HeroSkeleton = memo(() => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      {/* Overlay avec effet de pulse */}
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />

      {/* Contenu du squelette */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
        {/* Titre */}
        <div className="space-y-6 text-center">
          {/* Logo/Titre principal */}
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="h-8 w-24 bg-gray-700 rounded animate-pulse" />
            <div className="h-8 w-32 bg-gray-700 rounded animate-pulse" />
          </div>

          {/* Sous-titre */}
          <div className="mx-auto">
            <div className="h-4 w-64 bg-gray-700 rounded animate-pulse" />
          </div>

          {/* Texte de localisation */}
          <div className="mx-auto">
            <div className="h-3 w-48 bg-gray-700 rounded animate-pulse" />
          </div>
        </div>

        {/* Zone du formulaire */}
        <div className="mt-8 w-full max-w-2xl">
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
            <div className="space-y-4">
              {/* Champs du formulaire */}
              {[...Array(3)].map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="h-3 w-24 bg-gray-700 rounded animate-pulse" />
                  <div className="h-10 w-full bg-gray-700 rounded animate-pulse" />
                </div>
              ))}

              {/* Bouton */}
              <div className="mt-6">
                <div className="h-10 w-full bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

HeroSkeleton.displayName = "HeroSkeleton";
