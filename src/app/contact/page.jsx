// app/contact/page.jsx
import React from "react";
import ContactForm from "../../../email/form-contact";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-center">
          Contactez-nous
        </h1>
        <p className="text-center text-muted-foreground text-lg font-normal tracking-wide max-w-2xl mx-auto">
          Elite Lyon Taxi sera ravi de repondre à vos demandes.
        </p>
      </div>
      <div className="max-w-2xl mx-auto mt-12">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
