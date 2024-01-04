import type { Metadata } from "next";
import { Almarai } from "next/font/google";

const almarai = Almarai({
  weight: ["400", "700"], // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["arabic"], // if single subset, otherwise you use array like ['arabic', 'latin']
});
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
    <html lang="en" className={almarai.className}>
      <body>{children}</body>
    </html>
  );
}
