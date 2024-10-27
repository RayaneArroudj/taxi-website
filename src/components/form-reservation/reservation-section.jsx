"use client";
import { CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { sendEmail } from "../../../actions/sendEmail";
import SectionTitle from "../utils-components/section-title";
import SlideComponent from "../utils-components/slide-component";
import ContactInformations from "./contact-informations";
import TransportInformations from "./transport-informations";

export default function ReservationSection() {
  const [transportType, setTransportType] = useState(null);
  const [isFirstFormSubmitted, setIsFirstFormSubmitted] = useState(false);
  const [data, setData] = useState({});
  const { toast } = useToast();
  const reference = useRef(null);

  const submitTansportInformations = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newData = {
      departureAddress: formData.get("departureAddress"),
      arrivalAddress: formData.get("arrivalAddress"),
      transportType: transportType,
      date: formData.get("date"),
      time: formData.get("time"),
    };

    setData(newData);
    setIsFirstFormSubmitted(true);
    console.log(newData);
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
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error,
      });
      return;
    }

    toast({
      title: "Succès",
      description:
        "Votre demande a bien été envoyée. Un chauffeur vous contactera par téléphone pour valider votre prise en charge. Merci pour votre confiance !",
      duration: 5000,
    });
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
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url("/lyon2.webp")` }}
    >
      <SectionTitle className="text-white font-bold tracking-wide text-2xl md:text-3xl">
        Commander votre taxi :
      </SectionTitle>
      <CardContent className="font-normal">
        <AnimatePresence>
          {!isFirstFormSubmitted ? (
            <TransportInformations
              submitTansportInformations={submitTansportInformations}
              setTransportType={setTransportType}
              transportType={transportType}
              data={data}
              reference={reference}
              className="space-y-4"
            />
          ) : (
            <ContactInformations
              submitIdentificationInformations={submitIdentificationInformations}
              modificateButton={modificateButton}
              reference={reference}
              className="space-y-4"
            />
          )}
        </AnimatePresence>
        <div className="flex justify-center gap-5 mt-4">
          <SlideComponent 
            isFirstFormSubmitted={isFirstFormSubmitted}
            className="font-medium text-sm"
          />
        </div>
      </CardContent>
    </div>
  );
}