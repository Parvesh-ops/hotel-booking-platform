import Image from "next/image";
import Container from "./ui/container";

interface ReviewProps {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const reviews: ReviewProps[] = [
  {
    id: 1,
    text: "The Royal exceeds every expectation. The attention to detail is extraordinary — from the fresh orchids in the lobby to the perfectly turned-down beds each evening.",
    author: "James Thornton",
    role: "United Kingdom",
    avatar: "/about-banner.png", 
  },
  {
    id: 2,
    text: "In 20 years of reviewing luxury hotels worldwide, The Royal remains my gold standard. The service is intuitive, warm, and genuinely exceptional.",
    author: "Lady Catherine Pembroke",
    role: "Global Traveler",
    avatar: "/about-banner.png",
  },
  {
    id: 3,
    text: "A masterclass in hospitality. The culinary program alone is worth the visit, but paired with the spa and impeccable rooms, it's an unrivalled experience.",
    author: "Dr. Sophia Chen",
    role: "Wellness Consultant",
    avatar: "/about-banner.png",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-primary-12 py-16 px-6 text-center">
        <Container>
      
      {/* Top label */}
      <p className="text-xs md:text-sm tracking-[3px] font-semibold text-[#C9960C] uppercase mb-3">
        Guest Review
      </p>

      {/* Heading */}
      <h2
        className="text-2xl md:text-3xl font-bold text-white mb-10 
        after:content-[''] after:block after:w-16 after:h-[2px] 
        after:bg-[#C9960C] after:mt-3 after:mx-auto"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        What our Guests Say
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-[#FDFDFD]/10 backdrop-blur-md 
            p-6 text-left flex flex-col justify-between 
            hover:translate-y-[-5px] transition duration-300"
          >
            {/* Review text */}
            <p className="text-[#FDFDFD] text-sm md:text-base leading-relaxed mb-6">
              “{review.text}”
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-[#FDFDFD] font-semibold text-sm">
                  {review.author}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}