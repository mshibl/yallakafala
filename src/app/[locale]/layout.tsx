import ThemeProvider from "@mui/material/styles/ThemeProvider";
import type { Metadata } from "next";
import AppTheme from "@/src/utils/AppTheme";
import "@/src/utils/global.css";

export const metadata: Metadata = {
  title: "Yalla Kafala",
  description: "Yalla Kafala",
};

const LocaleLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: any };
}) => {
  return (
    <html dir={locale === "en" ? "ltr" : "rtl"} lang={locale}>
      <ThemeProvider theme={AppTheme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
};
export default LocaleLayout;
