"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SocialMediaListItem from "./SocialMediaListItem";
import Typography from "@mui/material/Typography";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import X from "@mui/icons-material/X";
import YouTube from "@mui/icons-material/YouTube";

interface SocialMediaItem {
  url: string;
  icon?: any;
}

const socialMediaItems: SocialMediaItem[] = [
  {
    icon: <FacebookRoundedIcon fontSize="small" htmlColor="#ffffff" />,
    url: "/",
  },
  {
    icon: <Instagram fontSize="small" htmlColor="#ffffff" />,
    url: "/",
  },
  {
    icon: <YouTube fontSize="small" htmlColor="#ffffff" />,
    url: "/",
  },
  {
    icon: <X fontSize="small" htmlColor="#ffffff" />,
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
        <Grid justifyContent="flex-start" container sx={{ pt: 4 }}>
          {socialMediaItems.map((item, index) => (
            <SocialMediaListItem key={index} url={item.url} icon={item.icon} />
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default SocialMediaList;
