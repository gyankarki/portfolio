import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// @ts-ignore
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mr. Gyan Bahadur Karki",
  description: "Portfolio of Mr. Gyan Bahadur Karki, a teacher and researcher focused on curriculum development, academic mentoring, and student success in Nepal.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
