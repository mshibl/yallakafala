import { Box, SxProps } from "@mui/material";
import Link from "next/link";

function StoryPageHeader({
  locale,
  title,
  sx,
}: {
  locale: string;
  title: string;
  sx: SxProps;
}) {
  return (
    <Box sx={sx}>
      <Link href={`/${locale}/stories`}>
        {locale === "ar" ? "قصص الكفالة" : "Kafala Stories"}
      </Link>
      <Box style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</Box>
    </Box>
  );
}

export default StoryPageHeader;
