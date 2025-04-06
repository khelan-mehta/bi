"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronUp } from "lucide-react";
import DesktopView from "../../components/views/desktopView";
import TabView from "../../components/views/tabView";
import MobileView from "../../components/views/mobileView";
import NavOrbitIon from "../../components/NavOrbitIon";

const About = () => {
  const router = useRouter();
  const [isShrinking, setIsShrinking] = useState(false);

  const handleClick = () => {
    setIsShrinking(true); // Trigger height reduction
    setTimeout(() => {
      router.push("/"); // Redirect after animation
    }, 600);
  };

  return (
    <>
      <MobileView>
        <motion.div
          className="w-[90%] h-screen z-[-1]  mt-[-100px] flex justify-center items-center flex-col bg-white "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-2xl font-semibold mb-4" // Adjusted font size and spacing
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Hey There !
          </motion.h1>
          <motion.p
            className="text-base max-w-xl text-center mb-6" // Adjusted font size and spacing
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            We are a dedicated team focused on delivering high-quality solutions
            for your needs. Our mission is to innovate and create experiences
            that inspire and connect people. With years of expertise, we aim to
            make a difference in the lives of those we serve.
          </motion.p>
          <motion.button
            className="bg-white text-black py-1.5 px-3 rounded-md shadow-md hover:bg-gray-200 text-sm" // Adjusted button font size and padding
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            onClick={() => console.log("Button clicked!")}
          >
            Learn More
          </motion.button>

          {/* Background with slant effect */}
        </motion.div>
      </MobileView>
      <TabView>
        {" "}
        <motion.div
          className="relative w-screen overflow-hidden flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background with slant effect */}
          <div className="fixed w-screen h-screen bottom-0 right-40 bg-white text-black p-4 z-10">
            ABOUT US
          </div>

          <motion.div
            className="fixed w-screen flex flex-col justify-center items-center bottom-0 right-40 bg-[#3d3d3d] text-white p-4 z-50"
            style={{ overflow: "hidden" }}
            initial={{ translateY: "100%" }}
            animate={{
              translateY: "0%",
              height: isShrinking ? "10vh" : "100vh", // Shrink height when clicked
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Elements with bounce-down animation */}
            <motion.div
              className="flex w-screen h-[12vh] bg-black  fixed top-0"
              initial={{ translateY: -100 }}
              animate={{ translateY: 0, height: isShrinking ? "0vh" : "12vh" }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            ></motion.div>

            <motion.div
              className="flex w-[5px] h-[60vh] left-[55px] bg-black z-0 border-solid fixed top-0"
              initial={{ translateY: -200 }}
              animate={{
                translateY: 0,

                opacity: isShrinking ? "0" : "1",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 8,
                delay: 0.2,
              }}
            ></motion.div>

            <motion.div
              className="flex justify-center items-center w-[80px] top-[58vh] h-[80px] left-[20px] rounded-full bg-black border border-white border-solid fixed"
              initial={{ translateY: -150 }}
              animate={{ translateY: 0, opacity: isShrinking ? "0" : "1" }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 8,
                delay: 0.4,
              }}
              onClick={handleClick}
              whileHover={{ scale: 1.1, transition: { delay: 0 } }}
              whileTap={{
                scale: [1.1, 0.9, 1.3, 1], // Bounce effect

                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0,
                },
                // Move up on tap
              }}
            >
              <motion.div
                className="flex w-[60px] justify-center items-center h-[60px] bg-white rounded-full"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1, opacity: isShrinking ? "0" : "1" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.5,
                }}
                whileTap={{}}
              >
                <img src="../../up.png" alt="up" className="w-8 h-8" />
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-lg max-w-2xl text-center mb-8"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We are a dedicated team focused on delivering high-quality
              solutions for your needs. Our mission is to innovate and create
              experiences that inspire and connect people. With years of
              expertise, we aim to make a difference in the lives of those we
              serve.
            </motion.p>
            <motion.button
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              onClick={() => console.log("Button clicked!")}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </TabView>
      <DesktopView>
        {" "}
        <motion.div
          className="relative w-screen overflow-hidden flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background with slant effect */}
          <div className="fixed w-screen h-screen bottom-0 right-40 bg-white text-black p-4 z-10">
            ABOUT US
          </div>

          <motion.div
            className="fixed w-screen flex flex-col justify-center items-center bottom-0 right-40 bg-[black]  text-white p-4 z-50"
            style={{ overflow: "hidden" }}
            initial={{ translateY: "100%" }}
            animate={{
              translateY: "0%",
              height: isShrinking ? "10vh" : "100vh", // Shrink height when clicked
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Elements with bounce-down animation */}
            <motion.div
              className="flex w-screen h-[12vh] bg-black z-20   fixed top-0"
              initial={{ translateY: -100 }}
              animate={{ translateY: 0, height: isShrinking ? "0vh" : "12vh" }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            ></motion.div>

            <motion.div
              className="flex w-[5px] h-[60vh] left-[55px] bg-white  z-40  fixed top-0"
              initial={{ translateY: -200 }}
              animate={{
                translateY: 0,

                opacity: isShrinking ? "0" : "1",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 8,
                delay: 0.2,
              }}
            ></motion.div>

            <motion.div
              className="flex justify-center items-center w-[80px] top-[58vh] h-[80px] left-[20px] rounded-full bg-black fixed"
              initial={{ translateY: -150 }}
              animate={{ translateY: 0, opacity: isShrinking ? "0" : "1" }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 8,
                delay: 0.4,
              }}
              onClick={handleClick}
              whileHover={{ scale: 1.1, transition: { delay: 0 } }}
              whileTap={{
                scale: [1.1, 0.9, 1.3, 1], // Bounce effect

                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0,
                },
                // Move up on tap
              }}
            >
              <motion.div
                className="flex ] justify-center items-center  bg-white rounded-full"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1, opacity: isShrinking ? "0" : "1" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.5,
                }}
                whileTap={{}}
              >
                <NavOrbitIon />
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-lg max-w-2xl text-center mb-8"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We are a dedicated team focused on delivering high-quality
              solutions for your needs. Our mission is to innovate and create
              experiences that inspire and connect people. With years of
              expertise, we aim to make a difference in the lives of those we
              serve.
            </motion.p>
            <motion.button
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              onClick={() => console.log("Button clicked!")}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </DesktopView>
    </>
  ); 
};

export default About;
