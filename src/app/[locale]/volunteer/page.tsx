import ContactForm from "@/src/components/contactForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocale } from "next-intl";

const VolunteerPage = () => {
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
        {locale === "en" ? "Volunteer with Us" : "تطوع معنا"}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          marginY: "20px",
          fontWeight: 400,
          fontSize: "27px",
          lineHeight: "30px",
        }}
        color="black"
      >
        {locale === "en"
          ? "Thank you for your interest in joining our team!"
          : "شكرا لاهتمامك بالانضمام لفريقنا!"}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          marginY: "20px",
        }}
        color="black"
      >
        {locale === "en"
          ? "Please fill out this form and tell us how can you contribute to Adoption in Egypt. This may include skills in writing, translation, social media, communication, etc. We will be in touch with you shortly after reviewing application!"
          : "يرجى ملء هذا النموذج وأخبرنا كيف يمكنك المساهمة في الكفالة في مصر. قد تشمل هذه المهارات في الكتابة، الترجمة، وسائل التواصل الاجتماعي، الاتصال، وما إلى ذلك. سنكون على اتصال معك قريبًا بعد الاتطلاع الطلب!"}
      </Typography>
      <ContactForm locale={locale} type={"volunteer"} />
    </Box>
  );
};

export default VolunteerPage;
