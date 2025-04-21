"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Pacifico, Quicksand, Poppins } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], display: "swap" });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"], display: "swap" });

const images = ['/About.jpg', '/About1.jpg', '/About2.webp', '/About3.webp'];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="w-full px-6 md:px-10 py-14 bg-[#FFEFF1] space-y-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={`${quicksand.className} font-semibold text-4xl text-center text-[#C45C61]`}
      >
        About Us
      </motion.div>

      <div className="lg:flex md:flex gap-10 items-center justify-between lg:space-y-0 md:space-y-0 space-y-10">
        
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 md:w-1/2 space-y-6"
        >
          <h2 className={`${pacifico.className} text-3xl md:text-4xl text-[#C45C61] leading-snug`}>
            We Plan & Design Events<br className="hidden md:block" />
            That Capture the Imagination
          </h2>

          <p className={`${poppins.className} text-[#9C6B6B] leading-relaxed text-[16px]`}>
            At <strong>Kaivalyam Events</strong>, we believe every celebration deserves to be extraordinary.
            From weddings and birthdays to corporate and cultural events, we bring your vision to life with
            elegance, creativity, and precision. With our expert team handling every detail, you can relax and
            enjoy the moment — stress-free and beautifully unforgettable.
          </p>

          <ul className={`${poppins.className} list-disc pl-6 space-y-2 text-[#4f4f4f]`}>
            <li className='text-[#9C6B6B]'>
              <strong className='text-[#C45C61] text-[17px]'>Tailored Event Styling:</strong> Décor that reflects your taste and event purpose — intimate or grand.
            </li>
            <li className='text-[#9C6B6B]'>
              <strong className='text-[#C45C61] text-[17px]'>Versatility Across Occasions:</strong> From traditional weddings to modern corporate gatherings.
            </li>
            <li className='text-[#9C6B6B]'>
              <strong className='text-[#C45C61] text-[17px]'>Quality Without Compromise:</strong> Premium materials, expert craftsmanship, and elegant results.
            </li>
            <li className='text-[#9C6B6B]'>
              <strong className='text-[#C45C61] text-[17px]'>Reliable & Efficient Service:</strong> Punctual setup and seamless coordination for a worry-free experience.
            </li>
          </ul>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 md:w-1/2 lg:h-[70vh] md:h-[50vh] h-[50vh] flex justify-center"
        >
          <Image
            src={images[currentImage]}
            alt="About Kaivalyam Events"
            width={1000}
            height={1000}
            className="rounded-2xl shadow-xl object-cover w-[90%] h-full transition-opacity duration-1000 ease-in-out"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
