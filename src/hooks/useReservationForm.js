// hooks/useReservationForm.js
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import { sendEmail } from "../../actions/sendEmail";

export const useReservationForm = () => {
  const [transportType, setTransportType] = useState(null);
  const [isFirstFormSubmitted, setIsFirstFormSubmitted] = useState(false);
  const [data, setData] = useState({});
  const { toast } = useToast();
  const reference = useRef(null);

  const handleTransportSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newData = {
      departureAddress: formData.get("departureAddress"),
      arrivalAddress: formData.get("arrivalAddress"),
      transportType: transportType,
      date: formData.get("date"),
      time: formData.get("time"),
    };

    setData(newData);
    setIsFirstFormSubmitted(true);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const updatedData = {
      ...data,
      email: formData.get("email"),
      telephone: formData.get("telephone"),
    };

    const { error } = await sendEmail(updatedData);

    if (error) {
      showErrorToast(error);
      return;
    }

    showSuccessToast();
    resetForm();
  };

  const handleModification = (e) => {
    e.preventDefault();
    setIsFirstFormSubmitted(false);
  };

  const showErrorToast = (error) => {
    toast({
      variant: "destructive",
      title: "Erreur",
      description: error,
    });
  };

  const showSuccessToast = () => {
    toast({
      title: "Succès",
      description:
        "Votre demande a bien été envoyée. Un chauffeur vous contactera par téléphone pour valider votre prise en charge. Merci pour votre confiance !",
      duration: 5000,
    });
  };

  const resetForm = () => {
    reference.current?.reset();
    setIsFirstFormSubmitted(false);
    setData({});
  };

  return {
    isFirstFormSubmitted,
    transportType,
    data,
    reference,
    handlers: {
      setTransportType,
      submitTransportInformations: handleTransportSubmit,
      submitIdentificationInformations: handleContactSubmit,
      modificateButton: handleModification,
    },
  };
};
