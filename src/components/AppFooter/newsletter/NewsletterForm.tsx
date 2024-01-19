import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

const NewsletterForm = () => {
  const t = useTranslations("AppFooter.newsletter");

  return (
    <Grid
      item
      sx={{
        pb: 13,
      }}
    >
      <Box>
        <Typography
          sx={{
            pb: 3.5,
          }}
          variant="h4"
        >
          {t("newsletterForm.title")}
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            sx={{
              mb: 3.5,
              width: "230px",
              bgcolor: "#FFFFFF",
              borderRadius: "4px",
              borderColor: "#AFB6C0",
              placeholder: {
                color: "#74808D",
              },
            }}
            size="small"
            id="outlined-basic"
            placeholder={t("newsletterForm.inputPlaceholder")}
            variant="outlined"
          />
          <br />
          <Button color="secondary" disableElevation variant="contained">
            {t("newsletterForm.buttonText")}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default NewsletterForm;
