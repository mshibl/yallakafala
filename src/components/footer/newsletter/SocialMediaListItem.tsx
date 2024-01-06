import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";

interface SocialMediaListItemProps {
  src: string;
  url: string;
}
const SocialMediaListItem: React.FC<SocialMediaListItemProps> = ({
  src,
  url,
}) => {
  return (
    <Grid
      item
      sx={{
        pr: 3.5,
      }}
    >
      <Link href={url}>
        <Box component="img" src={src} />
      </Link>
    </Grid>
  );
};

export default SocialMediaListItem;
