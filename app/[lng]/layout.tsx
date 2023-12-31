import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Card } from "@nextui-org/react";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const { lng } = params;

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Providers>
          <Navbar lng={lng} />
          <Card className="min-h-screen rounded-none">{children}</Card>
          <Footer lng={lng} />
        </Providers>
      </body>
    </html>
  );
}
