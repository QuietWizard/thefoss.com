import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Foss —— Portfolio",
  icons: {
    icon: "/images/fav.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
