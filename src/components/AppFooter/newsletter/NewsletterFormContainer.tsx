import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import NewsletterForm from "./NewsletterForm";

const NewsletterFormContainer = () => {
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
          variant="h6"
          color="#ffffff"
          fontWeight={700}
        >
          {t("newsletterForm.title")}
        </Typography>
        <NewsletterForm
          placeholder={t("newsletterForm.inputPlaceholder")}
          submitText={t("newsletterForm.buttonText")}
        />
        {/* <form
          noValidate
          autoComplete="off"
          action="/"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
        >
          <TextField
            sx={{
              mb: 3.5,
              width: "230px",
              bgcolor: "#FFFFFF",
              borderRadius: "4px",
              borderColor: "#AFB6C0",
              name: "b_24bb16c53dccaf6efb1b67784_35198fff85",
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
          <Button
            color="secondary"
            disableElevation
            variant="contained"
            type="submit"
          >
            {t("newsletterForm.buttonText")}
          </Button>
        </form> */}
      </Box>
    </Grid>
  );
};

export default NewsletterFormContainer;
