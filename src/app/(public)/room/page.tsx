"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { rooms } from "./types/type";
import PageBanner from "@/src/components/PageBanner";
import Container from "@/src/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rooms & Suites |The Royal Hotel",
    description: "Experience luxury and comfort in the heart of Nepal. Discover our story, amenities, and commitment to exceptional hospitality.",
    icons: {
        icon: '/HotelLogo.png',
    },
};


const categories = ["ALL", "DELUXE ROOM", "STANDARD ROOM", "ROYAL SUITES"];


const RoomsAndSuites = () => {
    const [activeCategory, setActiveCategory] = useState("ALL");

    const filteredRooms =
        activeCategory === "ALL"
            ? rooms
            : rooms.filter((room) => room.category === activeCategory);

    return (
        <div>
            {/* Hero Banner */}
            <PageBanner
                image="/about-banner.png"
                title="Rooms & Suites"
                name=""
            />

            {/* Rooms Section */}
            <section className="bg-[#FDF8EE] py-14">
                <Container>
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 border border-[#8F6B09]/10 text-center text-xs font-semibold tracking-widest transition-colors duration-200 ${activeCategory === cat
                                    ? "bg-[#8F6B09] text-white"
                                    : "bg-transparent text-[#15395B] hover:bg-[#8F6B09]/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Room Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredRooms.map((room) => (
                            <div
                                key={room.id}
                                className="bg-[#FFFCF5] overflow-hidden shadow-sm"
                            >
                                {/* Room Image */}
                                <div className="relative w-full aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={room.image}
                                        alt={room.name}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                    {/* Price Badge */}
                                    <div className="absolute bottom-3 left-3 px-3 py-1">
                                        <span className="text-secondary-12 text-[10px] font-bold tracking-wider uppercase">
                                            From Rs {room.price}/Night
                                        </span>
                                    </div>
                                </div>

                                {/* Room Info */}
                                <div className="flex items-center justify-between px-4 py-2">
                                    <div>
                                        <h5
                                            className="text-lg font-bold text-primary-12"
                                            style={{ fontFamily: "var(--font-cormorant)" }}
                                        >
                                            {room.name}
                                        </h5>
                                        <p className="text-xs text-primary-12 mt-1">
                                            {room.guests} Guest &nbsp;·&nbsp; {room.type}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/room/${room.id}`}
                                        className="bg-[#C9960C] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 hover:bg-[#a97d0a] transition-colors duration-200 whitespace-nowrap"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default RoomsAndSuites;