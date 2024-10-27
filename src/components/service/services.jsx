import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { servicesList } from "../../../lib/data";

export default function Services() {
  return (
    <section className="container mx-auto py-16 space-y-10">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          Nos Services
        </h2>
        <p className="text-center max-w-2xl mx-4 text-muted-foreground sm:mx-auto font-normal text-base tracking-wide">
          Société de Taxi basée sur Lyon, nous assurons tous vos transports
          privés, professionnels ou médicaux. Contactez-nous, et un chauffeur de
          la compagnie vous sera envoyé afin de vous mener à votre destination.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="bg-primary/10 dark:bg-primary/20 relative pb-12">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-primary">{item.icon}</span>
                <CardTitle className="font-bold tracking-wide">
                  {item.name}
                </CardTitle>
              </div>
              <Image
                className="absolute top-2 right-2 rounded-md"
                src="/logo.jpg"
                alt="logo"
                width={40}
                height={40}
              />
            </CardHeader>
            <CardContent className="px-4 py-4">
              <ul className="space-y-3">
                {item.elements.map((element, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="font-normal text-sm tracking-wide text-foreground/90">
                      {element}
                    </span>
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