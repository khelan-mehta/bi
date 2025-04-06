"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projectDetails } from "../projectsDetails";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectPage: React.FC<{ projectTitle: string }> = ({ projectTitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  projectTitle = projectTitle.replaceAll("%20", " ");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const blogData = projectDetails[projectTitle];

  return (
    <div className="flex flex-col items-center justify-center px-8 h-auto overflow-hidden relative">
      {/* Main Image */}
      <motion.div className="relative z-20 flex justify-center items-center w-[100vw] h-[95vh] rounded-lg">
        <motion.img
          src={blogData.mainImage}
          alt={blogData.title}
          className="z-10 max-h-full object-cover rounded-lg cursor-pointer shadow-md"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        />
      </motion.div>

      {/* Main Title */}
      <h1 className="text-4xl font-bold text-gray-800 my-6">{blogData.title}</h1>

      {/* Dynamic Sections */}
      {blogData.sections.map((section, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="w-full mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.subtitle}</h2>
          <p className="text-lg text-gray-600 mb-4">{section.description}</p>
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
        <div className="w-full h-[45vh] flex gap-12 flex-row-reverse items-center justify-center mt-10">
          <h2 className="text-3xl font-bold text-black mb-4">Technologies Incorporated</h2>
          <motion.div
            className="w-[70vw] flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <div
              ref={containerRef}
              className="content justify-center col-span-12 row-span-1 border-0 rounded-2xl overflow-hidden whitespace-nowrap flex items-center py-16"
            >
              {blogData.technologies.map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt={`Tech ${index}`}
                  className="w-24 h-24 mx-4 grayscale cursor-pointer"
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

export default ProjectPage;
