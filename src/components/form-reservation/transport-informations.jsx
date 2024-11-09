// TransportInformations.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useAddressAutocomplete } from "@/hooks/useAddressAutocomplete";
import { Label } from "@radix-ui/react-label";
import { motion } from "framer-motion";
import React from "react";
import { AddressInput } from "../AddressInput";
import { DateTimeInput } from "../DateTimeInput";

export default function TransportInformations({
  submitTansportInformations,
  setTransportType,
  transportType,
  data,
  reference,
}) {
  const {
    addressValue: departureAddressValue,
    setAddressValue: setDepartureAddressValue,
    showOptions: showDepartureOptions,
    setShowOptions: setShowDepartureOptions,
    results: departureResults,
    handleAddressChange: handleDepartureAddressChange,
  } = useAddressAutocomplete(data?.departureAddress);

  const {
    addressValue: arrivalAddressValue,
    setAddressValue: setArrivalAddressValue,
    showOptions: showArrivalOptions,
    setShowOptions: setShowArrivalOptions,
    results: arrivalResults,
    handleAddressChange: handleArrivalAddressChange,
  } = useAddressAutocomplete(data?.arrivalAddress);

  const transportTypes = [
    { value: "private", label: "Privé" },
    { value: "professional", label: "Professionnel" },
    { value: "medical", label: "Médical" },
  ];

  return (
    <motion.form
      initial={false}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
      onSubmit={submitTansportInformations}
      className="flex flex-col gap-5 w-full"
      ref={reference}
    >
      <Card>
        <CardContent className="p-6 h-full space-y-4">
          <AddressInput
            id="departureAddress"
            label="Adresse de départ"
            value={departureAddressValue}
            onChange={handleDepartureAddressChange}
            showOptions={showDepartureOptions}
            setShowOptions={setShowDepartureOptions}
            results={departureResults}
            setAddressValue={setDepartureAddressValue}
          />

          <AddressInput
            id="arrivalAddress"
            label="Adresse de destination"
            value={arrivalAddressValue}
            onChange={handleArrivalAddressChange}
            showOptions={showArrivalOptions}
            setShowOptions={setShowArrivalOptions}
            results={arrivalResults}
            setAddressValue={setArrivalAddressValue}
          />

          <div className="space-y-2">
            <Label className="font-medium text-sm tracking-wide">
              Type de transport
            </Label>
            <Select
              onValueChange={setTransportType}
              defaultValue={transportType}
            >
              <SelectTrigger className="font-normal">
                <SelectValue placeholder="Sélectionnez le type de transport" />
              </SelectTrigger>
              <SelectContent>
                {transportTypes.map(({ value, label }) => (
                  <SelectItem key={value} value={value} className="font-normal">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <DateTimeInput defaultDate={data?.date} defaultTime={data?.time} />

          <Separator />

          <Button type="submit" className="w-full font-medium tracking-wide">
            Valider
          </Button>
        </CardContent>
      </Card>
    </motion.form>
  );
}
