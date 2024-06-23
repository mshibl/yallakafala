import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ValueCard } from "./valueCard";

const Values = () => {
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
        Our Values
      </Typography>
      <Grid spacing={7} container>
        <ValueCard
          title="Inclusion"
          description="We condemn all forms of discrimination. Everyone deserves equal access to opportunities and resources."
          image="/images/inclusion.png"
        />
        <ValueCard
          title="Community"
          description="Family comes first. We empower and provide high-quality services to our teams, partners, orphans, and kafala families"
          image="/images/community.png"
        />
        <ValueCard
          title="Collaboration"
          description="Everyone adds value to our journey. We act as liaisons between our staff and stakeholders to ensure a better future for our beneficiaries."
          image="/images/collaboration.png"
        />
        <ValueCard
          title="Compassion"
          description="We reach our beneficiaries with empathy, kindness, understanding, and respect, providing solutions for their challenges."
          image="/images/compassion.png"
        />
      </Grid>
    </Box>
  );
};

export default Values;
