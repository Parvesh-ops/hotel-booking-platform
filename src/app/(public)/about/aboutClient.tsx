"use client";

import PageBanner from "@/src/components/PageBanner";
import Container from "@/src/components/ui/container";
import Image from "next/image";
import HeadingStyle from "@/src/components/layout/HeadingStyle";
import { stats } from "./types/type";
import CoreValues from "./_component/CoreValues";
import LeaderShipTeam from "./_component/LeaderShip-Team";


const AboutClient = () => {
    return (
        <div>
            {/* Hero Banner */}
            <PageBanner
                image="/about-banner.png"
                title="About Us"
                name={""}
            />

            <section className="bg-white mb-6">
                <Container>
                    {/* Heading */}
                    <div className="text-start mt-10">
                        <HeadingStyle
                            title="About Us"
                            style="text-lg text-[#C9960C] text-start mb-3"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                        {/* Text Section */}
                        <div className="flex-1">
                            <h3
                                className="text-2xl md:text-3xl font-bold text-primary-12 mb-3 after:content-[''] after:block after:w-14 after:h-[2px] after:bg-[#C9960C] after:mt-2"
                                style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                                Our Story
                            </h3>

                            <p className="text-[#15395B] leading-relaxed mt-3">
                                Nestled in the heart of London&apos;s Mayfair, The Royal Hotel
                                has been a beacon of sophistication since 1892. Our grand
                                architecture, impeccable service, and attention to every detail
                                create an unforgettable experience.
                                <br />
                                <br />
                                From our Michelin-starred restaurant to our world-class spa,
                                every moment at The Royal is designed to exceed your
                                expectations. We&apos;ve hosted royalty, dignitaries, and
                                discerning travelers from around the globe.
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className=" ">
                            <Image
                                src="/about-banner.png"
                                alt="about-image"
                                // fill
                                width={300}
                                height={500}
                                className="h-44 md:h-54 lg:h-66 w-44 md:w-96 lg:w-96"
                                priority
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Statistics Section */}
            <section className="bg-primary-12 py-16 md:py-24">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center items-baseline gap-1">
                                    <h4
                                        className="text-4xl md:text-5xl font-bold text-[#C9960C]"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        {stat.number}
                                    </h4>
                                    {stat.suffix && (
                                        <span className="text-2xl md:text-3xl text-[#C9960C] font-bold">
                                            {stat.suffix}
                                        </span>
                                    )}
                                </div>
                                <p className="text-neutral-5 text-sm md:text-base mt-2">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            <CoreValues />
            <LeaderShipTeam />
        </div>
    );
};

export default AboutClient;
