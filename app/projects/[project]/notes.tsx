"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  {
    src: "https://wallpapers.com/images/hd/purple-sky-3d-nature-9zgqmz91pcm7idf7.jpg",
    title: "Showcase site | Branding",
    caption: "AMGPRO",
    key: "0",
  },
  {
    src: "https://i.pinimg.com/originals/13/3b/89/133b89168deaceb619421cd65fc62f59.jpg",
    title: "Ecommerce site | Branding",
    caption: "Diamonds Story",
    key: "1",
  },
  {
    src: "https://e1.pxfuel.com/desktop-wallpaper/859/280/desktop-wallpaper-awesome-3d-nature-full-screen-3d-full-screen.jpg",
    title: "Ecommerce site | Branding",
    caption: "Diamonds Story",
    key: "2",
  },
  {
    src: "https://cdn.wallpapersafari.com/64/26/m4ojCw.jpg",
    title: "Ecommerce site | Branding",
    caption: "Diamonds Story",
    key: "3",
  },
  {
    src: "https://cdn.wallpapersafari.com/64/26/m4ojCw.jpg",
    title: "Ecommerce site | Branding",
    caption: "Diamonds Story",
    key: "4",
  },
  {
    src: "https://cdn.wallpapersafari.com/64/26/m4ojCw.jpg",
    title: "Ecommerce site | Branding",
    caption: "Diamonds Story",
    key: "5",
  },
  // Add more images as needed
];

const ProjectPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);
  const router = useRouter();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [isFocused, setIsFocused] = useState(false);
  const opacity = useTransform(scrollYProgress, [0, 1.5, 2], [0, 1.5, 2]);
  const yPosition = useTransform(scrollYProgress, [0, 1], ["0px", "1000px"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log("Scroll progress:", latest);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  useEffect(() => {
    const imageIndex = localStorage.getItem("selectedImageId");
    if (imageIndex !== null) {
      const index = parseInt(imageIndex, 10);
      if (index >= 0 && index < images.length) {
        setSelectedImage(images[index]);
      }
    } else {
      router.push("/");
    }
  }, [router]);

  if (!selectedImage) {
    return null;
  }

  const handleImageClick = () => {
    setIsFocused((prev) => !prev);
  };

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center h-auto overflow-hidden relative"
    >
      <motion.div
        className="absolute top-0 rounded-lg w-[80.5vw] h-[95vh]  bg-black z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: isFocused ? 0.7 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleImageClick}
      ></motion.div>
      {/* Foreground Image */}
      <motion.div className="relative z-20 flex justify-center items-center w-[100vw] h-[95vh] px-10">
        <motion.img
          src={selectedImage.src}
          alt={selectedImage.caption}
          className="max-w-full max-h-full object-contain rounded-lg cursor-pointer shadow-md"
        />
      </motion.div>
      <motion.div
        className="absolute z-40 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isFocused ? 1 : 0,
          y: isFocused ? 0 : 50,
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1 className="text-4xl font-bold">
          {selectedImage.title}
        </motion.h1>
        <motion.p className="text-lg mt-2">{selectedImage.caption}</motion.p>
      </motion.div>

      {/* Scroll Section */}
      <div className="text-black flex flex-col items-center justify-center ">
        <div className="w-full h-[45vh] flex items-center justify-center mt-10">
          <motion.div
            className="w-[50vw] flex flex-col justify-center"
            style={{ opacity: opacity }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              About the Project
            </h2>
            <p className="text-lg text-black">
              This project showcases a modern and interactive design for a
              branding site. The visuals emphasize the brand's aesthetic,
              providing users with an engaging and immersive experience.
            </p>
          </motion.div>

          <motion.div
            className="w-[30vw] flex justify-center"
            style={{ opacity }}
          >
            <img
              src="https://i.pinimg.com/originals/13/3b/89/133b89168deaceb619421cd65fc62f59.jpg"
              alt="Project Detail"
              className="max-w-full max-h-[40vh] rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="text-black flex flex-col items-center justify-center ">
        <div className="w-full h-[45vh] flex gap-12 flex-row-reverse  items-center justify-center mt-10">
          <motion.div
            className="w-[50vw] flex flex-col justify-center"
            style={{ opacity: opacity }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              About the Project
            </h2>
            <p className="text-lg text-black">
              This project showcases a modern and interactive design for a
              branding site. The visuals emphasize the brand's aesthetic,
              providing users with an engaging and immersive experience.
            </p>
          </motion.div>

          <motion.div
            className="w-[30vw] flex justify-center"
            style={{ opacity }}
          >
            <img
              src="https://i.pinimg.com/originals/13/3b/89/133b89168deaceb619421cd65fc62f59.jpg"
              alt="Project Detail"
              className="max-w-full max-h-[40vh] rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
