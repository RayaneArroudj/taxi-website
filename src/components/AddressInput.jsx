// components/AddressInput.jsx
import React, { memo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { IoLocationOutline } from "react-icons/io5";

export const AddressInput = memo(
  ({
    id,
    label,
    value,
    onChange,
    showOptions,
    setShowOptions,
    results,
    setAddressValue,
  }) => {
    const displayAddress = (address) => {
      setAddressValue(address);
      setShowOptions(false);
    };

    return (
      <div className="space-y-2">
        <Label htmlFor={id} className="font-medium text-sm tracking-wide">
          {label}
        </Label>
        <div className="relative">
          <Input
            id={id}
            type="text"
            placeholder={label}
            name={id}
            required
            value={value}
            onChange={onChange}
            className="pl-10 font-normal"
          />
          <IoLocationOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {showOptions && results.length > 0 && (
            <Card className="absolute z-10 w-full mt-1">
              <CardContent className="p-0">
                <ul className="max-h-60 overflow-auto">
                  {results.map((address) => (
                    <li
                      key={address.properties.id}
                      className="cursor-pointer p-2 hover:bg-accent text-sm font-normal"
                      onClick={() => displayAddress(address.properties.label)}
                    >
                      {address.properties.label}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }
);

AddressInput.displayName = "AddressInput";
