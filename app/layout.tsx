import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Partner Hub",
  description:
    "A premium landing page connecting families and care providers with a modern, gradient-rich design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
