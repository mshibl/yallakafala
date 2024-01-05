import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";

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
      <body>
        <CssBaseline />
        {children}</body>
    </html>
  );
}
