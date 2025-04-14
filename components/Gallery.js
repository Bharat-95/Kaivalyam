"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const GalleryPreview = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/list-images");
      const data = await res.json();
      if (data.images) {
        setImages(data.images.slice(0, 6)); // Only first 6 images
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="px-4 ">
      <h2 className="text-3xl font-bold text-center text-[#C45C61] mb-8">
        Our Recent Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item) => (
          <div key={item.key} className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={item.url}
              alt="Gallery Image"
              width={500}
              height={500}
              className="w-full h-56 object-cover transition-transform hover:scale-105 duration-300"
            />
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="mt-10 flex justify-center">
        <Link href="/gallery">
          <button className="bg-[#C45C61] text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-[#a1474b] transition">
            View More →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GalleryPreview;
