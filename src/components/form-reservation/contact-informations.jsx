// components/ContactInformations/ContactInformations.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { ContactInput } from "../ContactInput";
import { FormButtons } from "../FormButtons";

const MOTION_PROPS = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.5 },
};

const CONTACT_FIELDS = [
  {
    id: "email",
    type: "email",
    label: "Adresse email",
    placeholder: "Adresse email",
    icon: IoIosMail,
  },
  {
    id: "telephone",
    type: "tel",
    label: "Numéro de téléphone",
    placeholder: "Numéro de téléphone",
    icon: BsFillTelephoneOutboundFill,
  },
];

export default function ContactInformations({
  submitIdentificationInformations,
  modificateButton,
  reference,
}) {
  return (
    <motion.div {...MOTION_PROPS} className="w-full">
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
              {CONTACT_FIELDS.map((field) => (
                <ContactInput key={field.id} {...field} />
              ))}
            </div>

            <Separator />

            <FormButtons onModify={modificateButton} />
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
