import * as React from "react";
import Box from "@mui/material/Box";
import { useLocale, useTranslations } from "next-intl";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import Link from "next/link";
import {
  ABOUT_US_PAGE,
  ALL_PAGES,
  KAFALA_STORIES_PAGE,
  WHAT_IS_KAFALA_PAGE,
} from "@/src/constants/pages";

const DESKTOP_HIGHLIGHTED_PAGES = [
  KAFALA_STORIES_PAGE,
  WHAT_IS_KAFALA_PAGE,
  ABOUT_US_PAGE,
];

function DesktopLinks({
  anchorKnowledgeCenter,
  handleOpenKnowledgeCenterMenu,
  handleCloseKnowledgeCenterMenu,
}: {
  anchorKnowledgeCenter: HTMLElement | null;
  handleOpenKnowledgeCenterMenu: (e: React.MouseEvent<HTMLElement>) => void;
  handleCloseKnowledgeCenterMenu: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const knowledgeCenterPages = ALL_PAGES.filter((pageName) =>
    DESKTOP_HIGHLIGHTED_PAGES.includes(pageName)
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", lg: "flex" },
        justifyContent: "flex-end",
      }}
    >
      <>
        <Button
          onClick={(e) => {
            handleOpenKnowledgeCenterMenu(e);
          }}
          sx={{
            my: 2,
            color: "#0000000",
            fontSize: "16px",
            textTransform: "none",
          }}
        >
          {locale === "en" ? "Knowledge Center" : "مركز المعرفة"}
          <ArrowDropDown />
        </Button>

        {DESKTOP_HIGHLIGHTED_PAGES.map((pageName) => (
          <Link
            key={pageName}
            href={t(`pages.${pageName}.link`)}
            style={{ textDecoration: "none", marginLeft: "30px" }}
          >
            <Button
              key={pageName}
              sx={{
                my: 2,
                color: "#0000000",
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              {t(`pages.${pageName}.name`)}
            </Button>
          </Link>
        ))}

        <Menu
          sx={{ mt: "40px" }}
          id="knowledge-center-menu"
          anchorEl={anchorKnowledgeCenter}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted={true}
          open={Boolean(anchorKnowledgeCenter)}
          onClose={handleCloseKnowledgeCenterMenu}
        >
          {knowledgeCenterPages.map((pageName) => (
            <MenuItem
              sx={{ minWidth: "150px" }}
              key={pageName}
              onClick={handleCloseKnowledgeCenterMenu}
            >
              <Typography color="#000000" textAlign="center">
                {t(`pages.${pageName}.name`)}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </>
    </Box>
  );
}

export default DesktopLinks;
