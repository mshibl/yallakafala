import Grid from "@mui/material/Grid";
import QuickLinksList from "./quickLinks/QuickLinksList";
import ContactList from "./contact/ContactList";
import CopyrightStatement from "./CopyrightStatement";
import SocialMediaList from "./newsletter/SocialMediaList";
import SilverBadge from "./newsletter/SilverBadge";
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
      <Grid
        sx={{ mb: { xs: 30, md: 0 } }}
        container
        direction={"column"}
        item
        xs={12}
        md={4}
        >
        {/* <NewsletterList /> */}
        <SocialMediaList />
        <SilverBadge />
      </Grid>
      <CopyrightStatement />
    </Grid>
  );
};

export default AppFooter;
