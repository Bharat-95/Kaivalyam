"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Pacifico, Quicksand, Poppins } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

const images = ["/About1.jpg", "/About2.webp", "/About3.webp", "/About4.jpg"];

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full bg-[#FFEFF1] py-20 px-4 md:px-10 my-10"
    >
      {/* Background Image as Section Decoration */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src={images[currentImage]}
          alt="Kaivalyam Mood"
          fill
          className="object-cover"
        />
      </div>

      {/* Glass Card */}
      <div className="relative max-w-4xl mx-auto bg-[#FFEFF1] backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 space-y-4">
        <h2
          className={`${pacifico.className} text-3xl md:text-4xl text-[#C45C61] text-center`}
        >
          Kaivalyam Events
        </h2>
        <p
          className={`${poppins.className} text-[#6B4A4A] text-center text-lg max-w-2xl mx-auto`}
        >
          We design moments that matter — from bespoke weddings to bold brand
          experiences. Our approach blends beauty, storytelling, and precision
          into every celebration.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutSection;
