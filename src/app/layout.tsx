import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "../../public/logo.png",
  title: "Doctors Hub",
  description: "Your all-in-one solution to managing details of doctors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
