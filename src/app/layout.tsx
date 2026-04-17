import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PNP Engineering Works (P) Ltd | API Tanks, IBR Piping & Industrial Mechanical Contractors — West Bengal",
  description: "PNP Engineering Works (P) Ltd, established 1998, Haldia. Specialists in API-650/620 oil storage tanks, IBR piping, structural erection, mechanical equipment installation, and plant shutdown & turnaround for IOCL, HPCL, Reliance and other core sector clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
