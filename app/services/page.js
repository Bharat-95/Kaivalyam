"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });

export default function ServicesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/list-images");
      const data = await res.json();

      if (data.images) {
        const allowed = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
        const grouped = data.images.reduce((acc, item) => {
          if (
            item.key &&
            !item.key.endsWith("/") &&
            allowed.some((ext) => item.key.toLowerCase().endsWith(ext))
          ) {
            const category = item.category || "uncategorized";
            if (!acc[category]) acc[category] = [];
            acc[category].push(item);
          }
          return acc;
        }, {});

        const withCovers = Object.entries(grouped).map(([category, items]) => {
          const sorted = items.sort(
            (a, b) =>
              new Date(b.lastModified || 0).getTime() -
              new Date(a.lastModified || 0).getTime()
          );
          return {
            category,
            coverImage: sorted[0].url,
            totalImages: items.length,
          };
        });

        setCategories(withCovers);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className={`min-h-screen bg-[#FFEFF1] py-20 px-6 md:px-12 ${quicksand.className}`}>
      {/* Intro */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#C45C61] mb-4">Our Services</h1>
        <p className="text-[#6B4A4A] text-lg">
          From luxurious weddings to elite corporate events, explore our range of curated categories and discover how we create unforgettable experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            href={`/${cat.category}`}
            key={cat.category}
            className="relative overflow-hidden rounded-2xl shadow-xl group"
          >
            <Image
              src={cat.coverImage}
              alt={cat.category}
              width={600}
              height={400}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h2 className="text-2xl capitalize font-semibold drop-shadow-md">
                {cat.category.replace(/-/g, " ")}
              </h2>
              <p className="text-sm opacity-90">{cat.totalImages} photos</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
