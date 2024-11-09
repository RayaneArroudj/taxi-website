// components/services/components/ServiceCard.jsx
import { Card } from "@/components/ui/card";
import React from "react";
import { ServiceListItem } from "./ServiceListItem";
import Image from "next/image";

export const ServiceCard = React.memo(({ item }) => (
  <Card className="relative" style={{ 
    height: '480px',
    contain: 'layout paint size'
  }}>
    <div className="absolute inset-0 flex flex-col">
      <div className="flex-shrink-0 bg-primary/10 dark:bg-primary/20 p-6" style={{ height: '100px' }}>
        <div className="flex items-center gap-3">
          <span className="text-2xl text-primary">{item.icon}</span>
          <h3 className="font-bold tracking-wide">{item.name}</h3>
        </div>
        <div className="absolute top-4 right-4" style={{ 
          width: '40px', 
          height: '40px',
          contain: 'layout size'
        }}>
          <Image
            src="/logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-md"
            priority
          />
        </div>
      </div>
      <div className="flex-grow p-4 overflow-y-auto" style={{ height: '380px' }}>
        <ul className="space-y-3">
          {item.elements.map((element, i) => (
            <ServiceListItem key={i} text={element} />
          ))}
        </ul>
      </div>
    </div>
  </Card>
));