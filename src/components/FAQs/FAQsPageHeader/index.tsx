import { Box, Typography } from "@mui/material";
import Image from "next/image";

const FAQsPageHeader = ({ locale }: { locale: string }) => {
  return (
    <Box
      sx={{
        padding: "16px",
        textAlign: { xs: "center", md: "center" },
      }}
    >
      <Typography
        variant="h4"
        color="text.primary"
        sx={{ mb: "16px", display: { xs: "block", md: "none" } }}
      >
        {locale === "ar" ? "أسئلة مكررة" : "Frequently Asked Questions"}
      </Typography>

      <Box>
        <Typography
          variant="h4"
          color="text.primary"
          sx={{ mb: "16px", display: { xs: "none", md: "block" } }}
        >
          {locale === "ar" ? "أسئلة مكررة" : "Frequently Asked Questions"}
        </Typography>
      </Box>
    </Box>
  );
};

export default FAQsPageHeader;
