// components/ContactInformations/components/ContactInput.jsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { memo } from "react";

export const ContactInput = memo(
  ({ id, type, label, placeholder, icon: Icon }) => {
    return (
      <div className="space-y-2">
        <Label htmlFor={id} className="font-medium text-sm tracking-wide">
          {label}
        </Label>
        <div className="relative">
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            name={id}
            required
            className="pl-10 font-normal"
          />
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    );
  }
);

ContactInput.displayName = "ContactInput";
