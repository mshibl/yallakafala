"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../Logo";
import SwitchLanguageButton from "./SwitchLanguageButton";
import DesktopLinks from "./DesktopLinks";
import MobileLinks from "./MobileLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [anchorPagesMenu, setAnchorPagesMenu] =
    React.useState<null | HTMLElement>(null);

  const handleOpenPagesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorPagesMenu(event.currentTarget);
  };

  const [anchorAboutUsMenu, setAnchorAboutUsMenu] =
    React.useState<null | HTMLElement>(null);

  const handleClosePagesMenu = () => {
    setAnchorPagesMenu(null);
  };

  const handleOpenAboutUsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorAboutUsMenu(event.currentTarget);
  };

  const handleCloseAboutUsMenu = () => {
    setAnchorAboutUsMenu(null);
  };

  const pathname = usePathname();
  const activePage = pathname.split("/")[2];

  return (
    <AppBar
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        direction: "ltr", // Navbar should always be LTR
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        borderBottom: "1px solid #D1D1D1",
      }}
    >
      <Toolbar sx={{ px: 0 }}>
        {/* Logo */}
        <Box key="logo" sx={{ ml: "24px", flexGrow: 1 }}>
          <Link href="/">
            <Logo />
          </Link>
        </Box>

        {/* Desktop Links */}
        <DesktopLinks
          key="desktop-links"
          activePage={activePage}
          handleOpenAboutUsMenu={handleOpenAboutUsMenu}
          handleCloseAboutUsMenu={handleCloseAboutUsMenu}
          anchorAboutUsMenu={anchorAboutUsMenu}
        />

        {/* Language Selector */}
        <SwitchLanguageButton key="switch-language-button" />

        {/* Mobile */}
        <MobileLinks
          key="mobile-links"
          anchorPagesMenu={anchorPagesMenu}
          handleOpenPagesMenu={handleOpenPagesMenu}
          handleClosePagesMenu={handleClosePagesMenu}
        />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
