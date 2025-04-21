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
    <div className={`p-6 md:p-12 ${quicksand.className}`}>
      {/* Intro Text */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#C45C61] mb-4">Our Services</h1>
        <p className="text-gray-700 text-lg">
          We offer personalized event solutions to make your celebrations truly unforgettable. Explore each category below to know what we do best.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            href={`/${cat.category}`}
            key={cat.category}
            className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 block"
          >
            <Image
              src={cat.coverImage}
              alt={cat.category}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className=" p-4 text-center">
              <h2 className="text-xl font-semibold capitalize text-[#C45C61]">
                {cat.category.replace(/-/g, " ")}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
