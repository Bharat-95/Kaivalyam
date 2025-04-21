"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Pacifico, Quicksand, Poppins } from "next/font/google";
import Phone from '../components/Phone';
import Together from '../components/Together';
import Happen from '../components/Happen';

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], display: "swap" });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"], display: "swap" });

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='space-y-10 lg:py-10'
    >
      <div className={`${quicksand.className} font-semibold text-4xl flex justify-center text-[#C45C61] lg:px-0 md:px-0 px-4 text-center`}>
        You&apos;re Wondering - How Does It Work ?
      </div>

      <div className="lg:flex md:flex justify-evenly items-center lg:space-y-0 md:space-y-0 space-y-10">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='flex flex-col justify-center items-center space-y-4'
        >
          <Phone />
          <span className={`${quicksand.className} font-semibold text-2xl text-[#C45C61] lg:w-72 md:w-60 w-72 text-center`}>
            Let’s Chat – Share Your Vision With Us
          </span>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='flex flex-col justify-center items-center space-y-4'
        >
          <Together />
          <span className={`${quicksand.className} font-semibold text-2xl text-[#C45C61] lg:w-72 md:w-60 w-72 text-center`}>
            Plan Together – We&apos;ll Craft Every Detail
          </span>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='flex flex-col justify-center items-center space-y-4'
        >
          <Happen />
          <span className={`${quicksand.className} font-semibold text-2xl text-[#C45C61] lg:w-72 md:w-60 w-72 text-center`}>
            Make It Happen – Event Comes Alive
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
