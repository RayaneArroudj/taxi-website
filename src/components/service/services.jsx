import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { servicesList } from "../../../lib/data";

export default function Services() {
  return (
    <section className="container mx-auto py-12 space-y-8">
      <h2 className="text-3xl font-bold text-center">Nos Services</h2>
      <p className="text-center max-w-2xl mx-4 text-muted-foreground sm:mx-auto">
        Société de Taxi basée sur Lyon, nous assurons tous vos transports
        privés, professionnels ou médicaux. Contactez-nous, et un chauffeur de
        la compagnie vous sera envoyé afin de vous mener à votre destination.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-primary/10 dark:bg-primary/20 relative pb-12">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-primary">{item.icon}</span>
                <CardTitle>{item.name}</CardTitle>
              </div>
              <Image
                className="absolute top-2 right-2 rounded-md"
                src="/logo.jpg"
                alt="logo"
                width={40}
                height={40}
              />
            </CardHeader>
            <CardContent className="px-2 py-2">
              <ul className="space-y-2">
                {item.elements.map((element, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{element}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
