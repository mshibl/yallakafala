import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SocialMediaListItem from "./SocialMediaListItem";
import Typography from "@mui/material/Typography";

interface SocialMediaItem {
  src: string;
  url: string;
}
const socialMediaItems: SocialMediaItem[] = [
  {
    src: "fbIcon.png",
    url: "/",
  },
  {
    src: "igIcon.png",
    url: "/",
  },
  {
    src: "ytIcon.png",
    url: "/",
  },
  {
    src: "xIcon.png",
    url: "/",
  },
];

const SocialMediaList = () => {
  return (
    <Grid
      item
      sx={{
        pb: 13,
      }}
    >
      <Box>
        <Typography variant="h4">Follow us</Typography>
        <Grid justifyContent="flex-start" container>
          {socialMediaItems.map((item, index) => (
            <SocialMediaListItem key={index} src={item.src} url={item.url} />
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default SocialMediaList;
