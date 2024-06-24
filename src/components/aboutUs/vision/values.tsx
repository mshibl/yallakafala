import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ValueCard } from "./valueCard";

const Values = ({ locale }: { locale: string }) => {
  return (
    <Box
      sx={{
        marginTop: "50px",
        paddingX: { xs: "32px", md: "58px" },
        paddingY: "58px",
        backgroundColor: "secondary.main",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#FFFFFF",
          fontSize: { xs: "24px", md: "50px" },
          marginBottom: { xs: "16px", md: "48px" },
        }}
        variant="h2"
      >
        {locale === "en" ? "Our Values" : "قيمنا"}
      </Typography>
      <Grid spacing={7} container>
        <ValueCard
          title={locale === "en" ? "Inclusion" : "الشمول"}
          description={
            locale === "en"
              ? "We condemn all forms of discrimination. Everyone deserves equal access to opportunities and resources."
              : `
          ندين جميع أشكال التمييز. الجميع يستحق الوصول المتساوي إلى الفرص والموارد.`
          }
          image="/images/inclusion.svg"
        />
        <ValueCard
          title={locale === "en" ? "Community" : "المجتمع"}
          description={
            locale === "en"
              ? "Family comes first. We empower and provide high-quality services to our teams, partners, orphans, and kafala families."
              : ` العائلة تأتي أولاً. نمكن ونقدم خدمات عالية الجودة لفرقنا وشركائنا والأيتام وعائلات الكفالة. `
          }
          image="/images/community.svg"
        />
        <ValueCard
          title={locale === "en" ? "Collaboration" : "التعاون"}
          description={
            locale === "en"
              ? "Everyone adds value to our journey. We act as liaisons between our staff and stakeholders to ensure a better future for our beneficiaries."
              : ` الجميع يضيف قيمة لرحلتنا. نعمل كوسطاء بين موظفينا وأصحاب المصلحة لضمان مستقبل أفضل لمستفيدينا.`
          }
          image="/images/collaboration.svg"
        />
        <ValueCard
          title={locale === "en" ? "Compassion" : "التعاطف"}
          description={
            locale === "en"
              ? "We reach our beneficiaries with empathy, kindness, understanding, and respect, providing solutions for their challenges."
              : ` نصل إلى مستفيدينا بالتعاطف واللطف والفهم والاحترام، ونقدم حلولًا لتحدياتهم.`
          }
          image="/images/compassion.svg"
        />
      </Grid>
    </Box>
  );
};

export default Values;
