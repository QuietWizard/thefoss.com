import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Mona_Sans, Playfair_Display } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import "./globals.css";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable",
  display: "swap",
  variable: "--font-mona-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable",
  display: "swap",
  variable: "--font-playfair-display",
});

const description =
  "Tech leader with 20+ years scaling digital platforms in eCommerce and biotech. I turn complexity into clarity, leading enterprise migrations and building high-performing teams.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thefoss.com"),
  title: "Michael Foss —— Portfolio",
  description,
  icons: {
    icon: "/images/fav.png",
  },
  openGraph: {
    title: "Michael Foss —— Portfolio",
    description,
    url: "https://thefoss.com",
    siteName: "Michael Foss",
    images: [{ url: "/images/headshot.jpg", width: 666, height: 666, alt: "Michael Foss" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Michael Foss —— Portfolio",
    description,
    images: ["/images/headshot.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className={`${monaSans.variable} ${playfairDisplay.variable}`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
