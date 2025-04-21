"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Quicksand } from "next/font/google";
import { IoCloseSharp } from "react-icons/io5";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ITEMS_PER_PAGE = 9;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");

    const fetchImages = async () => {
      const res = await fetch("/api/list-images");
      const data = await res.json();
      if (data.images) {
        setImages(data.images);
      }
    };

    fetchImages();
  }, []);

  const handleDelete = async (key) => {
    const res = await fetch("/api/delete-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });

    const data = await res.json();

    if (res.ok) {
      setImages((prev) => prev.filter((img) => img.key !== key));
    } else {
      alert("Error deleting image: " + data.error);
    }
  };

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]?.url);
  };

  const closeImage = () => setSelectedImage(null);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]?.url);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]?.url);
  };

  const groupByCategory = (list) => {
    return list.reduce((acc, item) => {
      const cat = item.category || "uncategorized";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {});
  };

  const groupedWithCover = Object.entries(groupByCategory(images)).map(
    ([category, items]) => {
      const sorted = [...items].sort(
        (a, b) =>
          new Date(b.lastModified || 0).getTime() -
          new Date(a.lastModified || 0).getTime()
      );
      return {
        category,
        images: sorted,
        coverImage: sorted[0],
      };
    }
  );

  const activeGroup = groupedWithCover.find(
    (g) => g.category === activeCategory
  );

  const paginatedImages = activeGroup
    ? activeGroup.images.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : [];

  const totalPages = activeGroup
    ? Math.ceil(activeGroup.images.length / ITEMS_PER_PAGE)
    : 1;

  return (
    <div className="p-5  min-h-screen bg-[#FFEFF1]">
      <h2 className={`text-3xl font-bold text-center pb-10 text-[#C45C61] ${quicksand.className}`}>
        Gallery
      </h2>

      {/* Category Covers */}
      {!activeCategory ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupedWithCover.map(({ category, coverImage }) => (
            <div
              key={category}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
            >
              <Image
                src={coverImage.url}
                alt={`${category} Cover`}
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
              <div className="absolute bottom-4 left-4 text-white text-xl font-semibold capitalize z-10">
                {category}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <button
            className="mb-6 px-4 py-2 bg-white border rounded hover:bg-gray-100 transition"
            onClick={() => {
              setActiveCategory(null);
              setCurrentPage(1);
            }}
          >
            ← Back to Categories
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedImages.map((item) => (
              <div
                key={item.key}
                className="relative overflow-hidden rounded-xl shadow-md group"
              >
                <Image
                  src={item.url}
                  alt="Gallery Image"
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
                  onClick={() =>
                    openImage(images.findIndex((i) => i.key === item.key))
                  }
                />
                {isAuthenticated && (
                  <button
                    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded shadow"
                    onClick={() => handleDelete(item.key)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              className={`px-4 py-2 rounded-full ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-[#C45C61] text-white hover:bg-[#a14e56]"
              }`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
            <span className="text-lg font-medium text-[#C45C61]">
              {currentPage} / {totalPages}
            </span>
            <button
              className={`px-4 py-2 rounded-full ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-[#C45C61] text-white hover:bg-[#a14e56]"
              }`}
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div
            className="relative w-[90%] max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <IoCloseSharp
              size={36}
              className="absolute top-2 right-2 text-white bg-white/20 p-1 rounded-full cursor-pointer hover:bg-white/40 transition"
              onClick={closeImage}
            />
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-2 bg-black/50 rounded-full hover:bg-black/70"
              onClick={prevImage}
            >
              ◀
            </button>
            <Image
              src={selectedImage}
              alt="Large"
              width={1000}
              height={800}
              className="rounded-xl shadow-xl w-full object-contain max-h-[90vh]"
            />
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-2 bg-black/50 rounded-full hover:bg-black/70"
              onClick={nextImage}
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
