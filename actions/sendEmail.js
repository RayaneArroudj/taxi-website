// app/actions/sendEmail.js
"use server";

import React from "react";
import { Resend } from "resend";
import FormEmail from "../email/form-email";
import ContactEmail from "../email/contact-email";
import { adresseVerification, validateMail, validatePhone } from "../lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  console.log("Running on server");
  console.log("Form data received:", formData);
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
    console.log("Invalid email");
    return {
      error: "L'adresse email renseignée n'est pas valide",
    };
  }

  if (!validatePhone(telephone)) {
    console.log("Invalid phone number");
    return {
      error: "Le numéro de téléphone renseigné n'est pas valide",
    };
  }

  if (transportType !== "Contact" && departureAdress && arrivalAdress && !adresseVerification(departureAdress, arrivalAdress)) {
    console.log("Invalid addresses");
    return {
      error: "L'adresse d'arrivée ne peut pas être similaire à l'adresse de départ",
    };
  }

  let data;
  try {
    console.log("Sending email...");
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
    console.log("Email sent successfully:", data);
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: error.message,
    };
  }
  return { data };
};