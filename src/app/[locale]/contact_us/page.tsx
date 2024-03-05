import ContactForm from "@/src/components/contactForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocale } from "next-intl";

const ContactUsPage = () => {
  const locale = useLocale();
  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      <Typography
        sx={{
          marginY: "20px",
          fontSize: "38px",
          lineHeight: "44px",
        }}
        color="black"
      >
        {locale === "en" ? "Contact Us" : "تواصل معنا"}
      </Typography>
      <ContactForm locale={locale} type={"contact"} />
    </Box>
  );
};

export default ContactUsPage;
