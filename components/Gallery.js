"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GalleryPreview = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/list-images");
      const data = await res.json();
      if (data.images) {
        setImages(data.images.slice(0, 6));
      }
    };

    fetchImages();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full bg-[#FFEFF1] py-10 px-6 md:px-12 space-y-16"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-[#C45C61]"
      >
        Our Recent Events
      </motion.h2>

      {/* Staggered Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="overflow-hidden rounded-2xl shadow-md break-inside-avoid"
          >
            <Image
              src={item.url}
              alt="Event Photo"
              width={500}
              height={500}
              className="w-full object-cover transition-all duration-500 hover:scale-105 hover:brightness-90 rounded-2xl"
            />
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center pt-6"
      >
        <Link href="/gallery">
          <button className="bg-[#C45C61] text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#a1474b] transition">
            View Full Gallery →
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default GalleryPreview;
