import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokémon Shakespeare App",
  description: "Pokémon descriptions translated into Shakespearean English",
};

const retroFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${retroFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
