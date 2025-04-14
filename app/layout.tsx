import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/sections/header/Header";

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
  title: "Sova Creative Studio | We Make Your Brand Fly",
  description:
    "Sova Creative Studio is a full-service creative team based in Serbia, delivering cost-effective and high-quality visual communication solutions for global brands and local startups.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${myFont.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
