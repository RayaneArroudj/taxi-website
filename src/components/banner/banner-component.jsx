import React from "react";
import { guaranteeList } from "../../../lib/data";

export default function BannerComponent() {
  // Calculer la largeur totale du contenu
  const contentWidth = guaranteeList.length * 200; // Supposons que chaque élément a une largeur de 200px

  return (
    <section className="bg-gradient-to-br from-blue-300 to-blue-500 overflow-hidden py-6">
      <div
        className="animate-scroll flex"
        style={{
          width: `${contentWidth * 2}px`,
        }}
      >
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex items-center"
            style={{ width: `${contentWidth}px` }}
          >
            {guaranteeList.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center text-white mx-6"
                style={{ width: "auto" }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium tracking-wide text-center">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}