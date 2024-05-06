import React from "react";
import { BiSolidTimer } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaMedal, FaPlane, FaTaxi } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";

export const guaranteeList = [
  {
    name: "La qualité du service",
    icon: React.createElement(FaMedal),
  },
  {
    name: "Disponible 7/7 et 24/24",
    icon: React.createElement(BiSolidTimer),
  },
  { name: "Conventionné CPAM", icon: React.createElement(GrValidate) },
  { name: "Ponctualité et confort", icon: React.createElement(FaTaxi) },
  { name: "Transport aéroports et gares", icon: React.createElement(FaPlane) },
];

export const servicesList = [
  {
    name: "Un service de qualité",
    icon: React.createElement(FaMedal),
    arrow: React.createElement(FaLongArrowAltRight),
    elements: [
      "Une flotte de plusieurs taxis",
      "Disponibilité et réactivité",
      "Ponctualité",
    ],
  },
  {
    name: "Service Gares / Aéroports",
    icon: React.createElement(FaPlane),
    arrow: React.createElement(FaLongArrowAltRight),
    elements: [
      "Prise en charge depuis les gares de : Perrache, Part-dieu, Saint-Exupéry",
      "Prise en charge depuis les Aéroports de Bron et Saint-Exupéry",
    ],
  },
  {
    name: "Trajets médicaux",
    icon: React.createElement(GrValidate),
    arrow: React.createElement(FaLongArrowAltRight),
    elements: [
      "Tous nos taxis sont conventionnés CPAM",
      "Prises en charge de vos trajets médicaux réguliers ou ponctuel",
    ],
  },
];
