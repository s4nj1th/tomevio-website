import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Averia_Serif_Libre } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  variable: "--font-atkinson",
  weight: ["400", "700"],
  display: "swap",
});

const averiaSerif = Averia_Serif_Libre({
  subsets: ["latin"],
  variable: "--font-averia",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tomevio",
  description: "A FOSS book tracker platform",
  icons: {
    icon: [
      {
        url: "/favicon-light.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${atkinson.variable} ${averiaSerif.variable} antialiased`}
      >
        <NavBar />
        <main className="min-h-screen max-w-4xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
