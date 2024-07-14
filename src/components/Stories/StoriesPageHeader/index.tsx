import { Box, Typography } from "@mui/material";
import Image from "next/image";

const StoriesPageHeader = ({ locale }: { locale: string }) => {
  return (
    <Box
      sx={{
        padding: "16px",
        textAlign: { xs: "center", md: "center" },
        py: "40px",
      }}
    >
      <Typography variant="h4" color="#87226C" fontWeight={500} >
        {locale === "ar" ? "قصص الكفالة" : "Kafala Stories"}
      </Typography>
    </Box>
  );
};

export default StoriesPageHeader;
