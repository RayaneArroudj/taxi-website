// components/services/components/ServicesHeader.jsx
import React from "react";

export const ServicesHeader = () => (
  <div className="w-full" style={{ 
    height: '160px',
    position: 'relative',
    contain: 'layout paint size'
  }}>
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold tracking-tight mb-6 h-[40px] flex items-center">
        Nos Services
      </h2>
      <p className="text-muted-foreground font-normal text-base tracking-wide text-center max-w-2xl" style={{ height: '80px' }}>
        Société de Taxi basée sur Lyon, nous assurons tous vos transports
        privés, professionnels ou médicaux. Contactez-nous, et un chauffeur de
        la compagnie vous sera envoyé afin de vous mener à votre destination.
      </p>
    </div>
  </div>
);



