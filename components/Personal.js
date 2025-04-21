"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Pacifico, Quicksand, Poppins } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

const Personal = () => {
  return (
    <div className="relative w-full bg-[#FFEFF1] px-6 md:px-16 py-10 overflow-hidden">
      {/* Background Image Full Width */}
      <div className="relative h-[550px] md:h-[600px] lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-xl">
        <Image
          src="/Image3.webp"
          alt="Personal Touch"
          fill
          className="object-cover object-center w-full h-full"
          quality={90}
          priority
        />
      </div>

      {/* Floating Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-[60%] md:top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] lg:w-[50%] bg-[#FFEFF1]/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 z-20"
      >
        <h2
          className={`${pacifico.className} text-3xl md:text-4xl text-[#C45C61] mb-4 text-center`}
        >
          Personal Touch
        </h2>
        <p
          className={`${poppins.className} text-[#6B4A4A] text-sm md:text-base text-center leading-relaxed`}
        >
          At <strong>Kaivalyam Events</strong>, we craft each celebration with an emotional connection —
          your vision, your guests, your story. Every color, scent, and arrangement is chosen with care to make it truly yours.
        </p>

        <div className="flex justify-center mt-6">
          <Link
            href="/"
            className="bg-[#C45C61] text-white px-6 py-2 rounded-full font-medium hover:bg-[#a8474c] transition"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Personal;
