import {
  Body,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
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
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-400 text-black">
          <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">
              Nouvelle demande de prise en charge
            </Heading>
            <Text>{departureAdress}</Text>
            <Text>{arrivalAdress}</Text>
            <Text>{transportType}</Text>
            <Text>{date}</Text>
            <Text>{time}</Text>
            <Text>{telephone}</Text>
            <Hr></Hr>
            <Text>The sender email is: {email}</Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
