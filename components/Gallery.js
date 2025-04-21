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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="px-4 bg-[#FFEFF1]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-[#C45C61] mb-12"
      >
        Our Recent Events
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={item.url}
              alt="Gallery Image"
              width={500}
              height={500}
              className="w-full h-80 object-cover transition-transform hover:scale-105 duration-300"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <Link href="/gallery">
          <button className="bg-[#C45C61] text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-[#a1474b] transition">
            View More →
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default GalleryPreview;
