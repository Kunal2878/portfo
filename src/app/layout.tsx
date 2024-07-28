import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './Navbar/page';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kunal Paul",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
