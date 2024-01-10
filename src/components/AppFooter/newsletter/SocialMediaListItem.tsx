import Grid from "@mui/material/Grid";
import Link from "next/link";

interface SocialMediaListItemProps {
  url: string;
  icon: any;
}
const SocialMediaListItem: React.FC<SocialMediaListItemProps> = ({
  url,
  icon,
}) => {
  return (
    <Grid
      item
      sx={{
        pr: 3.5,
      }}
    >
      <Link href={url}>
        {icon}
      </Link>
    </Grid>
  );
};

export default SocialMediaListItem;
