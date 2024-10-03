// app/actions/sendEmail.js
"use server";

import React from "react";
import { Resend } from "resend";
import FormEmail from "../email/form-email";
import ContactEmail from "../email/contact-email";
import { adresseVerification, validateMail, validatePhone } from "../lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  console.log("running on server");
  console.log(formData);
  const {
    departureAdress,
    arrivalAdress,
    transportType,
    date,
    time,
    email,
    telephone,
    name,
    message,
  } = formData;

  if (!validateMail(email)) {
    return {
      error: "L'adresse email renseignée n'est pas valide",
    };
  }

  if (!validatePhone(telephone)) {
    return {
      error: "Le numéro de téléphone renseigné n'est pas valide",
    };
  }

  if (departureAdress && arrivalAdress && !adresseVerification(departureAdress, arrivalAdress)) {
    return {
      error:
        "L'adresse d'arrivée ne peux pas être similaire à l'adresse de départ",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "lare.axelange.simplon@gmail.com",
      subject: transportType === "Contact" ? "Nouveau message de contact" : "devis taxi",
      reply_to: email,
      react: transportType === "Contact" 
        ? React.createElement(ContactEmail, { name, email, telephone, message })
        : React.createElement(FormEmail, {
            departureAdress,
            arrivalAdress,
            transportType,
            date,
            time,
            email,
            telephone,
          }),
    });
  } catch (error) {
    return {
      error: error.message,
    };
  }
  return { data };
};