"use client";
import { NextPage } from "next";
import Head from "next/head";
import HorizontalScroll from "../../components/HorizontalScroll";
import { useEffect } from "react";
import DesktopView from "../../components/views/desktopView";
import MobileView from "../../components/views/mobileView";
import HorizontalScrollMobile from "../../components/HorizontalScrollMobile";

const Home: NextPage = () => {
  useEffect(() => {
    // Cleanup the animation class on component unmount
    return () => {
      document.body.classList.remove("animate-black-screen");
    };
  }, []);

  return (
    <div className="no-scrollbar">
     
      <DesktopView>
        <HorizontalScroll />
      </DesktopView>
      <MobileView>
        <HorizontalScrollMobile />
      </MobileView>
    </div>
  );
};

export default Home;
