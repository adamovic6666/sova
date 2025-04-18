import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/sections/header/Header";
import GoogleAnalytics from "./_components/GoogleAnalytics";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "700", "800"],
});

const myFont = localFont({
  src: "../app/_fonts/georgia-pro.ttf",
  variable: "--font-georgia-pro",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sova.ooo/"),
  applicationName: "Sova Creative Studio",
  title: "Sova Creative Studio | We Make Your Brand Fly",
  description:
    "Sova Creative Studio is a full-service creative team based in Serbia, delivering cost-effective and high-quality visual communication solutions for global brands and local startups.",
  keywords:
    "creative studio Serbia, design agency Serbia, brand identity Serbia, graphic design Serbia, web design Serbia, packaging design Serbia, logo design Serbia, content creation Serbia, visual communication Serbia",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Sova Creative Studio | We Make Your Brand Fly",
    description:
      "Sova Creative Studio is a full-service creative team based in Serbia, delivering cost-effective and high-quality visual communication solutions.",
    url: "https://www.sova.ooo/",
    siteName: "Sova Creative Studio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sova Creative Studio",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${myFont.variable}`}>
        <GoogleAnalytics />
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
