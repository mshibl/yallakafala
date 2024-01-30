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
import { useLocale, useTranslations } from "next-intl";
import { HIGHLIGHTED_PAGES } from "@/src/constants/pages";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";

// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const pages = [
  {
    name: "مركز المعرفة",
    link: "/kafala_stories",
  },
  {
    name: "قصص الكفالة",
    link: "/kafala_stories",
  },
  {
    name: "ما هى الكفالة؟",
    link: "/what_is_kafala",
  },
  {
    name: "عن المؤسسة",
    link: "/about_us",
  },
];

function Navbar() {
  const t = useTranslations("Navbar");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname() || "/";
  console.log("pathname", pathname);
  const query = useSearchParams();

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

  const switchLang = () => {
    // const { asPath } = router;
    // // change just the locale and maintain all other route information including href's query
    // router.push(pathname || "/", {
    //   locale: locale === "en" ? "ar" : "en",
    // });

    const newLocale = locale === "en" ? "ar" : "en";
    const updatedPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(updatedPathname);

    // router.replace(pathname || "/", {
    //   locale: locale === "en" ? "ar" : "en",
    // });

    // router.replace(pathname || "/", { locale: locale === "en" ? "ar" : "en" });
    // router.push(locale === "en" ? "/ar" : "/en");
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
        direction: "ltr", // Navbar should always be LTR
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
              priority={true}
              src="/images/yk_logo.svg"
              alt={t("logo.alt")}
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              ml: 4,
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

        {/* Desktop Links */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          {HIGHLIGHTED_PAGES.map((pageName) => (
            <Link
              key={pageName}
              href={t(`pages.${pageName}.link`)}
              style={{ textDecoration: "none", marginLeft: "30px" }}
            >
              <Button
                key={pageName}
                sx={{
                  color: "#000000",
                  fontSize: "16px",
                  my: 2,
                  display: "block",
                  textTransform: "none",
                }}
              >
                {t(`pages.${pageName}.name`)}
              </Button>
            </Link>
          ))}
        </Box>

        {/* Donate Button */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            marginLeft: "36px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontWeight: 600,
              backgroundColor: "#87226C",
              color: "#FFFFFF",
              fontSize: "14px",
              borderRadius: "24px",
              textTransform: "none",
            }}
          >
            {t("donateButton.text")}
          </Button>
        </Box>

        {/* Locale */}
        <Box
          sx={{
            marginLeft: "36px",
          }}
        >
          <Tooltip
            title={
              locale === "en" ? "استخدم اللغة العربية" : "Switch to English"
            }
          >
            <IconButton onClick={switchLang} sx={{ color: "#1E3050" }}>
              <LanguageIcon />
              <Box
                ml={0.5}
                alignSelf={locale === "en" ? "flex-start" : "center"}
                fontWeight={400}
                fontSize="16px"
              >
                {locale === "en" ? "ع" : "EN"}
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
export default Navbar;
