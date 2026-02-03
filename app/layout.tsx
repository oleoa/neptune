import type { Metadata } from "next";
import { Lora, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neptune",
  description: "Transform your business with AI Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${geistMono.variable} antialiased bg-deepest-blue text-white`}
      >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
