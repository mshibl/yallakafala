import * as React from "react";
import Box from "@mui/material/Box";
import { useLocale, useTranslations } from "next-intl";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ABOUT_US_PAGE,
  DONATE_PAGE,
  FAQS_PAGE,
  KAFALA_STEPS_PAGE,
  KAFALA_STORIES_PAGE,
  PAGE_PATHNAMES,
  WHAT_IS_KAFALA_PAGE,
} from "@/src/constants/pages";
import Link from "next/link";

const MOBILE_LINKS_PAGES = [
  DONATE_PAGE,
  ABOUT_US_PAGE,
  KAFALA_STEPS_PAGE,
  KAFALA_STORIES_PAGE,
  WHAT_IS_KAFALA_PAGE,
  FAQS_PAGE,
];

function MobileLinks({
  anchorPagesMenu,
  handleOpenPagesMenu,
  handleClosePagesMenu,
}: {
  anchorPagesMenu: HTMLElement | null;
  handleOpenPagesMenu: (e: React.MouseEvent<HTMLElement>) => void;
  handleClosePagesMenu: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const t = useTranslations("Navbar");
  const locale = useLocale();

  return (
    <Box sx={{ display: { xs: "flex", lg: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="mobile-pages-menu"
        aria-haspopup="true"
        onClick={handleOpenPagesMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="mobile-pages-menu"
        anchorEl={anchorPagesMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorPagesMenu)}
        onClose={handleClosePagesMenu}
        sx={{
          display: { xs: "block", lg: "none" },
        }}
      >
        {MOBILE_LINKS_PAGES.map((pageName) => (
          <MenuItem
            sx={{ minWidth: "200px" }}
            key={pageName}
            onClick={handleClosePagesMenu}
          >
            <Link
              key={pageName}
              href={`/${locale}${PAGE_PATHNAMES[pageName]}`}
              style={{ textDecoration: "none" }}
            >
              <Typography color="#000000" textAlign="center">
                {t(`pages.${pageName}.name`)}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default MobileLinks;
