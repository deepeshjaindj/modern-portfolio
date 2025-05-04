import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  email: string;
  message: string;
}

export const ContactEmail = ({ email, message }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio contact form</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Text style={heading}>📬 New Contact Form Submission</Text>
            <Text style={subtext}>
              You have received a new message via your portfolio.
            </Text>

            <Hr style={hr} />

            <Text style={label}>Sender Email:</Text>
            <Text style={value}>{email}</Text>

            <Text style={label}>Message:</Text>
            <Text style={{ ...value, whiteSpace: "pre-line" }}>{message}</Text>

            <Hr style={hr} />

            <Text style={footer}>
              This message was sent via your website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

// Styles
const main = {
  backgroundColor: "#f9f9f9",
  fontFamily: "Helvetica, Arial, sans-serif",
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "40px 32px",
};

const section = {
  textAlign: "left" as const,
};

const heading = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#333",
  marginBottom: "8px",
};

const subtext = {
  fontSize: "15px",
  color: "#555",
  marginBottom: "24px",
};

const label = {
  fontSize: "14px",
  fontWeight: "bold" as const,
  color: "#222",
  marginTop: "16px",
};

const value = {
  fontSize: "14px",
  color: "#333",
  marginTop: "4px",
};

const hr = {
  border: "none",
  borderTop: "1px solid #eaeaea",
  margin: "24px 0",
};

const footer = {
  fontSize: "12px",
  color: "#999",
  textAlign: "center" as const,
};
