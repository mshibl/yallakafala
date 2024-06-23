import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const ValueCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "32px",
          paddingBottom: { xs: "25px", md: "0" },
          paddingX: { xs: "15px", md: "40px" },
          backgroundColor: "#FFFFFF",
          borderRadius: "5px",
          marginBottom: "20px",
          minHeight: { xs: "auto", md: "365px" },
          boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
        }}
      >
        <Box
          component={"img"}
          src={image}
          alt={title}
          sx={{
            width: { xs: "66px", md: "130px" },
            height: { xs: "66px", md: "130px" },
            marginBottom: { xs: "5px", md: "20px" },
          }}
        ></Box>

        <Typography
          sx={{
            fontSize: { xs: "18px", md: "30px" },
            fontWeight: "bold",
            lineHeight: { xs: "25px", md: "32px" },
            color: "#000000",
            textAlign: "center",
            marginBottom: { xs: "5px", md: "10px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "24px" },
            lineHeight: { xs: "25px", md: "32px" },
            color: "#000000",
            textAlign: "center",
          }}
          variant="body1"
        >
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};
