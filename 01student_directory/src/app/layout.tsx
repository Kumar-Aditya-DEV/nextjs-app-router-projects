import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarPage from "@/components/layout/Navbar";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
       <NavBarPage />

        {children}
      
      </body>
    </html>
  );
};
