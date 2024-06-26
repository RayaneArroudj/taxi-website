"use client";
import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { sendEmail } from "../../../actions/sendEmail";
import SectionTitle from "../utils-components/section-title";
import SlideComponent from "../utils-components/slide-component";
import ContactInformations from "./contact-informations";
import TransportInformations from "./transport-informations";

export default function ReservationSection() {
  const [transportType, setTransportType] = useState(null);
  const [isFirstFormSubmitted, setIsFirstFormSubmitted] = useState(false);
  const [data, setData] = useState({});

  const reference = useRef(null);

  const submitTansportInformations = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newData = {
      departureAdress: formData.get("departureAdress"),
      arrivalAdress: formData.get("arrivalAdress"),
      transportType: transportType,
      date: formData.get("date"),
      time: formData.get("time"),
    };

    setData(newData);
    setIsFirstFormSubmitted(true);
  };

  const submitIdentificationInformations = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const updatedData = {
      ...data,
      email: formData.get("email"),
      telephone: formData.get("telephone"),
    };

    const { error } = await sendEmail(updatedData);

    if (error) {
      toast.error(error);
      return;
    }

    if (data?.error) {
      toast.error(data.error);
      return;
    }

    toast.success(
      "Votre demande à bien été envoyée, un chauffeur vous contactera par téléphone pour valider votre prise en charge, merci pour votre confiance !",
      { duration: 5000 }
    );
    reference.current?.reset();
    setIsFirstFormSubmitted(false);
    setData({});
  };

  const modificateButton = (e) => {
    e.preventDefault();
    setIsFirstFormSubmitted(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url("/lyon2.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px",
      }}
      className="flex flex-col gap-5"
    >
      <SectionTitle>Commander votre taxi :</SectionTitle>
      <div className="flex flex-col gap-5 opacity-95 bg-white w-11/12 lg:w-4/6 lg:items-center  place-self-center py-5 px-2 border-2 rounded shadow-inner h-[450px]">
        <AnimatePresence>
          {!isFirstFormSubmitted ? (
            <TransportInformations
              submitTansportInformations={submitTansportInformations}
              setTransportType={setTransportType}
              transportType={transportType}
              data={data}
              reference={reference}
            />
          ) : (
            <ContactInformations
              submitIdentificationInformations={
                submitIdentificationInformations
              }
              modificateButton={modificateButton}
              reference={reference}
            />
          )}
        </AnimatePresence>
        <div className="flex justify-center gap-5">
          <SlideComponent isFirstFormSubmitted={isFirstFormSubmitted} />
        </div>
      </div>
    </div>
  );
}
