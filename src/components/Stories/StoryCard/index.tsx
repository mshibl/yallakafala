import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function StoryCard({
  locale,
  story,
  sx,
}: {
  locale: string;
  story: any;
  sx?: SxProps;
}) {
  return (
    <Card sx={sx}>
      <Link href={`/${locale}/stories/${story.id}`}>
        <Box display="flex">
          <Button sx={{ textAlign: "initial", p: 0 }}>
            <Box
              position="relative"
              textAlign="center"
              height={240}
              width={240}
              display="flex"
              alignSelf="center"
            >
              <Image
                fill={true}
                style={{ objectFit: "cover", minHeight: "100%" }}
                src={story.image_link}
                alt={story.title}
              />
            </Box>
          </Button>
          <Box flexBasis="70%">
            <CardContent>
              <Typography gutterBottom variant="body1" fontWeight={600} fontSize="18px"  component="div">
                {locale === "ar" ? story.arabic_title : story.english_title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  WebkitLineClamp: 4,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {locale === "ar"
                  ? story.arabic_description
                  : story.english_description}
              </Typography>
              <Button size="small">
                {locale === "ar" ? "اقرأ الحكاية" : "Read the story"}
              </Button>
            </CardContent>
            {/* <CardActions>
            </CardActions> */}
          </Box>
        </Box>
      </Link>
    </Card>
  );
}
