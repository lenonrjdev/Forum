import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import type { ReactNode } from "react";

import { ForumStateProvider } from "@/components/providers/forum-state-provider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ateliux Forum",
  description: "Discussões, códigos e insights sobre tecnologia pela Ateliux.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        <ForumStateProvider>{children}</ForumStateProvider>
      </body>
    </html>
  );
}
