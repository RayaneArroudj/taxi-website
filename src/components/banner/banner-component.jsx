import React from "react";
import { guaranteeList } from "../../../lib/data";

export default function BannerComponent() {
  // Calculer la largeur totale du contenu
  const contentWidth = guaranteeList.length * 200; // Supposons que chaque élément a une largeur de 200px

  return (
    <section className="bg-gradient-to-br from-blue-300 to-blue-500 overflow-hidden py-4">
      <div 
        className="animate-scroll flex"
        style={{
          width: `${contentWidth * 2}px`, // Double de la largeur du contenu
        }}
      >
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center" style={{ width: `${contentWidth}px` }}>
            {guaranteeList.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center text-white mx-6"
                style={{ width: '200px' }} // Largeur fixe pour chaque élément
              >
                <div className="text-3xl mb-1">{item.icon}</div>
                <div className="text-sm font-medium text-center">{item.name}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}