import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: {
    default: "Zimmerei Stark - Individuell, nachhaltig, modern",
    template: "%s | Zimmerei Stark",
  },
  description:
    "Zimmerei Stark - Ihr Partner für Holzbau, KomplettHausbau, ModulBau und mehr. Familienunternehmen seit 1920 mit über 100 Jahren Erfahrung.",
  keywords: [
    "Zimmerei",
    "Holzbau",
    "Hausbau",
    "Auhausen",
    "Stark",
    "KomplettHausbau",
    "ModulBau",
    "Schreinerei",
  ],
  authors: [{ name: "Zimmerei Stark GmbH" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://stark-inspiration.de",
    siteName: "Zimmerei Stark",
    title: "Zimmerei Stark - Individuell, nachhaltig, modern",
    description:
      "Ihr Partner für Holzbau und KomplettHausbau seit 1920. Familienunternehmen in 5. Generation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
