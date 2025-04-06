"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { projectDetails } from "../projectsDetails";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectPageMobile: React.FC<{ projectTitle: string }> = ({ projectTitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastScrollTop, setLastScrollTop] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  projectTitle = projectTitle.replaceAll("%20", " ");

  const [scrollWidth, setScrollWidth] = useState(0);
  const containerRef2 = useRef<HTMLDivElement>(null);

    const blogData = projectDetails[projectTitle];

  // useEffect(() => {
  //   if (containerRef2.current) {
  //     const scrollableWidth = containerRef2.current.scrollWidth;
  //     const visibleWidth = containerRef2.current.offsetWidth;
  //     setScrollWidth(scrollableWidth - visibleWidth);
  //   }
  // }, [images2]);

  useEffect(() => {
    // Update isMobile state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust this value as needed
    };

    // Run on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && !isMobile) {
        const { scrollTop } = document.documentElement || document.body;
        const delta = scrollTop - lastScrollTop; // Positive when scrolling down, negative when scrolling up
        setLastScrollTop(scrollTop);

        containerRef.current.scrollLeft += delta * 3; // Sync horizontal scroll with vertical scroll direction
      }
    };

    // Attach scroll event listener for desktop
    if (!isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup event listener when not mobile
    return () => {
      if (!isMobile) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastScrollTop, isMobile]);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        if (containerRef.current) {
          // Auto-scroll the images horizontally
          containerRef.current.scrollLeft += 4; // Adjust the scroll speed here
        }
      }, 30); // Set the interval time (in ms)

      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  // useEffect(() => {
  //   const imageIndex = localStorage.getItem("selectedImageId");
  //   if (imageIndex !== null) {
  //     const index = parseInt(imageIndex, 10);
  //     if (index >= 0 && index < images.length) {
  //       setSelectedImage(images[index]);
  //     }
  //   } else {
  //     router.push("/"); // redirect if no image is selected
  //   }
  // }, [router]);

  const handleImageClick = () => {
    setIsFocused((prev) => !prev);
  };

  return (
    <div className="flex  flex-col items-center justify-center h-auto overflow-hidden relative">
      {/* Only render if selectedImage exists */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Foreground Image */}
            <motion.div className="relative z-20 flex justify-center  w-[300px] h-[600px] rounded-sm px-2 ">
              <motion.div
                className="absolute cursor-pointer self-center  rounded-sm h-[300px] w-[250px] sm:h-[55vh]  bg-black z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: !isFocused ? 0.7 : 0 }}
                transition={{ duration: 0.5 }}
                onClick={handleImageClick}
              ></motion.div>
              <motion.div
                className="absolute rounded-sm self-center text-white z-40 flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                onClick={handleImageClick}
                animate={{
                  opacity: !isFocused ? 1 : 0,
                  y: !isFocused ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h1 className="text-sm font-bold">
                  {blogData.title}
                </motion.h1>
                <motion.p className="text-sm mt-2">
                  {blogData.caption}
                </motion.p>
              </motion.div>
              <motion.img
                src={blogData.mainImage}
                alt={blogData.title}
                onClick={handleImageClick}
                style={
                  !isFocused
                    ? { filter: `grayscale(1)` }
                    : { filter: `grayscale(0)` }
                }
                className=" z-10 max-h-full object-cover rounded-sm cursor-pointer shadow-md"
              />
            </motion.div>

            {/* Project Title & Caption */}
          </>
        )}
      </AnimatePresence>

      {/* Dynamic Sections */}
            {blogData.sections.map((section, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                className="w-full my-12"
              >
                <h2 className="sm:text-2xl text-lg font-semibold text-gray-800 mb-4">{section.subtitle}</h2>
                <p className="sm:text-lg text-base text-gray-600 mb-4">{section.description}</p>
                {section.image && (
                  <div
                    className={`flex ${section.image.length === "half" ? "flex-row items-center" : "flex-col"} gap-6`}
                  >
                    <motion.img
                      src={section.image.url}
                      alt={section.subtitle}
                      className={`rounded-lg shadow-md ${section.image.length === "half" ? "w-1/2" : "w-full"}`}
                    />
                    {section.image.length === "half" && (
                      <p className="text-lg text-gray-600 w-1/2">{section.description}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
      
            {/* Technologies Section */}
      <div className="text-black flex flex-col items-center justify-center">
        <div className="w-full h-auto flex gap-6 flex-col md:flex-row-reverse items-center justify-center mt-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Technologies Incorporated</h2>
          <motion.div
            className="w-full md:w-[70vw] flex flex-col justify-center overflow-x-auto md:overflow-visible"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <div
              ref={containerRef}
              className="content justify-start md:justify-center col-span-12 row-span-1 border-0 rounded-2xl overflow-hidden whitespace-nowrap flex items-center py-8 md:py-16 gap-6 md:gap-12"
            >
              {blogData.technologies.map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt={`Tech ${index}`}
                  className="w-16 h-16 md:w-24 md:h-24 mx-2 md:mx-4 grayscale cursor-pointer"
                  whileHover={{ filter: "grayscale(0)", transition: { duration: 0.2, ease: "easeInOut" } }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageMobile;
