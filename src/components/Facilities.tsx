import { Wifi, Waves, Heart, Dumbbell, UtensilsCrossed } from "lucide-react";
import Container from "./ui/container";
import { LucideIcon } from "lucide-react";

interface FacilitiesProps {
    icon: LucideIcon;
    label: string;
}

const facilities: FacilitiesProps[] = [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Waves, label: "Swimming Pool" },
    { icon: Heart, label: "SPA" },
    { icon: Dumbbell, label: "GYM / Fitness Center" },
    { icon: UtensilsCrossed, label: "Restaurant" },
];

export default function FacilitiesSection() {
    return (
        <section className="bg-[#0B1F33] py-16">
            <Container>

                {/* Heading */}
                <div className="text-center mb-10">
                    <p className="text-[11px] font-bold text-[#C9960C] uppercase mb-2">
                        World Class
                    </p>

                    <h3
                        className="text-2xl md:text-3xl font-bold text-white mb-3 
                        after:content-[''] after:block after:w-14 after:h-[2px] 
                        after:bg-[#C9960C] after:mt-1 after:mx-auto"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        Facilities
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {facilities.map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="border border-white/10 bg-white/5 
                            flex flex-col items-center justify-center 
                            py-6 px-6 text-center
                           "
                        >
                            <Icon
                                size={26}
                                className="text-[#C9960C] mb-3"
                                strokeWidth={1.5}
                            />

                            <span className="text-[12px] text-white/80">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}