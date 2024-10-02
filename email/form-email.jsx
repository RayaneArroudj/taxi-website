import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function FormEmail({
  departureAdress,
  arrivalAdress,
  transportType,
  date,
  time,
  email,
  telephone,
}) {
  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de réservation - Elite Lyon Taxi</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto p-4 max-w-xl">
            <Section className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Heading className="text-2xl font-bold text-center p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                Nouvelle demande de prise en charge
              </Heading>
              <Section className="p-6 space-y-4">
                <Text className="font-semibold text-blue-800">Détails de la course :</Text>
                <Text>
                  <span className="font-medium">Départ :</span> {departureAdress}
                </Text>
                <Text>
                  <span className="font-medium">Arrivée :</span> {arrivalAdress}
                </Text>
                <Text>
                  <span className="font-medium">Type de transport :</span> {transportType}
                </Text>
                <Text>
                  <span className="font-medium">Date :</span> {date}
                </Text>
                <Text>
                  <span className="font-medium">Heure :</span> {time}
                </Text>
                <Hr className="border-t border-gray-300 my-4" />
                <Text className="font-semibold text-blue-800">Coordonnées du client :</Text>
                <Text>
                  <span className="font-medium">Téléphone :</span> {telephone}
                </Text>
                <Text>
                  <span className="font-medium">Email :</span> {email}
                </Text>
              </Section>
              <Section className="bg-gray-100 p-4 text-center text-sm text-gray-600">
                <Text>
                  © 2024 Elite Lyon Taxi. Tous droits réservés.
                </Text>
                <Link href="https://www.elitelyontaxi.com" className="text-blue-600 hover:underline">
                  www.elitelyontaxi.com
                </Link>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}