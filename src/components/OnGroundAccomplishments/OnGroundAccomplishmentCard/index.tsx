import React from "react";
import Image from "next/image";
import { Box, Button, Dialog } from "@mui/material";
import { truncateString } from "@/src/utils/string-utils";

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
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const title =
    locale === "en" ? englishAccomplishmentTitle : arabicAccomplishmentTitle;

  const description =
    locale === "en"
      ? englishAccomplishmentDescription
      : arabicAccomplishmentDescription;

  const imgAlt = locale === "en" ? englishImgAlt : arabicImgAlt;

  return (
    <Box>
      <Box width="280px" height="500px">
        <CardContent
          title={title}
          description={description}
          imgAlt={imgAlt}
          imgSrc={imgSrc}
          locale={locale}
          onClickReadMore={() => {
            setDialogOpen(true);
          }}
        />
        <Dialog
          open={dialogOpen}
          onClose={() => {
            setDialogOpen(false);
          }}
        >
          <CardContent
            title={title}
            description={description}
            imgAlt={imgAlt}
            imgSrc={imgSrc}
            locale={locale}
            fullContent={true}
          />
        </Dialog>
      </Box>
    </Box>
  );
};

const CardContent = ({
  title,
  description,
  imgSrc,
  imgAlt,
  locale,
  fullContent,
  onClickReadMore,
}: {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  locale: string;
  fullContent?: boolean;
  onClickReadMore?: () => void;
}) => {
  return (
    <Box>
      <Box
        justifyContent="center"
        position="relative"
        display="flex"
        width="100%"
        height="200px"
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill={true}
          style={{
            objectFit: "cover",
            borderRadius: fullContent ? "0" : "10px 10px 0 0",
          }}
        />
      </Box>
      <Box
        padding="10px"
        height={fullContent ? "100%" : "300px"}
        border="2px solid #B9D7E0"
        borderRadius={fullContent ? "0" : "0 0 10px 10px"}
        display="flex"
        flexDirection="column"
      >
        <Box fontWeight="bold" lineHeight={1.5} px="8px">
          {title}
        </Box>
        <Box
          flex={1}
          display="flex"
          lineHeight={1.5}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box p="8px">
            {fullContent ? description : truncateString(description, 120)}
          </Box>

          {!fullContent && description.length > 120 && (
            <Box
              display="flex"
              justifyContent="flex-end"
              padding="8px"
              paddingBottom="0"
            >
              <Button
                variant="text"
                onClick={onClickReadMore}
                style={{
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: "# ",
                }}
              >
                {locale === "en" ? "Read More..." : "...اقراء المزيد"}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AccomplishmentCard;
