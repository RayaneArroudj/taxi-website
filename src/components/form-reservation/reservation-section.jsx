'use client'
import React, { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast"
import { sendEmail } from "../../../actions/sendEmail";
import { Card, CardContent } from "@/components/ui/card";
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
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error,
      });
      return;
    }

    toast({
      title: "Succès",
      description: "Votre demande a bien été envoyée. Un chauffeur vous contactera par téléphone pour valider votre prise en charge. Merci pour votre confiance !",
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
    <div className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: `url("/lyon2.webp")` }}>

      <SectionTitle className='text-white'>Commander votre taxi :</SectionTitle>
      <Card className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-5/6 2xl:w-11/12 mx-auto shadow-lg">
  <CardContent className="p-6">
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
                submitIdentificationInformations={submitIdentificationInformations}
                modificateButton={modificateButton}
                reference={reference}
              />
            )}
          </AnimatePresence>
          <div className="flex justify-center gap-5 mt-4">
            <SlideComponent isFirstFormSubmitted={isFirstFormSubmitted} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}