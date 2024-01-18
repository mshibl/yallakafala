"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "next/image";
import Link from "next/link";

// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const pages = [
  {
    name: "About Us",
    link: "/about_us",
  },
  {
    name: "What is Kafala",
    link: "/what_is_kafala",
  },
  {
    name: "Kafala Stories",
    link: "/kafala_stories",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        borderBottom: "1px solid #D1D1D1",
      }}
    >
      <Toolbar sx={{ px: 0 }}>
        {/* Logo */}
        <Box
          sx={{
            ml: 1.5,
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative", width: 50, height: 50 }}>
            <Image
              src="/images/yk_logo.svg"
              alt="logo"
              fill={true}
              objectFit="contain"
            />
          </Box>
          <Box
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 1,
              fontWeight: 500,
              color: "#000000",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <Box
              sx={{ fontFamily: "inter", fontSize: { xs: "12px", md: "15px" } }}
            >
              Yalla Kafala
            </Box>
            <Box sx={{ fontSize: { xs: "12px", md: "15px" } }}>
              اكفل طفل في بيتك
            </Box>
          </Box>
        </Box>

        {/* Desktop */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          {pages.map((page) => (
            <Link
              key={page.name}
              href={page.link}
              style={{ textDecoration: "none" }}
              // onClick={handleCloseNavMenu}
            >
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "#000000",
                  fontSize: "16px",
                  my: 2,
                  display: "block",
                  textTransform: "none",
                }}
              >
                {page.name}
              </Button>
            </Link>
          ))}
        </Box>

        {/* Locale */}
        <Box>
          <Tooltip title="Switch to Arabic">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{ p: 0, color: "#1E3050" }}
            >
              <LanguageIcon />
              <Box
                alignSelf="flex-start"
                ml={0.5}
                fontWeight={400}
                fontSize="16px"
              >
                ع
              </Box>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Mobile */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            // color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Link
                  key={page.name}
                  href={page.link}
                  style={{ textDecoration: "none" }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
