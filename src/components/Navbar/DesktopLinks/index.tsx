import * as React from "react";
import Box from "@mui/material/Box";
import { useLocale, useTranslations } from "next-intl";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import Link from "next/link";
import {
  ABOUT_US_PAGE,
  CAMPAIGNS_PAGE,
  CONTACT_US_PAGE,
  FAQS_PAGE,
  KAFALA_PARTNERS_PAGE,
  KAFALA_STEPS_PAGE,
  KAFALA_STORIES_PAGE,
  NEWSLETTER_SIGN_UP_PAGE,
  NEWS_AND_UPDATES_PAGE,
  PAGE_PATHNAMES,
  SERVICES_PAGE,
  VOLUNTEER_PAGE,
  WHAT_IS_KAFALA_PAGE,
} from "@/src/constants/pages";

const DESKTOP_HIGHLIGHTED_PAGES = [
  KAFALA_STEPS_PAGE,
  KAFALA_STORIES_PAGE,
  WHAT_IS_KAFALA_PAGE,
  ABOUT_US_PAGE,
  FAQS_PAGE,
];

const KNOWLEDGE_CENTER_PAGES = [
  KAFALA_STEPS_PAGE,
  KAFALA_PARTNERS_PAGE,
  NEWS_AND_UPDATES_PAGE,
  CAMPAIGNS_PAGE,
  SERVICES_PAGE,
  NEWSLETTER_SIGN_UP_PAGE,
  CONTACT_US_PAGE,
  VOLUNTEER_PAGE,
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

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", lg: "flex" },
        justifyContent: "flex-end",
      }}
    >
      <>
        {/* <Button
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
        </Button> */}

        {DESKTOP_HIGHLIGHTED_PAGES.map((pageName) => (
          <Link
            key={pageName}
            href={`/${locale}${PAGE_PATHNAMES[pageName]}`}
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
          {KNOWLEDGE_CENTER_PAGES.map((pageName) => (
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
