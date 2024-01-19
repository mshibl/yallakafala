import Grid from "@mui/material/Grid";
import NewsletterFormContainer from "./NewsletterFormContainer";
import SocialMediaList from "./SocialMediaList";
import SilverBadge from "./SilverBadge";

const NewsletterList = () => {
  return (
    <>
      <Grid
        container
        justifyContent="flex-start"
        direction={"column"}
        item
        xs={12}
        md={4}
      >
        <NewsletterFormContainer />
        <SocialMediaList />
        <SilverBadge />
      </Grid>
    </>
  );
};

export default NewsletterList;
