// app/contact/page.jsx
import React from "react";
import ContactForm from "../../../email/form-contact";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contactez-nous</h1>
      <p
        className="
      text-center text-gray-400 mb-8 text-lg"
      >
        Elite Lyon Taxi sera ravi de repondre à vos demandes.
      </p>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
