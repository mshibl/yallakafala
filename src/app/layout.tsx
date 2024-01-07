import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import AppTheme from "../utils/AppTheme";

export const metadata: Metadata = {
  title: "Yalla Kafala",
  description: "Yalla Kafala",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CssBaseline />
      <ThemeProvider theme={AppTheme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
