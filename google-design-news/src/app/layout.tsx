import Header from "@/components/Header/Header";
import Providers from "@/services/providers/service-providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Google News",
  description: "Design to News Page from Google Api",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
