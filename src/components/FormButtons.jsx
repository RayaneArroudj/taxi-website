// components/ContactInformations/components/FormButtons.jsx
import { Button } from "@/components/ui/button";
import React, { memo } from "react";

export const FormButtons = memo(({ onModify }) => {
  return (
    <div className="flex justify-end space-x-4">
      <Button
        type="button"
        variant="outline"
        onClick={onModify}
        className="w-1/3 font-medium tracking-wide"
      >
        Modifier
      </Button>
      <Button type="submit" className="w-1/3 font-medium tracking-wide">
        Envoyer
      </Button>
    </div>
  );
});

FormButtons.displayName = "FormButtons";
