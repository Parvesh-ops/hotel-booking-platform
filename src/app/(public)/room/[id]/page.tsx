import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle, Users, BedDouble, Square, ShieldCheck, Wifi, Coffee, Clock } from "lucide-react";
import Link from "next/link";
import { rooms } from "../types/type";
import Container from "@/src/components/ui/container";


type Props = {
  params: Promise<{ id: string }>;
};

export default async function RoomDetails({ params }: Props) {
  const { id } = await params;

  const room = rooms.find((r) => r.id.toString() === id);

  if (!room) return notFound();

  const galleryImages =
    room.images && room.images.length > 0
      ? room.images
      : [room.image, room.image, room.image];

  return (
    <div className="bg-[#FAF5E7]">
      {/* Gallery Section */}
      <section className="py-14">
        <Container>
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-3">

  {/* LEFT BIG IMAGE */}
  <div className="relative h-[250px] md:h-[400px] lg:h-[450px]">
    <Image
      src={galleryImages[0]}
      alt={room.name}
      fill
      className="object-cover "
      priority
    />
  </div>

  {/* RIGHT SIDE */}
  <div className="hidden md:grid grid-rows-2 gap-3 h-[250px] md:h-[400px] lg:h-[450px]">

    {galleryImages.slice(1, 3).map((img, idx) => (
      <div key={idx} className="relative h-full">
        <Image
          src={img}
          alt=""
          fill
          className="object-cover "
        />

        {/* SHOW ALL PHOTOS */}
        {idx === 1 && (
          <div className="absolute bottom-3 right-3">
            <span className="bg-white text-[#C9960C] text-xs font-semibold px-4 py-2 hover:bg-[#C9960C] hover:text-white transition">
              SHOW ALL PHOTOS
            </span>
          </div>
        )}
      </div>
    ))}

  </div>
</div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="pb-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Content Column */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-primary-12 mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}>
                  {room.name}
                </h1>

                <div className="flex flex-wrap items-center gap-2 text-sm text-primary-12/70">
                  <div className="flex items-center gap-2">
                    <span className="text-primary-12">{room.guests} Guests</span>
                  </div>
                  <span className="text-primary-12">•</span>
                  <div className="flex items-center gap-2">
                    <span className="text-primary-12">{room.category}</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-pr mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Room Description
                </h3>
                <p className="text-pr/80 leading-relaxed mb-4">
                  {room.description || "Experience perfection in our elegantly appointed rooms. Each space is meticulously designed to provide the ultimate in comfort and style, featuring custom furnishings, premium linens, and state-of-the-art amenities."}
                </p>
              </div>

              {/* Facilities */}
              <div>
                <h3 className="text-2xl font-bold text-pr mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Room Facilities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
                  {(room.facilities || ["Mini Bar", "Air Conditioning", "Safe Box", "Broadband Wi-Fi", "Daily Cleaning", "Room Service"]).map((facility, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <CheckCircle size={16} className="text-[#8F6B09]" />
                      </div>
                      <span className="text-sm font-medium text-pr/80">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-neutral-1 border border-[#8F6B09]/10 p-8">
                <div className="mb-8">
                  <p className="text-xs font-bold tracking-[0.2em] text-primary-12 uppercase mb-2">Total Price</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-pr italic" style={{ fontFamily: "var(--font-cormorant)" }}>Rs {room.price}/night</span>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <Link
                    href="/booking"
                    className="block w-full text-center bg-[#C9960C] text-[#FDFDFD] py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#725607] transition-all duration-300"
                  >
                    Book Now
                  </Link>
                  <button className="w-full font-bold border border-[#C9960C] text-[#C9960C] py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C9960C] hover:text-white transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
