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
const duplicatedImages = [...images, ...images];

const Hero = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const imageCount = images.length;
    const duplicatedCount = duplicatedImages.length;
    let currentIndex = 0;
    const slideDuration = 1000;
    const pauseDuration = 4000;

    const slide = () => {
      const percentage = -(100 / duplicatedCount) * currentIndex;
      track.style.transition = `transform ${slideDuration / 1000}s ease-in-out`;
      track.style.transform = `translateX(${percentage}%)`;

      currentIndex++;

      if (currentIndex === duplicatedCount) {
        setTimeout(() => {
          track.style.transition = "none";
          track.style.transform = "translateX(0%)";
          currentIndex = 0;
          setTimeout(slide, 0);
        }, slideDuration);
      } else {
        setTimeout(slide, slideDuration + pauseDuration);
      }
    };

    slide();

    return () => {};
  }, []);

  return (
    <div className="border border-[#C45C61] mx-4 lg:mx-10 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row lg:h-[85vh] md:h-[60vh]">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center px-6 py-10 text-center space-y-4 relative">
        <h1 className={`text-[28px] md:text-[36px] lg:text-[40px] text-[#C45C61] ${quicksand.className} font-bold leading-snug`}>
          Welcome to{" "}
          <span className={`${pacifico.className} text-[36px] md:text-[42px] lg:text-[48px]`}>
            Kaivalyam Events
          </span>
        </h1>
        <p className={`${poppins.className} text-base md:text-lg lg:text-xl text-[#9C6B6B]`}>
          Crafting Moments, Creating Memories
        </p>

        <Link href="/quote" className={`bg-[#C45C61] text-white py-2 px-4 mt-4 rounded-md shadow-md ${quicksand.className} font-semibold hover:translate-x-[1px] hover:-translate-y-[1px] duration-500 hover:shadow-white hover:shadow-xl`}>
          Get a Quote
        </Link>

        {/* Social Media Icons - Only visible on large screens */}
        <div className="absolute lg:bottom-10 md:bottom-10 hidden md:flex items-center gap-4 text-[#C45C61]">
          <span className={`${poppins.className} font-medium`}>FOLLOW US ON:</span>
          <ul className="flex gap-3 items-center">
            <li><Link href="https://www.instagram.com/kailvalyaevents" target="_blank"><FaInstagram size={24} /></Link></li>
            <li><Link href="/" target="_blank"><SlSocialFacebook size={24} /></Link></li>
            <li><Link href="/" target="_blank"><CiYoutube size={30} /></Link></li>
          </ul>
        </div>
      </div>

      {/* Right Carousel Section */}
      <div className="lg:w-1/2 w-full h-[300px] md:h-[50vh] lg:h-full relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex h-full"
          style={{ width: `${duplicatedImages.length * 100}%` }}
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
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Social Icons on Mobile */}
      <div className="md:hidden mt-4 mb-6 text-[#C45C61] flex flex-col items-center gap-2">
        <span className={`${poppins.className} text-sm`}>FOLLOW US ON:</span>
        <ul className="flex gap-4 items-center">
          <li><Link href="https://www.instagram.com/kailvalyaevents" target="_blank"><FaInstagram size={22} /></Link></li>
          <li><Link href="/" target="_blank"><SlSocialFacebook size={22} /></Link></li>
          <li><Link href="/" target="_blank"><CiYoutube size={26} /></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
