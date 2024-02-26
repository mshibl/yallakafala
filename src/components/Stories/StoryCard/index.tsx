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
      <Box display="flex">
        <Box
          position="relative"
          textAlign="center"
          height={{ xs: 150, md: 250 }}
          width={{ xs: 150, md: 250 }}
          minHeight="100%"
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
        <Box flexBasis={{ xs: "100%", md: "50%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {locale === "ar" ? story.arabic_title : story.english_title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                WebkitLineClamp: { xs: 2, md: 6 },
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
              }}
            >
              {locale === "ar"
                ? story.arabic_description
                : story.english_description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={`/${locale}/stories/${story.id}`}>
              <Button size="small">
                {locale === "ar" ? "اقرأ المزيد" : "Read More"}
              </Button>
            </Link>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
}
