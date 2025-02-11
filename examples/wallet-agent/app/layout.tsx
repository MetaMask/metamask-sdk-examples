import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/lib/Provider";
import { headers } from "next/headers";
import { getConfig } from "@/wagmi.config";
import { cookieToInitialState } from "wagmi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    getConfig(),
    (await headers()).get("cookie") ?? ""
  );
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider initialState={initialState}>{children}</Provider>
      </body>
    </html>
  );
}