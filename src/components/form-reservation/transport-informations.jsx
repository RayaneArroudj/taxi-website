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
import { getCurrentDate } from "../../../lib/utils";

export default function TransportInformations({
  submitTansportInformations,
  setTransportType,
  transportType,
  data,
  reference,
}) {
  const [result, setResult] = useState([]);
  const [showDepartureOptions, setShowDepartureOptions] = useState(false);
  const [departureAddressValue, setDepartureAddressValue] = useState(
    data.departureAddress || ""
  );
  const [showArrivalOptions, setShowArrivalOptions] = useState(false);
  const [arrivalAddressValue, setArrivalAddressValue] = useState(
    data.arrivalAddress || ""
  );

  const fetchAddress = async (value, setOptions) => {
    if (value.length > 3) {
      const baseUrl = process.env.NEXT_PUBLIC_GEOLOC;
      const queryParams = new URLSearchParams({ q: value });
      const URL = `${baseUrl}?${queryParams}`;
      const response = await fetch(URL);
      const data = await response.json();
      setResult(data.features);
      setOptions(true);
    } else {
      setOptions(false);
    }
  };

  const handleAddressChange = (e, setAddress, setOptions) => {
    const value = e.target.value;
    setAddress(value);
    fetchAddress(value, setOptions);
  };

  const displayAddress = (address, setAddress, setOptions) => {
    setAddress(address);
    setResult([]);
    setOptions(false);
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
              <Label htmlFor="departureAddress">Adresse de départ</Label>
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
                  className="pl-10"
                />
                <IoLocationOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {showDepartureOptions && (
                  <Card className="absolute z-10 w-full mt-1">
                    <CardContent className="p-0">
                      <ul className="max-h-60 overflow-auto">
                        {result.map((address) => (
                          <li
                            key={address.properties.id}
                            className="cursor-pointer p-2 hover:bg-accent"
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
              <Label htmlFor="arrivalAddress">Adresse de destination</Label>
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
                  className="pl-10"
                />
                <IoLocationOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {showArrivalOptions && (
                  <Card className="absolute z-10 w-full mt-1">
                    <CardContent className="p-0">
                      <ul className="max-h-60 overflow-auto">
                        {result.map((address) => (
                          <li
                            key={address.properties.id}
                            className="cursor-pointer p-2 hover:bg-accent"
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
              <Label>Type de transport</Label>
              <Select
                onValueChange={setTransportType}
                defaultValue={transportType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez le type de transport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="private">Privé</SelectItem>
                  <SelectItem value="professional">Professionnel</SelectItem>
                  <SelectItem value="medical">Médical</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Date et heure de prise en charge</Label>
              <div className="flex space-x-2">
                <Input
                  type="date"
                  name="date"
                  required
                  min={getCurrentDate()}
                  defaultValue={data.date || ""}
                />
                <Input
                  type="time"
                  name="time"
                  required
                  defaultValue={data.time || ""}
                />
              </div>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Valider
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.form>
  );
}
