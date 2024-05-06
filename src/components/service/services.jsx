import Image from "next/image";
import React from "react";
import { servicesList } from "../../../lib/data";
import SectionTitle from "../utils-components/section-title";

export default function Services() {
  return (
    <div className="flex flex-col items-center gap-5 mb-10">
      <SectionTitle>Nos Services</SectionTitle>
      <div className="text-center m-5 lg:w-2/4">
        Société de Taxi basé sur Lyon, Nous assurons tous vos transports privés,
        profesionels ou médicaux. Contactez-nous, et un chauffeur de la
        compagnie vous sera envoyé afin de vous mener à votre destination.
      </div>
      <div
        className="flex flex-col gap-5 lg:flex-row lg:gap-10
      "
      >
        {servicesList.map((item, index) => {
          return (
            <div
              key={index}
              className="relative rounded-lg shadow-lg p-4 bg-white text-gray-700 h-72 w-80"
            >
              <div className="flex flex-col items-center p-5 pt-5 bg-blue-100 rounded-2xl relative gap-4 h-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-center items-center gap-5">
                    <span>{item.icon}</span>
                    <h3 className="w-3/4 font-bold">{item.name}</h3>
                  </div>
                  <Image
                    className="absolute top-0 right-0 mt-2 mr-2 rounded-xl"
                    src="/logo.jpg"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <ul>
                    {item.elements.map((element, i) => (
                      <React.Fragment key={i}>
                        <li className="mt-3 flex items-center gap-2">
                          <div className="bg-green-500 rounded-full p-1 mr-2">
                            {item.arrow}
                          </div>
                          <div>{element}</div>
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
