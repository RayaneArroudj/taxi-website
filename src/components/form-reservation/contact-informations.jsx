import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export default function ContactInformations({
  submitIdentificationInformations,
  modificateButton,
  reference,
}) {
  return (
    <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "-100%" }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <Card className="p-3">
      <CardHeader>
        <CardTitle className="font-bold tracking-tight text-xl">
          Informations de contact
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={submitIdentificationInformations}
          className="space-y-6"
          ref={reference}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-medium text-sm tracking-wide">
                Adresse email
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Adresse email"
                  name="email"
                  required
                  className="pl-10 font-normal"
                />
                <IoIosMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
  
            <div className="space-y-2">
              <Label htmlFor="telephone" className="font-medium text-sm tracking-wide">
                Numéro de téléphone
              </Label>
              <div className="relative">
                <Input
                  id="telephone"
                  type="tel"
                  placeholder="Numéro de téléphone"
                  name="telephone"
                  required
                  className="pl-10 font-normal"
                />
                <BsFillTelephoneOutboundFill className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
  
          <Separator />
  
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={modificateButton}
              className="w-1/3 font-medium tracking-wide"
            >
              Modifier
            </Button>
            <Button type="submit" className="w-1/3 font-medium tracking-wide">
              Envoyer
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </motion.div>
  );
}
