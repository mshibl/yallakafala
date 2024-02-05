import * as React from "react";
import Box from "@mui/material/Box";
import { useTranslations } from "next-intl";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ALL_PAGES } from "@/src/constants/pages";
import Link from "next/link";

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
        {ALL_PAGES.map((pageName) => (
          <MenuItem
            sx={{ minWidth: "150px" }}
            key={pageName}
            onClick={handleClosePagesMenu}
          >
            <Link
              key={pageName}
              href={t(`pages.${pageName}.link`)}
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
