import Grid from "@mui/material/Grid";
import QuickLinksList from "./quickLinks/QuickLinksList";
import ContactList from "./contact/ContactList";
import NewsletterList from "./newsletter/NewsletterList";
import CopyrightStatement from "./CopyrightStatement";
import { Box } from "@mui/material";

const AppFooter: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        bgcolor: "primary.main",
        color: "#ffffff",
        px: { xs: 20, md: 45 },
        pt: { xs: 17, md: 34 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <QuickLinksList />
      <ContactList />
      <NewsletterList />
      <CopyrightStatement />
    </Grid>
  );
};

export default AppFooter;
