import { useEffect, useRef } from "react";
import Image from "next/image";
import NavOrbitIon, { DualOrbitIon } from "./NavOrbitIon";
import { motion } from "framer-motion";
import Link from "next/link";
import { config } from "./config";

const socialLinks = [
  { name: "whatsapp", url: "https://bit.ly/wp-brion" },
  { name: "instagram", url: "https://www.instagram.com/brown.ion_/" },
  { name: "facebook", url: "https://bit.ly/wp-brio" },
  { name: "twitter", url: "https://x.com/Brownion_?t=jX43beB8lexKC3VJJbcnhg&s=08" },
];

interface SidebarProps {
  barStatus: boolean;
  setBarStatus: (status: boolean) => void;
}

export default function Sidebar({ barStatus, setBarStatus }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const urls = config.urls;

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setBarStatus(false);
      }
    }

    if (barStatus) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [barStatus, setBarStatus]);

  const sidebarVariants = {
    hidden: { height: 0, opacity: 0, transition: { duration: 0.4 } },
    visible: { height: "75%", opacity: 1, transition: { duration: 0.5 } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <ul
        className="sidebar md:left-10 fixed md:transform-none bottom-6
        bg-gradient-to-b from-gray-500/30 to-gray-800/50 backdrop-blur-sm backdrop-filter 
        p-3 flex flex-row w-10/12 sm:w-auto sm:flex-col gap-2 shadow-2xl rounded-full z-40 justify-evenly"
      >
        {socialLinks.map((social, i) => (
          <li key={i} className="bg-glow">
            <Link href={social.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={`${social.name}.png`}
                alt={`${social.name} Icon`}
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </Link>
          </li>
        ))}
      </ul>

      <motion.div
        ref={sidebarRef}
        className="fixed md:transform-none bottom-6
        bg-black backdrop-blur-sm backdrop-filter 
        p-3 flex flex-col items-center sm:hidden w-10/12 sm:w-auto sm:flex-col shadow-2xl rounded-3xl z-50 justify-center gap-6 overflow-hidden"
        variants={sidebarVariants}
        initial="hidden"
        animate={barStatus ? "visible" : "hidden"}
        exit="exit"
      >
        <div
          onClick={() => setBarStatus(false)}
          className="close bg-black shadow h-16 w-16 absolute rounded-full flex justify-center items-center -top-1/2"
        >
          <DualOrbitIon />
        </div>
        {urls.map((menu, i) => (
          <Link key={i} href={menu.uri}>
            <div className="p-4 cursor-pointer">
              <h2 className="text-center w-full text-gray-600 hover:text-white hover:text-xl transition-all duration-150 ease-in text-sm font-bold tracking-widest uppercase font-sans">
                {menu.nm}
              </h2>
            </div>
          </Link>
        ))}
      </motion.div>
    </>
  );
}
