import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";

interface QuickLinksListItemProps {
  title: string;
  url: string;
}
const QuickLinksListItem: React.FC<QuickLinksListItemProps> = ({
  title,
  url,
}) => {
  return (
    <ListItem
      sx={{
        p: 0,
        pb: 5,
      }}
    >
      <a href={url}>
        <Typography color="#ffffff">
          {title}
        </Typography>
      </a>
    </ListItem>
  );
};

export default QuickLinksListItem;
