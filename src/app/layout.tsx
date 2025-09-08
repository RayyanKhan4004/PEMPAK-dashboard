import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Open_Sans({
  variable: "--font-open-Sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PEMPAK",
  description:
    "Perfect Elektro Mek Pakistan Pvt. Limited (PEMPAK) Group develops electric supplies, solutions and solar concepts, that are beneficial to the environment, people, and nature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased basicTheme`}>
        {children}
      </body>
    </html>
  );
}
