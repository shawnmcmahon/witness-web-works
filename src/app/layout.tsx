import type { Metadata } from "next";
import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Witness Web Works | Denver Web Design & E-Commerce",
  description:
    "We help businesses reach more clients by building beautiful, engaging websites. Professional web design and e-commerce solutions in Denver.",
  keywords: [
    "web design",
    "Denver",
    "e-commerce",
    "website development",
    "small business",
  ],
  authors: [{ name: "Witness Web Works" }],
  openGraph: {
    title: "Witness Web Works | Denver Web Design & E-Commerce",
    description:
      "We help businesses reach more clients by building beautiful, engaging websites.",
    type: "website",
    locale: "en_US",
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
        className={`${cormorant.variable} ${openSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
