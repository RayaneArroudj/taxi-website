// components/ReservationForms.jsx
import React, { memo } from "react";
import ContactInformations from "./form-reservation/contact-informations";
import TransportInformations from "./form-reservation/transport-informations";

export const ReservationForms = memo(
  ({ isFirstFormSubmitted, transportType, data, reference, handlers }) => {
    if (!isFirstFormSubmitted) {
      return (
        <TransportInformations
          submitTansportInformations={handlers?.submitTransportInformations}
          setTransportType={handlers?.setTransportType}
          transportType={transportType}
          data={data}
          reference={reference}
          className="space-y-4"
        />
      );
    }

    return (
      <ContactInformations
        submitIdentificationInformations={
          handlers.submitIdentificationInformations
        }
        modificateButton={handlers.modificateButton}
        reference={reference}
        className="space-y-4"
      />
    );
  }
);

ReservationForms.displayName = "ReservationForms";
