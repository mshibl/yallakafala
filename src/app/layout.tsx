import ThemeProvider from "@mui/material/styles/ThemeProvider";
import type { Metadata } from "next";
import AppTheme from "../utils/AppTheme";
import "../utils/global.css";

export const metadata: Metadata = {
  title: "Yalla Kafala",
  description: "Yalla Kafala",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <ThemeProvider theme={AppTheme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
};
export default RootLayout;
