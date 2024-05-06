"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { getCurrentDate } from "../../../lib/utils";
import Divider from "../utils-components/divider";
import FormTitle from "../utils-components/form-title";
import SubmitButton from "../utils-components/submit-button";

export default function TransportInformations({
  submitTansportInformations,
  setTransportType,
  transportType,
  data,
  reference,
}) {
  // stocker les résultats du fetch //
  const [result, setResult] = useState([]);
  // state gérant l'adresse de départ //
  const [showDepartureOptions, setshowDepartureOptions] = useState(false);
  const [departureAdressValue, setdepartureAdressValue] = useState(
    data.departureAdress || ""
  );
  //state gérant l'adresse d'arrivée //
  const [showArrivalOptions, setshowArrivalOptions] = useState(false);
  const [arrivalAdressValue, setArrivalAdressValue] = useState(
    data.arrivalAdress || ""
  );

  // RECHERCHER ET AFFICHER LES RESULTATS D'ADRESSE DE DEPART //
  const fetchDepartureAdress = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    setdepartureAdressValue(value);
    if (e.target.value.length > 3) {
      const baseUrl = process.env.NEXT_PUBLIC_GEOLOC;

      const querParams = new URLSearchParams({
        q: e.target.value,
      });
      const URL = `${baseUrl}?${querParams}`;
      const response = await fetch(URL);
      const data = await response.json();
      setResult(data.features);
      setshowDepartureOptions(true);
    } else {
      setshowDepartureOptions(false);
    }
  };

  const displayDepartureAdress = (address) => {
    setdepartureAdressValue(address);
    setResult([]);
    setshowDepartureOptions(false);
  };

  // RECHERCHER ET AFFICHER LES RESULTATS D'ADRESSE D'ARRIVEE //
  const fetchArrivalAdress = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    setArrivalAdressValue(value);
    if (e.target.value.length > 3) {
      const baseUrl = process.env.NEXT_PUBLIC_GEOLOC;
      const querParams = new URLSearchParams({
        q: e.target.value,
      });
      const URL = `${baseUrl}?${querParams}`;
      const response = await fetch(URL);
      const data = await response.json();
      setResult(data.features);
      setshowArrivalOptions(true);
    } else {
      setshowArrivalOptions(false);
    }
  };

  const displayArrivalAdress = (address) => {
    setArrivalAdressValue(address);
    setResult([]);
    setshowArrivalOptions(false);
  };

  return (
    <motion.form
      initial={false}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
      onSubmit={submitTansportInformations}
      className="flex flex-col gap-5 lg:w-4/6"
      ref={reference}
    >
      {/* SECTION ADRESSE */}
      <span className="flex justify-center gap-1 items-center relative">
        <IoLocationOutline className="size-5" />
        <input
          className="border-b w-10/12 pl-1 border-b-blue-600"
          type="text"
          placeholder="Adresse de départ"
          name="departureAdress"
          required
          onChange={fetchDepartureAdress}
          value={departureAdressValue}
        />
        {showDepartureOptions && (
          <ul className="border z-10 border-gray-300 bg-white w-full top-full left-0 mt-1 rounded-b absolute">
            {result.map((address) => (
              <li
                key={address.properties.id}
                className="cursor-pointer p-2 hover:bg-gray-100"
                onClick={() => displayDepartureAdress(address.properties.label)}
              >
                {address.properties.label}
              </li>
            ))}
          </ul>
        )}
      </span>
      <span className="flex justify-center gap-1 items-center relative">
        <IoLocationOutline className="size-5" />
        <input
          className="border-b w-10/12 pl-1 border-b-blue-600"
          type="text"
          placeholder="Adresse de destination"
          name="arrivalAdress"
          required
          onChange={fetchArrivalAdress}
          value={arrivalAdressValue}
        />
        {showArrivalOptions && (
          <ul className="border z-10 border-gray-300 bg-white w-full top-full left-0 mt-1 rounded-b absolute">
            {result.map((address) => (
              <li
                key={address.properties.id}
                className="cursor-pointer p-2 hover:bg-gray-100"
                onClick={() => displayArrivalAdress(address.properties.label)}
              >
                {address.properties.label}
              </li>
            ))}
          </ul>
        )}
      </span>
      {/* SECTION TYPE DE TRANSPORT */}
      <div className="flex flex-col gap-3">
        <FormTitle>Type de transport :</FormTitle>
        <div className="flex flex-row gap-2 justify-center">
          <button
            onClick={() =>
              transportType === "private"
                ? setTransportType("")
                : setTransportType("private")
            }
            className={`w-3/12 border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-600 cursor-pointer hover:bg-blue-500 hover:text-white ${
              transportType === "private" ? "bg-blue-400 text-white" : ""
            }`}
          >
            Privé
          </button>
          <button
            onClick={() =>
              transportType === "profesional"
                ? setTransportType("")
                : setTransportType("profesional")
            }
            className={`w-4/12 border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-600 cursor-pointer hover:bg-blue-500 hover:text-white ${
              transportType === "profesional" ? "bg-blue-400 text-white" : ""
            }`}
          >
            Professionnel
          </button>
          <button
            onClick={() =>
              transportType === "medical"
                ? setTransportType("")
                : setTransportType("medical")
            }
            className={`w-3/12 border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-600 cursor-pointer hover:bg-blue-500 hover:text-white ${
              transportType === "medical" ? "bg-blue-400 text-white" : ""
            }`}
          >
            Médical
          </button>
        </div>
      </div>
      {/* SECTION DATE ET HEURE */}
      <FormTitle>Date et heure de prise en charge:</FormTitle>
      <div className="flex justify-around">
        <input
          type="date"
          name="date"
          placeholder="Date"
          className="border-2 pl-2 py-1 border-blue-600 text-blue-600 rounded-lg"
          required
          min={getCurrentDate()}
          defaultValue={data.date || ""}
        />
        <input
          type="time"
          name="time"
          className="border-2 pl-2 py-1 border-blue-600 text-blue-600 rounded-lg"
          required
          defaultValue={data.time || ""}
        />
      </div>
      <div className="flex flex-col gap-5">
        <Divider />
        {/* VALIDATION DU FORMULAIRE */}
        <SubmitButton>Valider</SubmitButton>
      </div>
    </motion.form>
  );
}
