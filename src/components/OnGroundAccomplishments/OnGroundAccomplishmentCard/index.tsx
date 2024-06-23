import { Box } from "@mui/material";
import Image from "next/image";

const AccomplishmentCard = ({
  imgSrc,
  locale,
  arabicImgAlt,
  englishImgAlt,
  arabicAccomplishmentTitle,
  englishAccomplishmentTitle,
  arabicAccomplishmentDescription,
  englishAccomplishmentDescription,
}: {
  imgSrc: string;
  locale: string;
  arabicImgAlt: string;
  englishImgAlt: string;
  arabicAccomplishmentTitle: string;
  englishAccomplishmentTitle: string;
  arabicAccomplishmentDescription: string;
  englishAccomplishmentDescription: string;
}) => {
  return (
    <Box>
      <Box width="280px" height="350px">
        <Box
          justifyContent="center"
          position="relative"
          display="flex"
          width="100%"
          height="200px"
        >
          <Image
            src={imgSrc}
            alt={locale === "en" ? englishImgAlt : arabicImgAlt}
            fill={true}
            style={{
              objectFit: "cover",
              borderRadius: "10px 10px 0 0",
            }}
          />
        </Box>
        <Box
          padding="10px"
          height="150px"
          border="2px solid #B9D7E0"
          borderRadius="0 0 10px 10px"
        >
          <Box fontWeight="bold" lineHeight={1.5}>
            {locale === "en"
              ? englishAccomplishmentTitle
              : arabicAccomplishmentTitle}
          </Box>
          <Box lineHeight={1.5}>
            {locale === "en"
              ? englishAccomplishmentDescription
              : arabicAccomplishmentDescription}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AccomplishmentCard;
