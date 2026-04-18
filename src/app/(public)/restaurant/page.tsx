"use client";

import PageBanner from "@/src/components/PageBanner";
import Container from "@/src/components/ui/container";
import { useState } from "react";
import { menuData } from "./types/type";


const MenuPage = () => {
    const [openCategory, setOpenCategory] = useState<string | null>("Lunch");

    const toggle = (label: string) => {
        setOpenCategory((prev) => (prev === label ? null : label));
    };

    return (
        <div>
            {/* Hero Banner */}
            <PageBanner
                image="/about-banner.png"
                title="Restaurant & Menu"
                name=""
            />

            {/* Menu Section */}
            <section className="bg-[#FDF8EE] py-16 min-h-screen">
                <Container>
                    <div className="max-w-2xl mx-auto">
                        {/* Page Title */}
                        <h3
                            className="relative text-2xl md:text-3xl font-bold text-primary-12 text-center mb-3 after:content-[''] after:block after:w-14 after:h-[2px] after:bg-[#C9960C] after:mt-2 after:mx-auto"
                            style={{ fontFamily: 'var(--font-cormorant)' }}
                        >
                            Our Menu
                        </h3>

                        {/* Accordion */}
                        <div className="flex flex-col gap-0">
                            {menuData.map((category) => {
                                const isOpen = openCategory === category.label;

                                return (
                                    <div key={category.label} className="">
                                        {/* Category Header */}
                                        <button
                                            onClick={() => toggle(category.label)}
                                            className="w-full flex items-center justify-center gap-4 py-4 text-[#C9960C] hover:opacity-80 transition-opacity"
                                        >
                                            <span
                                                className="text-lg font-bold"
                                                style={{ fontFamily: "var(--font-cormorant)" }}
                                            >
                                                {category.label}
                                            </span>

                                            <span className="text-xl leading-none">
                                                {isOpen ? "∧" : "∨"}
                                            </span>
                                        </button>

                                        {/* Menu Items */}
                                        {isOpen && (
                                            <div className="pb-4">
                                                {category.items.map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center justify-between py-3 border-b border-[#15395B]/10 last:border-0"
                                                    >
                                                        <span className="text-sm text-[#15395B]">
                                                            {item.name}
                                                        </span>
                                                        <span className="text-sm text-[#15395B] font-medium">
                                                            {item.price}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default MenuPage;