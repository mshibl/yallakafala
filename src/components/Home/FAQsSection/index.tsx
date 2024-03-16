import { Box, Button, Typography } from "@mui/material";
import FAQs from "../../FAQs";
import Link from "next/link";
import { Suspense } from "react";

const FAQsSection = ({ locale }: { locale: "ar" | "en" }) => {
  return (
    <Box padding={{ xs: "20px", md: "40px" }} bgcolor="secondary.main">
      <Typography
        variant="h5"
        color="#ffffff"
        textAlign="center"
        padding="20px"
        fontWeight={600}
      >
        {locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
      </Typography>
      <Box>
        <Suspense fallback={<Box height={{ xs: "1040px", md: "520px" }} />}>
          <FAQs
            locale={locale}
            firstFaqOpen={true}
            faqsCount={3}
            random={true}
          />
        </Suspense>
      </Box>
      <Box textAlign="center" padding="20px">
        <Link href={`/${locale}/faqs`}>
          <Button
            variant="text"
            color="secondary"
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              textDecoration: "underline",
              color: "#ffffff",
            }}
          >
            {locale === "ar" ? "اقرأ المزيد من الأسئلة" : "Read more FAQs"}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default FAQsSection;
