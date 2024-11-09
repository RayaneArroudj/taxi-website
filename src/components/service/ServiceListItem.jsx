
// components/services/components/ServiceListItem.jsx
import React from "react";
import { CheckCircle2 } from "lucide-react";

export const ServiceListItem = React.memo(({ text }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
    <span className="font-normal text-sm tracking-wide text-foreground/90">
      {text}
    </span>
  </li>
));

ServiceListItem.displayName = 'ServiceListItem';

