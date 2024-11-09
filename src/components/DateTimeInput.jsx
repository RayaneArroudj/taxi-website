// components/DateTimeInput.jsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { memo } from "react";

export const DateTimeInput = memo(({ defaultDate, defaultTime }) => {
  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <div className="space-y-2">
      <Label className="font-medium text-sm tracking-wide">
        Date et heure de prise en charge
      </Label>
      <div className="flex space-x-2">
        <Input
          type="date"
          name="date"
          required
          min={getCurrentDate()}
          defaultValue={defaultDate || ""}
          className="font-normal"
        />
        <Input
          type="time"
          name="time"
          required
          defaultValue={defaultTime || ""}
          className="font-normal"
        />
      </div>
    </div>
  );
});

DateTimeInput.displayName = "DateTimeInput";
