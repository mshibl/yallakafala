"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../Logo";
import DonateButton from "../DonateButton";
import SwitchLanguageButton from "./SwitchLanguageButton";
import DesktopLinks from "./DesktopLinks";
import MobileLinks from "./MobileLinks";
import Link from "next/link";

function Navbar() {
  const [anchorPagesMenu, setAnchorPagesMenu] =
    React.useState<null | HTMLElement>(null);

  const [anchorKnowledgeCenter, setAnchorKnowledgeCenter] =
    React.useState<null | HTMLElement>(null);

  const handleOpenPagesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorPagesMenu(event.currentTarget);
  };

  const handleOpenKnowledgeCenterMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorKnowledgeCenter(event.currentTarget);
  };

  const handleClosePagesMenu = () => {
    setAnchorPagesMenu(null);
  };

  const handleCloseKnowledgeCenterMenu = () => {
    setAnchorKnowledgeCenter(null);
  };

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
        <Box sx={{ ml: "24px", flexGrow: 1 }}>
          <Link href="/">
            <Logo />
          </Link>
        </Box>

        {/* Desktop Links */}
        <DesktopLinks
          anchorKnowledgeCenter={anchorKnowledgeCenter}
          handleOpenKnowledgeCenterMenu={handleOpenKnowledgeCenterMenu}
          handleCloseKnowledgeCenterMenu={handleCloseKnowledgeCenterMenu}
        />

        {/* Donate Button */}
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            marginLeft: "36px",
          }}
        >
          <DonateButton />
        </Box>

        {/* Language Selector */}
        <SwitchLanguageButton />

        {/* Mobile */}
        <MobileLinks
          anchorPagesMenu={anchorPagesMenu}
          handleOpenPagesMenu={handleOpenPagesMenu}
          handleClosePagesMenu={handleClosePagesMenu}
        />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
