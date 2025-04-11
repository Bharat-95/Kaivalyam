"use client";
import React, { useEffect, useRef } from "react";
import { Pacifico, Quicksand, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { CiYoutube } from "react-icons/ci";



const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], display: "swap" });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"], display: "swap" });

const images = ["/Hero1.jpg", "/Hero2.jpg", "/Hero3.jpg"];
const duplicatedImages = [...images, ...images]; // Duplicate for seamless looping

const Hero = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const imageCount = images.length;
    const duplicatedCount = duplicatedImages.length;
    let currentIndex = 0;
    const slideDuration = 1000; // 1s transition
    const pauseDuration = 4000; // 4s pause (total 5s per slide)

    const slide = () => {
      const percentage = -(100 / duplicatedCount) * currentIndex;
      track.style.transition = `transform ${slideDuration / 1000}s ease-in-out`;
      track.style.transform = `translateX(${percentage}%)`;

      currentIndex++;

      if (currentIndex === duplicatedCount) {
        // After reaching the end of duplicated images, reset instantly
        setTimeout(() => {
          track.style.transition = "none";
          track.style.transform = "translateX(0%)";
          currentIndex = 0;
          // Continue sliding immediately
          setTimeout(slide, 0);
        }, slideDuration);
      } else {
        // Continue normal sliding
        setTimeout(slide, slideDuration + pauseDuration);
      }
    };

    slide(); // Start the carousel

    return () => {};
  }, []);

  return (
    <div className="border border-[#C45C61] lg:mx-10 mx-4 lg:h-[85vh] md:h-[50vh] rounded-2xl lg:flex md:flex shadow-lg overflow-hidden lg:space-y-0 md:space-y-0 space-y-10">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center px-6 text-center py-10 lg:space-y-0 md:space-y-0 space-y-4">
        <h1 className={`text-[32px] md:text-[40px] text-[#C45C61] ${quicksand.className} font-bold leading-snug`}>
          Welcome to <span className={`${pacifico.className} text-[42px] md:text[38px]`}>Kaivalyam Events</span>
        </h1>
        <p className={`${poppins.className} text-xl text-[#9C6B6B] mt-4`}>
          Crafting Moments, Creating Memories
        </p>
        <div className={`bg-[#C45C61] text-white p-2 mt-4 rounded-md shadow-md ${quicksand.className} font-semibold hover:translate-x-[1px] hover:-translate-y-[1px] duration-500 hover:shadow-white hover:shadow-xl`}><Link href='/'>Get a Quote</Link></div>
        <div className="absolute lg:bottom-20 md:bottom-[45%]  bottom-[43%] flex items-center gap-6 left-20 text-[#C45C61]">
            <div>FOLLOW US ON :</div>
            <ul className="flex space-x-2 items-center">
                <li><Link href='/'><FaInstagram size={24} /></Link></li>
                <li><Link href='/'><SlSocialFacebook size={24} /></Link></li>
                <li><Link href='/'><CiYoutube size={30} /></Link></li>

            </ul>
        </div>
      </div>

      {/* Right Carousel Section */}
      <div className="lg:w-1/2 w-full h-[300px] lg:h-[85vh] md:h-[50vh] relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-full h-full"
          style={{
            width: `${duplicatedImages.length * 100}%`,
          }}
        >
          {duplicatedImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative"
              style={{ width: `${100 / duplicatedImages.length}%` }}
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={1000}
                height={1000}
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;