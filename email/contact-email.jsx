import React from 'react';
import { 
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components';

const ContactEmail = ({ name, email, telephone, message }) => {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message de contact</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nouveau message de contact</Heading>
          <Text style={text}>Nom: {name}</Text>
          <Text style={text}>Email: {email}</Text>
          <Text style={text}>Téléphone: {telephone}</Text>
          <Hr style={hr} />
          <Heading as="h2" style={h2}>Message:</Heading>
          <Text style={text}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  paddingTop: '32px',
  paddingBottom: '16px',
};

const h2 = {
  color: '#333',
  fontSize: '20px',
  fontWeight: 'bold',
  paddingTop: '16px',
  paddingBottom: '8px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};