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
        padding: 0,
        paddingBottom: "10px",
      }}
    >
      <Link href={url}>
        <Typography variant="h6">{title}</Typography>
      </Link>
    </ListItem>
  );
};

export default AppListItem;
