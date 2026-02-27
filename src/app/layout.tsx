import "@/styles/tailwind.css";

import { type Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000",
  ),
  title: {
    template: "%s - Irving Dinh",
    default:
      "Irving Dinh - Software engineer, designer, and amateur photographer",
  },
  description:
    "I\u2019m Irving, a software engineer and designer based in Ho Chi Minh City. I\u2019m the founder of Planetaria, where we develop technologies that empower regular people to utilize the AI on their own terms.",
  openGraph: {
    siteName: "Irving Dinh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
