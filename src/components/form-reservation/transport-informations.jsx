import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

export default function TransportInformations({
  submitTansportInformations,
  setTransportType,
  transportType,
  data,
  reference,
}) {
  const [departureAddressValue, setDepartureAddressValue] = useState(
    data.departureAddress || ""
  );
  const [arrivalAddressValue, setArrivalAddressValue] = useState(
    data.arrivalAddress || ""
  );
  const [showDepartureOptions, setShowDepartureOptions] = useState(false);
  const [showArrivalOptions, setShowArrivalOptions] = useState(false);
  const [result, setResult] = useState([]);

  const handleAddressChange = async (e, setValue, setShowOptions) => {
    const value = e.target.value;
    setValue(value);

    if (value.length >= 3) {
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${value}&limit=5`
        );
        const data = await response.json();
        setResult(data.features);
        setShowOptions(true);
      } catch (error) {
        console.error("Erreur lors de la recherche d'adresse:", error);
      }
    } else {
      setShowOptions(false);
    }
  };

  const displayAddress = (address, setValue, setShowOptions) => {
    setValue(address);
    setShowOptions(false);
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

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
        <CardContent className="p-6 h-full">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label 
                htmlFor="departureAddress" 
                className="font-medium text-sm tracking-wide"
              >
                Adresse de départ
              </Label>
              <div className="relative">
                <Input
                  id="departureAddress"
                  type="text"
                  placeholder="Adresse de départ"
                  name="departureAddress"
                  required
                  value={departureAddressValue}
                  onChange={(e) =>
                    handleAddressChange(
                      e,
                      setDepartureAddressValue,
                      setShowDepartureOptions
                    )
                  }
                  className="pl-10 font-normal"
                />
                <IoLocationOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {showDepartureOptions && (
                  <Card className="absolute z-10 w-full mt-1">
                    <CardContent className="p-0">
                      <ul className="max-h-60 overflow-auto">
                        {result.map((address) => (
                          <li
                            key={address.properties.id}
                            className="cursor-pointer p-2 hover:bg-accent text-sm font-normal"
                            onClick={() =>
                              displayAddress(
                                address.properties.label,
                                setDepartureAddressValue,
                                setShowDepartureOptions
                              )
                            }
                          >
                            {address.properties.label}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label 
                htmlFor="arrivalAddress" 
                className="font-medium text-sm tracking-wide"
              >
                Adresse de destination
              </Label>
              <div className="relative">
                <Input
                  id="arrivalAddress"
                  type="text"
                  placeholder="Adresse de destination"
                  name="arrivalAddress"
                  required
                  value={arrivalAddressValue}
                  onChange={(e) =>
                    handleAddressChange(
                      e,
                      setArrivalAddressValue,
                      setShowArrivalOptions
                    )
                  }
                  className="pl-10 font-normal"
                />
                <IoLocationOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {showArrivalOptions && (
                  <Card className="absolute z-10 w-full mt-1">
                    <CardContent className="p-0">
                      <ul className="max-h-60 overflow-auto">
                        {result.map((address) => (
                          <li
                            key={address.properties.id}
                            className="cursor-pointer p-2 hover:bg-accent text-sm font-normal"
                            onClick={() =>
                              displayAddress(
                                address.properties.label,
                                setArrivalAddressValue,
                                setShowArrivalOptions
                              )
                            }
                          >
                            {address.properties.label}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

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
                  <SelectItem value="private" className="font-normal">
                    Privé
                  </SelectItem>
                  <SelectItem value="professional" className="font-normal">
                    Professionnel
                  </SelectItem>
                  <SelectItem value="medical" className="font-normal">
                    Médical
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="font-medium text-sm tracking-wide">
                Date et heure de prise en charge
              </Label>
              <div className="flex space-x-2">
                <Input
                  type="date"
                  name="date"
                  required
                  min={getCurrentDate()}
                  defaultValue={data.date || ""}
                  className="font-normal"
                />
                <Input
                  type="time"
                  name="time"
                  required
                  defaultValue={data.time || ""}
                  className="font-normal"
                />
              </div>
            </div>

            <Separator />

            <Button type="submit" className="w-full font-medium tracking-wide">
              Valider
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.form>
  );
}