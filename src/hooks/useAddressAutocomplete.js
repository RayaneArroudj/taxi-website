// hooks/useAddressAutocomplete.js
import { useCallback, useState } from "react";

export const useAddressAutocomplete = (initialValue = "") => {
  const [addressValue, setAddressValue] = useState(initialValue);
  const [showOptions, setShowOptions] = useState(false);
  const [results, setResults] = useState([]);

  const handleAddressChange = useCallback(async (e) => {
    const value = e.target.value;
    setAddressValue(value);

    if (value.length >= 3) {
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${value}&limit=5`
        );
        const data = await response.json();
        setResults(data.features);
        setShowOptions(true);
      } catch (error) {
        console.error("Erreur lors de la recherche d'adresse:", error);
        setResults([]);
        setShowOptions(false);
      }
    } else {
      setResults([]);
      setShowOptions(false);
    }
  }, []);

  return {
    addressValue,
    setAddressValue,
    showOptions,
    setShowOptions,
    results,
    handleAddressChange,
  };
};
