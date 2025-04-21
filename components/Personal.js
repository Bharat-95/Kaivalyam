"use client";

import React from "react";
import Image from "next/image";
import { Pacifico, Quicksand, Poppins } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const quicksand = Quicksand({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const Personal = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="space-y-20 px-6 md:px-10 py-16 bg-[#FFEFF1]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`${quicksand.className} font-semibold text-4xl text-center text-[#C45C61]`}
      >
        Personal Touch
      </motion.div>

      <div className="w-full lg:flex md:flex h-auto gap-20 lg:space-y-0 md:space-y-0 space-y-10">
        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-[50%] md:w-[50%] w-full lg:h-[70vh] md:h-[50vh] h-[50vh]"
        >
          <Image
            src="/Personal.jpeg"
            alt="no Image Found"
            width={1000}
            height={1000}
            className="w-full h-full rounded-xl object-cover"
          />
        </motion.div>

        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`lg:w-[50%] md:w-[50%] w-full ${poppins.className} flex flex-col justify-center items-center text-justify text-[#9C6B6B] font-normal text-lg`}
        >
          <p className="mb-6">
            At <strong>Kaivalyam Events</strong>, we believe every celebration holds a unique story — yours. From custom décor touches to thoughtful guest experiences, we focus on the details that make your event truly personal. Whether it’s a grand celebration or an intimate gathering, we’re here to design moments that reflect your vision and leave lasting impressions.
          </p>
          <Link
            href="/"
            className="text-[#C45C61] font-semibold text-base underline hover:text-[#a0474b] transition"
          >
            Our Services →
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Personal;
