"use client";
import { Alert, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import FormTextField from "./formTextField";

interface ContactFormProps {
  type: string;
  locale: string;
}
interface Message {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ type, locale }) => {
  const firstNameError =
    locale === "en"
      ? "Please enter your first name"
      : "الرجاء إدخال الاسم الأول";
  const lastNameError =
    locale === "en"
      ? "Please enter your last name"
      : "الرجاء إدخال الاسم الأخير";
  const emailError =
    locale === "en"
      ? "Please enter your email"
      : "الرجاء إدخال البريد الإلكتروني";
  const phoneNumberError =
    locale === "en"
      ? "Please enter your phone number"
      : "الرجاء إدخال رقم الهاتف";
  const messageError =
    locale === "en" ? "Please enter your message" : "الرجاء إدخال الرسالة";

  const firstNameLabel = locale === "en" ? "First name" : "الاسم الأول";
  const lastNameLabel = locale === "en" ? "Last name" : "الاسم الأخير";
  const emailLabel = locale === "en" ? "Email" : "البريد الإلكتروني";
  const phoneNumberLabel = locale === "en" ? "Phone Number" : "رقم الهاتف";
  const messageLabel = locale === "en" ? "Message" : "الرسالة";

  const firstNamePlaceholder = locale === "en" ? "First name" : "الاسم الأول";
  const lastNamePlaceholder = locale === "en" ? "Last name" : "الاسم الأخير";
  const emailPlaceholder = locale === "en" ? "Email" : "البريد الإلكتروني";
  const phoneNumberPlaceholder =
    locale === "en" ? "Phone Number" : "رقم الهاتف";
  const messagePlaceholder = locale === "en" ? "Message" : "الرسالة";

  const buttonText = locale === "en" ? "Submit" : "إرسال";

  const [error, setError] = React.useState<string | null>(null);
  const [message, setMessage] = React.useState<Message>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.firstName) {
      setError(firstNameError);
      return;
    }
    if (!message.lastName) {
      setError(lastNameError);
      return;
    }
    if (!message.email) {
      setError(emailError);
      return;
    }
    if (!message.phoneNumber) {
      setError(phoneNumberError);
      return;
    }
    if (!message.message) {
      setError(messageError);
      return;
    }
    setError(null);
    console.log(message);
  };

  return (
    <>
      {error && (
        <Alert
          id="error-alert"
          sx={{
            width: "100%",
            marginBottom: "1em",
          }}
          variant="outlined"
          severity="error"
          onClose={() => {
            setError(null);
          }}
        >
          {error}
        </Alert>
      )}
      <Box component={"form"} onSubmit={handleSubmit}>
        <FormTextField
          locale={locale}
          label={firstNameLabel}
          placeholder={firstNamePlaceholder}
          value={message.firstName}
          setMessage={setMessage}
        />
        <FormTextField
          locale={locale}
          label={lastNameLabel}
          placeholder={lastNamePlaceholder}
          value={message.lastName}
          setMessage={setMessage}
        />
        <FormTextField
          locale={locale}
          label={emailLabel}
          placeholder={emailPlaceholder}
          value={message.email}
          setMessage={setMessage}
        />
        <FormTextField
          locale={locale}
          label={phoneNumberLabel}
          placeholder={phoneNumberPlaceholder}
          value={message.phoneNumber}
          setMessage={setMessage}
        />
        <FormTextField
          locale={locale}
          label={messageLabel}
          placeholder={messagePlaceholder}
          value={message.message}
          setMessage={setMessage}
        />
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          sx={{
            width: "115px",
            height: "48px",
            fontWeight: 600,
            color: "#FFFFFF",
            fontSize: "14px",
            borderRadius: "24px",
            textTransform: "none",
            marginBottom: "1em",
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
