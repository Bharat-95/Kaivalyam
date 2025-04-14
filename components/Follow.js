"use client";

import React, { useEffect, useRef, useState } from "react";
import { Pacifico, Quicksand } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], display: "swap" });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

const Follow = () => {
  const instagramUrl = "https://www.instagram.com/kailvalyaevents";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const images = [
    { src: "/image2.webp", alt: "Image 2" },
    { src: "/image3.webp", alt: "Image 3" },
    { src: "/image4.webp", alt: "Image 4" },
    { src: "/image5.webp", alt: "Image 5" },
  ];

  // Resize detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile, images.length]);

  // Touch slide detection
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // swipe left
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (distance < -50) {
      // swipe right
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  return (
    <div className="w-full mt-20 px-4 lg:px-20 flex flex-col space-y-6 justify-center items-center">
      <div className={`${quicksand.className} font-semibold text-4xl text-center text-[#C45C61]`}>
        Follow Us
      </div>
      <div className={`${pacifico.className} text-[#C45C61] text-2xl`}>
        <Link href={instagramUrl} target="_blank">@KailvalyaEvents</Link>
      </div>

      {isMobile ? (
        <div
          className="relative overflow-hidden w-full h-80 rounded-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <Link key={index} href={instagramUrl} target="_blank" className="flex-shrink-0 w-full h-80">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full md:grid md:grid-cols-2 lg:flex md:gap-4 lg:gap-6">
          {images.map((img, index) => (
            <Link key={index} href={instagramUrl} target="_blank" className="flex-shrink-0">
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={320}
                className="rounded-lg w-full lg:w-[300px] h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Follow;
