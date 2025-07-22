import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Irving Dinh",
  description:
    "Just another software engineer based in Ho Chi Minh City, Viet Nam",
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
