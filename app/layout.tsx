"use client";

import type { Metadata } from "next";
import { Comfortaa, IBM_Plex_Mono, Montserrat } from "next/font/google";

import "./globals.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FireCursor from "../components/Cursor";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";
import Snowflake from "../components/Snowflake";

const mont = Montserrat({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-mont",
});

const comf = Comfortaa({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-comf",
});

const plexMono = IBM_Plex_Mono({
  weight: ["200", "400", "600", "700"],
  variable: "--font-plex",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [path, setPath] = useState(usePathname());
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const toggleSidebar = () => {
    setSideBarOpen((prev) => !prev); // Toggle sidebar state
    // console.log(sideBarOpen);
  };

  useEffect(() => {
    setSideBarOpen(false);
  }, [path]);

  return (
    <html
      lang="en"
      className={`overflow-x-hidden ${mont.variable} ${plexMono.variable} ${comf.variable}`}
    >
      <body className={"overflow-x-hidden no-scrollbar bg-white"}>
        {/* <FireCursor /> */}
        <Navbar sideBarStatus={sideBarOpen} toggleSidebar={toggleSidebar} />
        <Sidebar barStatus={sideBarOpen} setBarStatus={toggleSidebar} />
        <Snowflake />
        <main className="flex w-full flex-col relative gap-6 p-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
