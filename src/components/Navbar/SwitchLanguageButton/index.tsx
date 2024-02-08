import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useLocale } from "next-intl";
import { IconButton, SxProps, Tooltip } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import LanguageIcon from "@mui/icons-material/Language";

function SwitchLanguageButton() {
  const locale = useLocale();
  const pathname = usePathname() || "/";
  const router = useRouter();

  const handleSwitchLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const updatedPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(updatedPathname);
  };

  return (
    <Box sx={{ marginLeft: "36px" }}>
      <Tooltip
        title={locale === "en" ? "استخدم اللغة العربية" : "Switch to English"}
      >
        <IconButton onClick={handleSwitchLanguage} sx={{ color: "#1E3050" }}>
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
    </Box>
  );
}
export default SwitchLanguageButton;
