import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetaMask SDK Quickstart",
  description: "MetaMask SDK Quickstart app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative bg-neutral-800 bg-opacity-90 text-foreground antialiased`}
      >
        <div className="fixed inset-0 w-full h-full bg-repeat bg-noise opacity-25 bg-[length:350px] z-[-20] before:content-[''] before:absolute before:w-[2500px] before:h-[2500px] before:rounded-full before:blur-[100px] before:-left-[1000px] before:-top-[2000px] before:bg-white before:opacity-50 before:z-[-100]"></div>
        <main className="flex flex-col max-w-screen-lg mx-auto pb-20">
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
