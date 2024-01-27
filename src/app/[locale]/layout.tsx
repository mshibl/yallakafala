import "@/src/utils/global.css";
import AppTheme from "@/src/utils/AppTheme";
import type { Metadata } from "next";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline } from "@mui/material";

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
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={AppTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};
export default LocaleLayout;
