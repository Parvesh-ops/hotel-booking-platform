import PageBanner from "@/src/components/PageBanner";
import Container from "@/src/components/ui/container";
import Image from "next/image";
import { facilities } from "./types/type";


const FacilitiesPage = () => {
    return (
        <div>
            {/* Hero Banner */}
            <PageBanner
                image="/about-banner.png"
                title="Facilities"
                name=""
            />

            {/* Facilities Section */}
            <section className="bg-[#FDF8EE] py-16">
                <Container>
                    <div className="flex flex-col gap-12">
                        {facilities.map((facility, index) => (
                            <div
                                key={index}
                                className={`flex justify-between items-center gap-8 ${
                                    facility.imageOnRight ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Image */}
                                <div className="w-full md:w-1/3 relative h-64 md:h-72 lg:h-80 overflow-hidden flex-shrink-0">
                                    <Image
                                        src={facility.image}
                                        alt={facility.title}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                </div>

                                {/* Text */}
                                <div className="w-full md:w-1/2 flex flex-col gap-4">
                                    <h3
                                        className="relative text-2xl md:text-3xl font-bold text-primary-12 mb-3 after:content-[''] after:block after:w-14 after:h-[2px] after:bg-[#C9960C]  after:mt-2"
                                        style={{ fontFamily: 'var(--font-cormorant)' }}
                                    >
                                        {facility.title}
                                    </h3>
                                    <p className="text-sm text-[#15395B] leading-relaxed">
                                        {facility.description}
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

export default FacilitiesPage;