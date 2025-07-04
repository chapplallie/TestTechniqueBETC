import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto : any = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test technique 2.0",
  description: "Test technique 2.0 - react-nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
