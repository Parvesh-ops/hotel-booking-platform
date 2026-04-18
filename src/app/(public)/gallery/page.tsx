"use client";

import { useState } from "react";
import Image from "next/image";
import PageBanner from "@/src/components/PageBanner";
import Container from "@/src/components/ui/container";
import { categories, GalleryCategory, galleryImages } from "./types/type";


const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");

  const filtered =
    activeCategory === "ALL"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Hero Banner */}
      <PageBanner
        image="/about-banner.png"
        title="Gallery"
        name=""
      />

      {/* Gallery Section */}
      <section className="bg-[#FDF8EE] py-16 md:py-20">
        <Container>
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-playfair text-[#15395B]">
              Explore Our Gallery
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-2">
              Discover moments, spaces, and experiences
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 md:mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs md:text-sm font-semibold tracking-widest cursor-pointer border transition-all duration-300
                  ${
                    activeCategory === cat
                      ? "bg-[#C9960C] text-white shadow-md"
                      : "text-[#15395B] border-[#C9960C]/30 hover:bg-[#C9960C]/10"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((image, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/3] overflow-hidden group"
              >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />

                {/* Optional Caption */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <p className="text-[#FDFDFD] text-lg tracking-wide text-center px-4">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GalleryPage;