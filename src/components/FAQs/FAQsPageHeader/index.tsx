import { Box, Typography } from "@mui/material";

const FAQsPageHeader = ({ locale }: { locale: string }) => {
  return (
    <Box
      sx={{
        padding: "16px",
        textAlign: { xs: "center", md: "center" },
        py: "40px",
      }}
    >
      <Typography variant="h4" color="#87226C" fontWeight={500}>
        {locale === "ar" ? "أسئلة متكررة" : "Frequently Asked Questions"}
      </Typography>
    </Box>
  );
};

export default FAQsPageHeader;
