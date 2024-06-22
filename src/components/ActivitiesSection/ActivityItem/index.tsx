import { Box } from "@mui/material";

const ActivityItem = ({
  locale,
  englishTitle,
  arabicTitle,
  englishDescription,
  arabicDescription,
  isMD,
}: {
  locale: string;
  englishTitle: string;
  arabicTitle: string;
  englishDescription: string;
  arabicDescription: string;
  isMD: boolean;
}) => {
  return (
    <Box
      marginBottom="30px"
      fontSize={isMD ? "24px" : "20px"}
      lineHeight={isMD ? "38px" : "32px"}
    >
      <Box fontWeight="bold">
        {locale === "en" ? englishTitle : arabicTitle}
      </Box>
      {locale === "en" ? englishDescription : arabicDescription}
    </Box>
  );
};

export default ActivityItem;
