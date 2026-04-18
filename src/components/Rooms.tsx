import { rooms } from "../app/(public)/room/types/type";
import Image from "next/image";
import Container from "./ui/container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RoomsSection() {
    return (
        <section className="bg-[#FDFDFD] py-16 px-6 text-center">
            <Container>

                {/* Heading */}
                <div className="text-center mb-10">
                    <p className="text-sm font-bold text-[#C9960C] uppercase mb-2">
                        Accommodations
                    </p>
                    <h2
                        className="text-2xl md:text-3xl font-bold text-primary-12 mb-3 
                        after:content-[''] after:block after:w-14 after:h-[2px] 
                        after:bg-[#C9960C] after:mt-1 after:mx-auto"
                        style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                        Luxury Rooms &amp; Suites
                    </h2>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {rooms?.slice(0, 3).map((room) => (
                        <div key={room.name}>
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                                    <p className="text-[11px] tracking-[2px] font-semibold text-[#D3A938] uppercase mb-1">
                                        $ {room.price}
                                    </p>
                                    <p
                                        className="text-lg md:text-xl font-bold text-[#FDFDFD] mb-3"
                                        style={{ fontFamily: 'var(--font-cormorant)' }}
                                    >
                                        {room.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-10">
                    <Link
                        href="/room"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9960C] text-white font-semibold text-sm uppercase tracking-wide rounded-none hover:bg-[#b8890b] transition-all duration-300 group"
                    >
                        View More Rooms
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

            </Container>
        </section>
    );
}