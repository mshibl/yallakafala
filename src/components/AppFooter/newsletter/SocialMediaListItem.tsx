"use client";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import X from "@mui/icons-material/X";
import YouTube from "@mui/icons-material/YouTube";
import { Language } from "@mui/icons-material";

interface SocialMediaListItemProps {
  name: string;
  language: string;
}
const SocialMediaListItem: React.FC<SocialMediaListItemProps> = ({
  name,
  language,
}) => {
  let url = "";
  let icon: any;
  switch (name) {
    case "facebook":
      url = "https://www.facebook.com/YallaKafala";
      icon = <FacebookRoundedIcon fontSize="small" htmlColor="#ffffff" />;
      break;
    case "instagram":
      url = "https://www.instagram.com/yallakafala";
      icon = <Instagram fontSize="small" htmlColor="#ffffff" />;
      break;
    case "youtube":
      url = "https://www.youtube.com/Yalla%20Kafala";
      icon = <YouTube fontSize="small" htmlColor="#ffffff" />;
      break;
    case "twitter":
      url = "https://twitter.com/yallakafala";
      icon = <X fontSize="small" htmlColor="#ffffff" />;
      break;
    default:
  }
  return (
    <Grid
      item
      sx={{
        pr: language === "en" ? 3.5 : 0,
        pl: language === "ar" ? 3.5 : 0,
      }}
    >
      <Link href={url}>{icon}</Link>
    </Grid>
  );
};

export default SocialMediaListItem;
