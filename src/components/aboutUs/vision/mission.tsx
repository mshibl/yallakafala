import { Box, Typography } from "@mui/material";
import React from "react";

const Mission = ({ locale }: { locale: string }) => {
  return (
    <Box
      sx={{
        paddingX: { xs: "40px", md: "180px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "50px" },
          fontWeight: "bold",
          marginBottom: { xs: "10px", md: "35px" },
          marginTop: { xs: "28px", md: "100px" },
          lineHeight: "32px",
          color: "primary.main",
        }}
        variant="h2"
      >
        {locale === "en" ? "Mission" : "مهمتنا"}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "16px", md: "24px" },
          lineHeight: { xs: "25px", md: "32px" },
        }}
        variant="body1"
      >
        {locale === "en" ? (
          <>
            Advancing quality care for orphans and growing families by
            advocating, educating, and developing resources. <br />
            <br /> Our mission also extends to developing care arrangements for
            non-Egyptian children, including migrants and refugees, focusing on
            community-based solutions that uphold dignity and security.
          </>
        ) : (
          <>
            تقديم الرعاية ذات الجودة للأيتام وتوسيع الأسر من خلال الترويج
            والتثقيف وتطوير الموارد. <br /> <br /> تمتد مهمتنا أيضًا إلى تطوير
            ترتيبات الرعاية للأطفال غير المصريين، بما في ذلك المهاجرين
            واللاجئين، مع التركيز على الحلول القائمة على المجتمع التي تحافظ على
            الكرامة والأمان.
          </>
        )}
      </Typography>
    </Box>
  );
};

export default Mission;
