import Providers from "@/services/providers/service-providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Google News",
  description: "Design to News Page from Google Api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
