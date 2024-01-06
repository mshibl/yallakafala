import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";

interface AppListItemProps {
  title: string;
  url: string;
}
const AppListItem: React.FC<AppListItemProps> = ({ title, url }) => {
  return (
    <ListItem
      sx={{
        p: 0,
        pb: 5,
      }}
    >
      <Link href={url}>
        <Typography variant="h6">{title}</Typography>
      </Link>
    </ListItem>
  );
};

export default AppListItem;
