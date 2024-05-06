// Fonction pour obtenir la date du jour au format ISO (AAAA-MM-JJ)
export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // Ajoute un zéro devant le mois si nécessaire pour obtenir le format "MM"
  if (month < 10) {
    month = "0" + month;
  }
  // Ajoute un zéro devant le jour si nécessaire pour obtenir le format "JJ"
  if (day < 10) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
};

export const validateMail = (value, maxLength) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const validatePhone = (value) => {
  // Vérifie si la valeur existe et si c'est une chaîne de caractères
  if (!value || typeof value !== "string") {
    return false;
  }

  // Supprime les espaces vides de la chaîne
  value = value.replace(/\s/g, "");

  // Vérifie si la chaîne contient exactement 10 chiffres
  if (/^\d{10}$/.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const adresseVerification = (adress1, adress2) => {
  if (adress1 === adress2) {
    return false;
  } else {
    return true;
  }
};

export const getErrorMessage = (error) => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
