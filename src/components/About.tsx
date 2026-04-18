import Image from "next/image";
import Container from "./ui/container";

const About = () => {
    return (
        <section className="bg-[#FDFDFD] py-16 md:py-24">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

                    {/* Text Section */}
                    <div className="flex-1">
                        <h3
                            className="text-2xl md:text-4xl font-bold text-primary-12 mb-4 relative"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            Our Story
                            <span className="block w-16 h-[2px] bg-[#C9960C] mt-2"></span>
                        </h3>

                        <p className="text-[#15395B] leading-relaxed text-sm md:text-base">
                            Nestled in the heart of London's Mayfair, The Royal Hotel has been a beacon of sophistication since 1892. Our grand architecture, impeccable service, and attention to every detail create an unforgettable experience.
                            <br /><br />
                            From our Michelin-starred restaurant to our world-class spa, every moment at The Royal is designed to exceed your expectations. We've hosted royalty, dignitaries, and discerning travelers from around the globe.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className=" ">
                        <Image
                            src="/about-banner.png"
                            alt="about-image"
                            width={400}
                            height={500}
                            className="h-44 md:h-54 lg:h-66 w-44 md:w-96 lg:w-96 object-cover"
                            priority
                        />

                    </div>

                </div>
            </Container>
        </section>
    );
};

export default About;