"use client";

import { CardContent } from "@/components/ui/card";
import { useReservationForm } from "@/hooks/useReservationForm";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { ReservationForms } from "../ReservationForms";
import SectionTitle from "../ui/section-title";
import SlideComponent from "../ui/slide-component";

export const ReservationSection = () => {
  const { isFirstFormSubmitted, transportType, data, reference, handlers } =
    useReservationForm();

  return (
    <>
      <SectionTitle className="text-white font-bold tracking-wide text-2xl md:text-3xl">
        Commander votre taxi :
      </SectionTitle>

      <CardContent className="font-normal">
        <AnimatePresence>
          <ReservationForms
            isFirstFormSubmitted={isFirstFormSubmitted}
            transportType={transportType}
            data={data}
            reference={reference}
            handlers={handlers}
          />
        </AnimatePresence>

        <div className="flex justify-center gap-5 mt-4">
          <SlideComponent
            isFirstFormSubmitted={isFirstFormSubmitted}
            className="font-medium text-sm"
          />
        </div>
      </CardContent>
    </>
  );
};

export default ReservationSection;
