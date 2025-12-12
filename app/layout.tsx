import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Home Tools",
  description: "By Radike",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-var(--color-bg) text-var(--color-fg)font-main">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
