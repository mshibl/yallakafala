import { Box } from "@mui/material";
import Image from "next/image";

const AchievementItem = ({
  locale,
  color,
  imgSrc,
  englishImgAlt,
  arabicImgAlt,
  achievementNumber,
  englishPrefix,
  arabicPrefix,
  englishAchievementDescription,
  arabicAchievementDescription,
}: {
  locale: string;
  color: string;
  imgSrc: string;
  englishImgAlt: string;
  arabicImgAlt: string;
  achievementNumber: string;
  englishPrefix?: string;
  arabicPrefix?: string;
  englishAchievementDescription: string;
  arabicAchievementDescription: string;
}) => {
  return (
    <Box bgcolor="white" display="flex" flexDirection="column">
      <Box bgcolor={color}>
        <Image
          src={imgSrc}
          alt={locale === "en" ? englishImgAlt : arabicImgAlt}
          width="255"
          height="150"
        />
      </Box>
      <Box
        padding="10px"
        lineHeight={1.3}
        color={color}
        bgcolor="#ffffff"
        height="166px"
        width="255px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {englishPrefix && arabicPrefix && (
          <Box fontWeight="bold" fontSize="20px">
            {locale === "en" ? englishPrefix : arabicPrefix}
          </Box>
        )}
        <Box fontWeight="700" fontSize="54px" lineHeight={1.3}>
          {achievementNumber}
        </Box>
        <Box fontWeight="bold" fontSize="20px" textAlign="center">
          {locale === "en"
            ? englishAchievementDescription
            : arabicAchievementDescription}
        </Box>
      </Box>
    </Box>
  );
};

export default AchievementItem;
