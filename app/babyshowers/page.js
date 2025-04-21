"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BabyShowerDecor = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/list-images");
      const data = await res.json();

      if (data.images) {
        const filtered = data.images
          .filter((img) => img.category === "babyshowers")
          .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
        setImages(filtered);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="bg-[#fff6f7]">
      {/* Hero Section */}
      <div className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/babyshower-banner.jpg')" }}>
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Baby Shower Decorations</h1>
      </div>

      {/* Intro Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-[#C45C61] mb-4">Celebrate New Beginnings in Style</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether it’s a princess theme or a minimal floral backdrop, we make every baby shower magical. Our decorators bring joy and warmth to every corner of your venue with balloons, floral arches, custom props, and lovable photo zones.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.key} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <Image
                src={img.url}
                alt="Baby Shower Decoration"
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No baby shower images available yet.</p>
        )}
      </div>
    </div>
  );
};

export default BabyShowerDecor;
